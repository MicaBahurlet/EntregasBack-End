// un controlador es una función que ejecuta algo. 

import { Request, Response } from "express";

import Gasto, { IGasto } from "../models/gastos"; // me traigo el model y la interface 

// es async porque espera una respuesta 
export const getGasto = async ({}, res:Response) => {
    // acá no tiene que manejar ningún reques ya que solo quiero que me de todos los gastos
    const condicion = { estado: true };

    const gastos = await Gasto.find(condicion); // va a buscar en el modelo student lo que yo le pase como parametro, puedo hacer find porque yo cree un Model. 

    res.json({ gastos }); // la respuesta es un json y dentro de json quiero que me de los gastos (que son un objeto)

    console.log("Gasto cargado");

}