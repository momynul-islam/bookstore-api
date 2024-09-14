const knex = require("../db/knex");

exports.getAllAuthors = async (req, res, next) => {
  const authors = await knex.select().from("authors");
  res.status(200).json({
    status: "success",
    authors,
  });
};

exports.getAuthor = async (req, res, next) => {
  const authorId = req.params.authorId;
  const author = await knex
    .select()
    .from("authors")
    .where("id", authorId)
    .first();
  res.status(200).json({
    status: "success",
    author,
  });
};

exports.createAuthor = async (req, res, next) => {
  try {
    const { name, bio, birthdate } = req.body;

    if (!name || !birthdate || name == "" || birthdate == "") {
      throw new Error("Missing Value.Bad request!");
    }

    const [newAuthorId] = await knex("authors").insert({
      name,
      bio,
      birthdate,
    });

    const newAuthor = await knex
      .select()
      .from("authors")
      .where("id", newAuthorId);

    res.status(201).json({
      status: "success",
      author: newAuthor,
    });
  } catch (err) {
    next(err);
  }
};

exports.updateAuthor = async (req, res, next) => {
  try {
    const { name, bio, birthdate } = req.body;
    const authorId = req.params.authorId;

    const [updatedAuthorId] = await knex("authors")
      .where("id", authorId)
      .update({ name, bio, birthdate });

    const updatedAuthor = await knex
      .select()
      .from("authors")
      .where("id", updatedAuthorId);

    res.status(200).json({
      status: "success",
      author: updatedAuthor,
    });
  } catch (err) {
    next(err);
  }
};

exports.deleteAuthor = async (req, res, next) => {
  try {
    const authorId = req.params.authorId;
    await knex("authors").where("id", authorId).del();
    res.status(204).json({
      status: "success",
      message: "Author deleted successfully",
    });
  } catch (err) {
    next(err);
  }
};
