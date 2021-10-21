const express = require("express");
const router = express.Router();

const { pagesAbout } = require("../controllers/pages")

// router.get("/", booksIndex);
router.get("/about", pagesAbout);

module.exports = router;