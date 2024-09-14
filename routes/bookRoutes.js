const express = require("express");
const { body } = require("express-validator");

const bookController = require("../controllers/bookController");

const router = express.Router();

router
  .route("/")
  .get(bookController.getAllBooks)
  .post([body("title").isString().notEmpty()], bookController.createBook);

router
  .route("/:bookId")
  .get(bookController.getBook)
  .patch([body("title").isString().notEmpty()], bookController.updateBook)
  .delete(bookController.deleteBook);

module.exports = router;
