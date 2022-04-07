const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
const axios = require('axios')

//rotas
    app.get('/api', (req, res) => {
        return res.json([
            {name: 'marcos'},
            {name: 'jessica'}
        ])
    })


    app.get('/api2', async (req, res) => {
        try {
        //no front-end pedimos para transformar os dados em json para obter os 'data' da resposta aqui é um pouco diferente | dentro da resposta já existe o data então eu conseguiria acessar com resposta.data ou extrair somente o data com { data } = await axios('exemplo.com/api')
        const { data } = await axios('https://jsonplaceholder.typicode.com/users')


        //respondo a requisição com os dados
        return res.json(data)

        } catch (error) {
            console.error(error)
        }
    })

app.listen('8081', function(){
    console.log('Server on...')
})