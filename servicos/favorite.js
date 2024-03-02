const fs = require('fs')

function getAllFavoriteBooks() {
    return JSON.parse(fs.readFileSync("favorites.json"))
}

function postFavoriteBook(id) {
    const books = JSON.parse(fs.readFileSync("livros.json"))
    let favorites = JSON.parse(fs.readFileSync("favorites.json"))

    const book = books.find(book => book.id === id)
    favorites = [...favorites, book]
    console.log(book)
    fs.writeFileSync("favorites.json", JSON.stringify(favorites))
}

function deleteFavoriteBook(id) {
    const currentFavorites = JSON.parse(fs.readFileSync("favorites.json"))
    const filtredFavorite = currentFavorites.filter(book => book.id !== id)
    fs.writeFileSync("favorites.json", JSON.stringify(filtredFavorite))
}

module.exports = { getAllFavoriteBooks, postFavoriteBook, deleteFavoriteBook }