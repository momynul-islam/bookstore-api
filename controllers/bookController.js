const { validationResult } = require("express-validator");

const knex = require("../db/knex");

exports.getAllBooks = async (req, res, next) => {
  try {
    const books = await knex.select().from("books");
    res.status(200).json({
      status: "success",
      books,
    });
  } catch (err) {
    next(err);
  }
};

exports.getBook = async (req, res, next) => {
  try {
    const bookId = req.params.bookId;
    const book = await knex.select().from("books").where("id", bookId).first();

    res.status(200).json({
      status: "success",
      book,
    });
  } catch (err) {
    next(err);
  }
};

exports.createBook = async (req, res, next) => {
  try {
    const { title, description, published_date, author_id } = req.body;

    const author = await knex
      .select()
      .from("authors")
      .where("id", author_id)
      .first();

    const [bookId] = await knex("books").insert({
      title,
      description,
      published_date,
      author_id,
    });

    const newBook = await knex
      .select()
      .from("books")
      .where("id", bookId)
      .first();

    res.status(201).json({
      status: "success",
      book: newBook,
    });
  } catch (err) {
    next(err);
  }
};

exports.updateBook = async (req, res, next) => {
  try {
    const bookId = req.params.bookId;
    const errors = validationResult(req);
    const { title, description, published_date, author_id } = req.body;

    const author = await knex
      .select()
      .from("authors")
      .where("id", author_id)
      .first();

    const updatedBookId = await knex("books")
      .where("id", bookId)
      .update({ title, description, published_date, author_id });

    const updatedBook = await knex
      .select()
      .from("books")
      .where("id", updatedBookId);

    res.status(200).json({
      status: "success",
      book: updatedBook,
      validationError: errors.array(),
    });
  } catch (err) {
    next(err);
  }
};

exports.deleteBook = async (req, res, next) => {
  try {
    const bookId = req.params.bookId;

    await knex("books").where("id", bookId).del();

    res.status(204).json({
      status: "success",
      message: "Book deleted successfully",
    });
  } catch (err) {
    next(err);
  }
};
