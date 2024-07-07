<h1>Entregas correspondientes al módulo de Backend en NUCBA 	&#128175;</h1> 

<h2> &#9989; E1 -  App CLI de gastos</h2>
E1: la consigna es crear una app CLI que sirva para guardar gastos y también poder visualizar los gastos almacenados dinámicamente en un JSON. 
Se puede guardar gastos según categoría y describirlos. 

<br>
Despliego en Node.js y utilizo la librería Inquirer para trabajar en la línea de comandos y además  trabajo con Inquirer date prompt para formatear la fecha del ingreso del gasto a un formato más amigable y en español.

<br>
Es la actividad N1 del módulo backend correspondiente a mi carrera de programación FULL STACK.

<hr>

<h2> &#9989; E2 BD NoSQL - App de gastos</h2>
E2: 📍 Deberan realizar una API que simule ser una app de gastos. La misma contara con la funcionalidad de guardar los gastos y datos de un usuario. 
Además,debe permitir realizar post / get / getId sin necesidad de tener un JSON de manera local, sino que esté persistido en la DB ( Mongo Atlas ).

Contraseña MongoAtlas: NUCBAgastos <br>
Clusters: NUCBAgastosE2 <br>
conexion string: mongodb+srv://micabahurletgo:<password>@nucbagastose2.tzk1ayt.mongodb.net/
Consulta base de datos: http://localhost:3000/api/gastos

npm run start para correr proyecto

Estructura para agregar desde MongoCompas:

{
  "_id": {
    "$oid": "6658801964bf674753f514b7"
  },

  "valor": 100,

  "concepto": "ejemplo",

  "fecha": "2024-06-01T00:00:00.000Z"
  
}


<hr>