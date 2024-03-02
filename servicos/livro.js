const fs = require('fs')

const file = "livros.json"

function getTodosLivros() {
    return JSON.parse(fs.readFileSync(file))
}

function getLivroPorId(id) {
    const livros = JSON.parse(fs.readFileSync(file))
    const livro = livros.find((livro) => livro.id === id)
    return livro
}

function insereLivro(novoLivro) {
    const livrosAtuais = JSON.parse(fs.readFileSync(file))
    const listaLivroAtualizada = [...livrosAtuais, novoLivro]

    fs.writeFileSync(file, JSON.stringify(listaLivroAtualizada))
}

function modificaLivros(modificacoes, id) {
    let livrosAtuais = JSON.parse(fs.readFileSync(file))
    //Encontra o index do livro a ser modificado
    const indexLivroModificado = livrosAtuais.findIndex(livro => livro.id === id)

    //verificação para saber se o id é válido
    if (indexLivroModificado === -1) {
        return false
    } else {
        //Altera o conteúdo do livro
        const livroModificado = { ...livrosAtuais[indexLivroModificado], ...modificacoes }

        //Atualiza a lista de livros com o novo conteúdo
        livrosAtuais[indexLivroModificado] = livroModificado
        fs.writeFileSync(file, JSON.stringify(livrosAtuais))

        return true
    }

}

function apagaLivro(id) {
    const livrosAtuais = JSON.parse(fs.readFileSync(file))
    const livro = livrosAtuais.find(livro => livro.id === id)

    if (livro) {
        const livrosFiltrados = livrosAtuais.filter(livro => livro.id !== id)
        fs.writeFileSync(file, JSON.stringify(livrosFiltrados))
        return true
    } else {    
        return false
    }


}

module.exports = {
    getTodosLivros,
    getLivroPorId,
    insereLivro,
    modificaLivros,
    apagaLivro
}