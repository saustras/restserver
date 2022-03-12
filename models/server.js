const express = require('express')
const cors = require('cors')

class Server {
    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.usersPath = '/api/usuarios'

        //middleware
        this.middleware();

        //routes
        this.routes();
    }

    middleware() {

        //cors
        this.app.use(cors());

        //Lectura y parseo del body
        this.app.use(express.json())

        //directorio publico
        this.app.use(express.static('public'))


    }

    routes(){
        this.app.use(this.usersPath, require('../routes/users'))
    }
    listen(){
        this.app.listen(this.port,()=>{
            console.log(`server listening on port`, this.port)
        })
    }
}

module.exports = Server;