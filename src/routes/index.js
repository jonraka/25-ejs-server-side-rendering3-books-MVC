const express = require("express");
const router = express.Router();

// router.get("/", booksIndex);
router.use("/", require("./books"));
router.use("/", require("./pages"));

module.exports = router;
