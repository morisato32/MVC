const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')
const app = express()

const port = 5151

const homeRouter = require('./src/routers/homeRouter')

app.engine('handlebars',exphbs.engine())
app.set('views',path.join('src/views'))
app.set('view engine','handlebars')

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(homeRouter)

app.listen(port, () =>{
    console.log(`Servidor rodando na porta:${port}`)
})