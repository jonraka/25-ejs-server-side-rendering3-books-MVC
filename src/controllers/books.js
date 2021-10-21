const {
    getAllBooksModel,
    getCategoriesModel,
    postNewBookModel
} = require("../models/books");
const { renderMessage } = require("../utils/misc");

const booksIndex = async (req, res) => {
    try {
        res.render("pages/index", {
            page: "index",
            books: await getAllBooksModel()
        });
    }catch(err){
        renderMessage(res, "Error", "Internal Error #indx01", 500);
    }
}

const newBook = async (req, res) => {
    try{
        const categories = await getCategoriesModel();
        if(!categories.length) return renderMessage(res, "Error", "Internal Error #nbk01", 500);
        res.render("pages/newbook", {
            page: "newbook",
            categories
        });
    }catch(err){
        renderMessage(res, "Error", "Internal Error #nbk02", 500);
    }
}

const postNewBook = async (req, res) => {
    const { title, author, year, category } = req.body;

    try{
        const postNewBookResponse = await postNewBookModel(title, author, year, category);
        if(postNewBookResponse?.affectedRows > 0){
            renderMessage(res, "Success", "Book added successfully!", 200);
        }else{
            renderMessage(res, "Error", "Book was not added.", 400);
        }
    }catch(err){
        renderMessage(res, "Error", "Internal Error #pnbk01", 500);
    }
}

module.exports = {
    booksIndex,
    newBook,
    postNewBook
}