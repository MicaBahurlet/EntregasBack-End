// lógica del script

import {get, save} from "./fileMethods.js";
import inquirer from "inquirer";
import {promptNewGasto} from "./userPrompts.js";


const main = async () => {
    let run = true;
    while (run) {
        const action = await inquirer.prompt([
            {
                type: "list",
                name: "action",
                message: "Que quieres hacer?",
                choices: [
                    { value:1, name: "Añadir un nuevo gasto"},
                    { value:2, name: "Ver todos los gastos"},
                    { value:3, name: "Salir"},
                    
                ],

            },
        ]);
            
        
    }            
}


