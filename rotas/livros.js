const { Router } = require('express')

const router = Router()

router.get('/', (_, res)=>{
    res.send("Esta é a rota GET!")
})

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