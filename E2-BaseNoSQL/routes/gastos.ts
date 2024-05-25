import  { Router } from "express";

import { getGasto, getGastoByID, createGasto, updateGasto, deleteGasto } from "../controllers/gastos";
 
const gastosRoutes = Router();


gastosRoutes.get("/", getGasto); 
gastosRoutes.get ("/:id", getGastoByID); //el id para traer un gasto, el id es un parametro. Sirve para el front todo lo que venga despues del dos puntos con el get lo va a extraer // para buscar directamente depués de la / pongo el id 
gastosRoutes.post("/", createGasto);
gastosRoutes.delete("/:id", deleteGasto);
gastosRoutes.put("/:id", updateGasto);

export default gastosRoutes;