require('dotenv').config()
const http = require('http');
const app = require('./app/app')

const server = http.createServer(app)

port = process.env.PORT || 5000

server.listen(port, ()=>{
    console.log(`listening port on is ${port}`)
} )
