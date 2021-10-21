

const pagesAbout = async (req, res) => {
    res.render("pages/about", {
        page: "about",
    });
}


module.exports = {
    pagesAbout
}