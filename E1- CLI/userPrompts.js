// menú para el inquirer

import inquirer from "inquirer";
import DatePrompt from "inquirer-date-prompt";

inquirer.registerPrompt("date", DatePrompt); // mtodo que permite poner el TIPO de pregunta para que el user ingrese informacionn en el formato que quiera. 

// es async para que se ejecute SOLO despues de que se resuelva el inquirer
export async function promptNewGasto() {
    return await inquirer.prompt(newGastoPrompts);

}

const newGastoPrompts = [
    { //así debemos armar todas las opciones del menu, según ducamentación
        type: "input",
        name: "concepto",
        message: "Concepto del gasto: "
    },
    {
        type: "date",
        name: "fecha",
        message: "Fecha del gasto: ",
        locale: "es-ES",  // para que sea en español
        format: {month:"short", hour:undefined, minute:undefined}
    },
    {
        type: "input",
        name: "valor",
        message: "Valor del gasto (solo numeros): ",
        validate: (value) => {
            const valid = !isNaN(parseFloat(value));
            return valid || "Por favor ingresa solo números";
        }
    },
    {
        type: "input",
        name: "observaciones",
        message: "Observaciones del gasto: "
    }
];
