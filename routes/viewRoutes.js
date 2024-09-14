const express = require("express");

const viewController = require("../controllers/viewController");

const router = express.Router();

router.get("/", viewController.getHome);

router.get("/books", viewController.getBooks);
router.get("/authors", viewController.getAuthors);

router.get("/authors/:authorId", viewController.getAuthorById);
router.get("/books/:bookId", viewController.getBookById);

router.get("/create-authors", viewController.getCreateAuthor);
router.get("/create-books", viewController.getCreateBook);

module.exports = router;
