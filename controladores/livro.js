const { getTodosLivros, getLivroPorId, insereLivro, modificaLivros, apagaLivro } = require('../servicos/livro')

function getLivros(_, res) {
    try {
        const livros = getTodosLivros()
        res.send(livros)
    } catch (error) {
        res.status(500)
        res.send({ error: error.Error() })
    }
}

function getLivro(req, res) {
    try {
        const id = req.params.id
        if (id && Number(id)) {
            const livro = getLivroPorId(id)
            if (livro) {
                res.send(livro)
            } else (
                res.send("Livro não encontrado")
            )
        } else {
            res.status(422)
            res.send("Id inválido!")
        }

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postLivro(req, res) {
    try {
        if (req.body.titulo) {
            insereLivro(req.body)
            res.status(201)
            res.send("Livro inserido com sucesso!")
        } else {
            res.status(422)
            res.send("O campo título é obrigatório!")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function patchLivro(req, res) {
    try {
        const id = req.params.id
        if (id && Number(id)) {
            const modificacoes = req.body
            if (modificaLivros(modificacoes, id)) {
                res.send("Livro modificado com sucesso")
            } else {
                res.send("Id não encontrado")
            }

        } else {
            res.status(422)
            res.send("Id inválido!")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)

    }
}

function deleteLivro(req, res) {
    try {
        const id = req.params.id
        if (apagaLivro(id)) {
            res.send("Livro apagado com sucesso")
        } else{
            res.send(`Livro com id ${id} não foi encontrado`)
        }

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    deleteLivro
}