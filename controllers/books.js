const {
    getAllBooksModel,
    getCategoriesModel,
    postNewBookModel
} = require("../models/books");

const booksIndex = async (req, res) => {
    try {
        const data = {
            page: "index"
        };

        data.books = await getAllBooksModel();

        res.render("pages/index", data);
    }catch(err){
        res.status(500).render("pages/error", { error: "Internal Error #66234c" })
    }

}

const newBook = async (req, res) => {
    try{
        const categories = await getCategoriesModel();
        if(!categories.length) return res.status(500).render("pages/error", { error: "Internal Error #66234a-1" });
        res.render("pages/newbook", {
            page: "newbook",
            categories
        });
    }catch(err){
        res.status(500).render("pages/error", { error: "Internal Error #66234a-2" })
    }
}

const postNewBook = async (req, res) => {
    const { title, author, year, category } = req.body;

    try{
        const postNewBookResponse = await postNewBookModel(title, author, year, category);
        if(postNewBookResponse?.affectedRows > 0){
            res.render("pages/error", {error: "book added !"})
        }else{
            res.render("pages/error", {error: "book not inserted"})
        }
    }catch(err){
        res.status(500).render("pages/error", { error: "Internal Error #66234b" })
    }
}

module.exports = {
    booksIndex,
    newBook,
    postNewBook
}