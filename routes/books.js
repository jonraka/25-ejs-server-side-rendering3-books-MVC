const express = require("express");
const router = express.Router();

const { booksIndex, newBook, postNewBook } = require("../controllers/books")

router.get("/", booksIndex);
router.get("/newbook", newBook);
router.post("/newbook", postNewBook)

module.exports = router;