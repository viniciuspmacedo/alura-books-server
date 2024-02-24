const { Router } = require('express')
const { getLivros } = require('../controladores/livro')

const router = Router()

router.get('/', getLivros)

router.post('/', (_, res)=>{
    res.send("Esta é a rota POST!")
})

router.patch('/', (_, res)=>{
    res.send("Esta é a rota PATCH!")
})

router.delete('/', (_, res)=>{
    res.send("Esta é a rota DELETE!")
})
module.exports = router