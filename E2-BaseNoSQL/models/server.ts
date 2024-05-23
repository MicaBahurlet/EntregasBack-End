// esta dentro de modelo porque es una plantilla 

import express, { Express } from "express"; // los dos, Necesito "Express" para la clase y el otro para exportar
import gastosRoutes  from "../routes/gastos.ts";
import { conectarDB } from "../database/config";

export class Server {

    app: Express; //es la interface de express, me define el tipo de datos. 

    constructor () {
        this.app = express(); //el this es porque es una clase, sino no funciona. Le declaro que el app es del tipo express
        this.conexionaDB();
        this.middlewares();
        this.routes();

    }


    async conexionaDB() : Promise<void> {
        await conectarDB();
    }

    middlewares() : void {
        this.app.use(express.json());
    }

    routes() : void {
        this.app.use("/api/gastos", gastosRoutes);
    }
    

    listen() : void {
        this.app.listen(8080, () => {
            console.log("Servidor corriendo en el puerto 8080");
        });
    }
}