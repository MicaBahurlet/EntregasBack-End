// lógica del script

import {get, save} from "./filesMethods.js";
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
                    { value:1, name:"Ver todos los gastos" },
                    { value:2, name: "Añadir un nuevo gasto"},
                    { value:99, name: "Salir"},
                    
                ],

            },
        ]);
        switch (action.chosen) {
            case 1:
                await getAllGastos();
                break;
            case 2:
                await createNewGasto();
                break;
            case 99:
                run = false;
                break;
            default: // en caso de que la persona no haga nada
                run = false;
                break;            
        } 
        
    }  
    console.log ("Espero verte pronto, pero no gastes tanto NO HAY PLATA");           
};

main();




async function createNewGasto() {
    console.log ("Añadiendo un nuevo gasto");
    const newGasto = await promptNewGasto();
    console.log ("Guardando:", newGasto);
    const currentGastos = await get("gastos");
    currentGastos.push(newGasto); //para agregar un elemento a un array, usamos push

    await save("gastos", currentGastos); // llamo la funcion save y le paso por parámetro el nombre donde voy a guardar el array y el array
}

async function getAllGastos() {
    const currentGastos = await get("gastos");
    console.log (currentGastos);
}