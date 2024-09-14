const knex = require("../db/knex");

exports.getHome = (req, res, next) => {
  res.status(200).render("home", {
    title: "Home",
  });
};

exports.getBooks = async (req, res, next) => {
  const books = await knex.select().from("books");
  res.status(200).render("books", {
    title: "Books",
    books,
  });
};

exports.getAuthors = async (req, res, next) => {
  const authors = await knex.select().from("authors");
  const books = await knex.select().from("books");

  res.status(200).render("authors", {
    title: "Authors",
    authors,
    books,
  });
};

exports.getAuthorById = async (req, res, next) => {
  const authorId = req.params.authorId;
  const author = await knex
    .select()
    .from("authors")
    .where("id", authorId)
    .first();
  const booksByAuthorId = await knex
    .select()
    .from("books")
    .where("id", authorId);

  res.status(200).render("authorDetails", {
    title: author?.name || "unknown author",
    author,
    books: booksByAuthorId,
  });
};

exports.getBookById = async (req, res, next) => {
  const bookId = req.params.bookId;

  const book = await knex
    .select()
    .from("books")
    .innerJoin("authors", "books.author_id", "authors.id")
    .where("books.id", bookId)
    .first();
  res.status(200).render("bookDetails", {
    title: book?.title || "unknown book",
    book,
  });
};

exports.getCreateAuthor = (req, res, next) => {
  res.status(200).render("createAuthor", {
    title: "Create Author",
  });
};

exports.getCreateBook = async (req, res, next) => {
  const authors = await knex.select().from("authors");

  res.status(200).render("createBook", {
    title: "Create Book",
    authors,
  });
};
