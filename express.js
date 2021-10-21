const express = require("express");
const app = express();
require("dotenv").config()
const morgan = require("morgan");

app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.set("view engine", "ejs")
app.use(express.static("public"))

app.use("/", require("./routes/books"));

app.all("*", (req, res) => {
    res.status(404).render("pages/error", {
        page: "error",
        error: "Page not found"
    });
})

app.listen(process.env.PORT, () => {
    console.log(`Listening @ PORT: ${process.env.PORT}`);
})