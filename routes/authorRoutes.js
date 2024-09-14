const express = require("express");
const { body } = require("express-validator");

const authorController = require("../controllers/authorController");

const router = express.Router();

router
  .route("/")
  .get(authorController.getAllAuthors)
  .post(
    [body("name").isString().notEmpty(), body("birthdate").isDate()],
    authorController.createAuthor
  );

router
  .route("/:authorId")
  .get(authorController.getAuthor)
  .patch(
    [body("name").isString().notEmpty(), body("birthdate").isDate()],
    authorController.updateAuthor
  )
  .delete(authorController.deleteAuthor);

module.exports = router;
