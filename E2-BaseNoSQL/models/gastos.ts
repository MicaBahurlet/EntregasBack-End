//El model es una estructura para la base del documento. Se basa en ésta estructura para trabajar

import { Model, Schema, model } from "mongoose"; //importo mongoose


// creo una interface para establecer el tipo de dato que va a definir las propiedades y tipo de datos. para luego crear el schema y poder trabajar con el modelo usando mmoongose, me permite minimizar le error, porque en el schema no podré sumar cosas que aquí no tenga. 

export interface IGasto {
    
    gasto: Number;
    concepto: String;
    fecha: Date;
}

// creo el schema, <Aqui pongo el tipo de schema> y dentro del objeto defino las propiedades y tipo de datos. es una nueva instancia de la clase estema del tipo Igasto. Es una plantilla. 
const gastoSchema = new Schema<IGasto>({

    
    gasto: {
        type: Number, 
        required: true,
        // unique: true
    },
    concepto: {
        type: String, 
        required: true
    },
    fecha: {
        type: Date, 
        required: true
    },
    
})

const Gasto: Model <IGasto> = model <IGasto> ("Gasto", gastoSchema); //creo el modelo y le paso el nombre del esquema y el esquema. ¿Que va a almzacenar? 

export default Gasto;