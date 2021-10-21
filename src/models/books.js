const { sqlConnect, sqlConnectMulti } = require("../utils/db");

const getAllBooksModel = () => sqlConnect(
        "query",`
            SELECT books2.id, title, author, timeStamp, year, category AS category_id, categories.name AS category_name
            FROM books2
            LEFT JOIN categories
            ON categories.id = books2.category
    `).then(([data]) => data);


const getCategoriesModel = () => sqlConnect(
        "execute",
        "SELECT * FROM categories"
    ).then(([data]) => data);

const postNewBookModel = (title, author, year, category) => sqlConnect(
        "query",
        "INSERT INTO books2 (title, author, year, category) VALUES (?, ?, ?, ?)",
        [ title, author, year, category ]
    ).then(([data]) => data);


module.exports = {
    getAllBooksModel,
    getCategoriesModel,
    postNewBookModel
}