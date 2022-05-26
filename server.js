const cors = require('cors')
const express = require('express')
const app = express()
const routerFiles = require('./src/routes/filesRoutes')

app.use(express.json())
app.use(express.Router())
app.use(cors())
app.use(express.Router())
app.use(express.urlencoded({extended:true})) 

app.use('/files/data',routerFiles)

//port
const PORT = process.env.PORT || 8080

//server
const server = app.listen(PORT, () =>{
    console.log(`server is runningg port ${PORT}`)
})

module.exports = {app, server};