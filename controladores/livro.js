function getLivros(req, res) {
    try {
        res.send("Esta é a rota GET!")
    } catch (error) {
        res.status(500)
        res.send({error:error.Error()})
    }
}

module.exports = {
    getLivros
}