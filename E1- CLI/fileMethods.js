// funciones para leer el archivo

import fs from "fs";

//json.parse para que sea más legible
export const get = (file) => {
    return new Promise((resolve, reject) => {
        fs.readFile(file + '.json', 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } 
            resolve(JSON.parse(data));
        });
    });   
};

// e json.stringify para pasar el array a string
export const save = (file, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(file + '.json', JSON.stringify(data), (err) => {
            if (err) {
                reject(err);
            }
            resolve();
        });
    });
};