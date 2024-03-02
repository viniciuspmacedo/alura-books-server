const { getAllFavoriteBooks, postFavoriteBook, deleteFavoriteBook } = require('../servicos/favorite')

function getFavorites(_, res) {
    try {
        const favoriteBooks = getAllFavoriteBooks()
        res.status(200)
        res.send(favoriteBooks)
    } catch (error) {
        res.status(500)
        res.send({ error: error.Error() })
    }
}

function postFavorite(req, res) {
    try {
        const id = req.params.id
        postFavoriteBook(id)
        res.status(200)
        res.send("Livro adicionado aos favoritos")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }

}

function deleteFavorite(req, res) {

    try {
        const id = req.params.id
        deleteFavoriteBook(id)
        res.status(200)
        res.send("Favorito excluido com sucesso")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }

}

module.exports = { getFavorites, postFavorite, deleteFavorite }