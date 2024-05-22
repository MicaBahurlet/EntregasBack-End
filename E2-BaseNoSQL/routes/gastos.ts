import  { Router } from "express";

import { getGasto, getGastobyId, createGasto, deleteGasto, updateGasto } from "../controllers/gastos";

const gastosRoutes = Router();

gastosRoutes.get("/", getGasto);
gastosRoutes.get("/:id", getGastobyId); //el id para traer un gasto, el id es un parametro. Sirve para el front
gastosRoutes.post("/", createGasto);
gastosRoutes.delete("/:id", deleteGasto);
gastosRoutes.put("/:id", updateGasto);

export default gastosRoutes;