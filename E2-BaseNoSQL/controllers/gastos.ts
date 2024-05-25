// un controlador es una función que ejecuta algo. 

import { Request, Response } from "express";

import Gasto, { IGasto } from "../models/gastos"; // me traigo el model y la interface 

// es async porque espera una respuesta 
export const getGasto = async ({}, res:Response) => {
    // acá no tiene que manejar ningún reques ya que solo quiero que me de todos los gastos
    // const condicion = { estado: true };

    const gastos = await Gasto.find({}); // va a buscar en el modelo student lo que yo le pase como parametro, puedo hacer find porque yo cree un Model. Antes entre llaves tenía "condition" y sólo me devolvía los datos que yo tenía en estado true, al estar vacío me devuelve TODos

    res.json({ gastos }); // la respuesta es un json y dentro de json quiero que me de los gastos (que son un objeto)

    console.log("Gasto cargado");

}

// aqui si tiene req del tipo resquest y res del tipo response
export const getGastoByID = async (req:Request, res:Response) => {
    const { id } = req.params;
   
    const gasto: IGasto | null = await Gasto.findById(id);
    res.json({ gasto });
}

export const createGasto = async (req:Request, res:Response) => {

    const gastoData: IGasto = req.body;
    const gasto = new Gasto(gastoData);
    await gasto.save(); //metodo save para almacenar un documento y la base de datos
    res.json({ 
        msg: "Gasto guardado",
        gasto 
    });

    console.log("Gasto guardado exitosamente");

}

export const updateGasto = async (req:Request, res:Response) => {
    const { id } = req.params;
    const gastoData: IGasto = req.body;
    const gasto = await Gasto.findByIdAndUpdate(id, gastoData, { new: true }); //metodo FindOneAndUpdate para que busque y actualice
    res.json({ gasto });
}

export const deleteGasto = async (req:Request, res:Response) => {
    const { id } = req.params;
    const gasto = await Gasto.findByIdAndDelete(id);

    if (!gasto) {
        res.json({ 
            msg: "Gasto no encontrado"
        });
        return
    }

    res.json({ gasto });
}


