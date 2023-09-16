const express = require('express');
const { dbConnection } = require('../database/db.js');

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.paths = {
            clientes: "/clientes",
            automoviles: "/automoviles",
        }
        this.routes();
        this.middleware();
        this.connectDB();
    }

    async connectDB(){
        await dbConnection();
    }

    middleware(){
        this.app.use(express.json());
    }

    routes(){
        this.app.use(this.paths.clientes, require('../routes/cliente.routes.js'));
        this.app.use(this.paths.automoviles, require('../routes/automovil.routes.js'));
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`);
        });
    }
}

module.exports = Server;