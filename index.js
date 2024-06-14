// express es una funcion que contiene un objeto

const express= require("express"); // Importamos el modulo express

//Instanciacion o inicializacion de la funcion express() dentro de la variable app

const app = express(); //Ejecutamos la instancia de express

// Definimos un puerto que va a estar escuchando nuestro servidor

// const PORT = 3000;

// Esta es una variante para corroborar si se puede usar ese puerto
const PORT = process.env.PORT || 3000
// Configuramos nuestra primera ruta con la respuesta a la peticion
// el metodo get() de app escuchara las peticiones a la ruta a travez del metodo HTTP GET y respondera el texto citado
app.get("/", (req,res) =>{
    res.send("Hola chancha lechona COMO ANDAS? que haces");
});


//El método .listen() recibe un parámetro port con el puerto donde correrá el server y un callback que en este caso lo usamos para enviar un mensaje por consola.
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));



