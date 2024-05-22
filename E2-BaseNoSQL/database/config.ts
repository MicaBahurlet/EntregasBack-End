import mongoose from "mongoose";

export const conectarDB = async (): Promise<void> => {
    try {
        await mongoose.connect("mongodb+srv://micabahurletgo:NUCBAgastos@nucbagastose2.tzk1ayt.mongodb.net/");
        console.log("Base de datos online");
    } catch (error) {
        console.log(error);
        throw new Error("Error a la hora de iniciar la BD");
    }
}