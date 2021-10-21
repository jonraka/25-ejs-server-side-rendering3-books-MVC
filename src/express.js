const express = require("express");
const app = express();
require("dotenv").config()
const morgan = require("morgan");
const path = require("path");

app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.set('views', path.join(__dirname, "views"))
app.set("view engine", "ejs")
app.use(express.static("public"))

app.use("/", require("./routes/books"));

app.all("*", (req, res) => {
    res.status(404).render("pages/message", ["404", "Page not found"]);
})

app.listen(process.env.PORT, () => {
    console.log(`Listening @ PORT: ${process.env.PORT}`);
})