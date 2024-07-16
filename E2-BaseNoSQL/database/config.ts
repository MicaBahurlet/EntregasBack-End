// conexión con la base de datos. 

import mongoose from "mongoose";

export const conectarDB = async (): Promise<void> => {
    // try con la conexión a la database + mensaje para saber , catch para capturar el error y mostrarlo
    try {
        await mongoose.connect("mongodb+srv://micabahurletgo:NUCBAgastos@nucbagastose2.tzk1ayt.mongodb.net/");
        console.log("Base de datos online");
    } catch (error) {
        console.log(error);
        throw new Error("Error a la hora de iniciar la BD");
    }
}