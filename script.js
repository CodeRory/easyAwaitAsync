const { get } = require("express/lib/response");

 const datos = [{
    id: 1,
    title: 'Iron Man',
    year: 2008
}, {
    id: 2,
    title: 'Spiderman: Homecoming',
    year: 2007

}, {
    id: 3,
    title: 'Avengers: Endgame',
    year: 2019
}];
 
// Array datos vacío para hacer pruebas
/* const datos = []; */
/*Tenemos una función que devuelve estos datos, que sería síncrono porque no tenemos que
esperar nada. Nos lo devolvería instantáneamente 
const getDatos = () => {
  return datos;
}

console.log(getDatos());
*/

//Vamos a simular el retraso de la siguiente manera. Construimos la función getDatos
// y utilizamos el método setTimeout, que llama a una función determinada (en este caso
// getDatos) después de un determinado número de segundos (1500). Para captar esos datos
// que están puestos de forma asíncrona, tenemos que crear una promesa o nos devolverá un undefinied, 
// puesto que en ese momento de la ejecución no estaban disponibles los datos. Tiene dos parámetros,
// resolve que será lo que tiene que tratar, y reject si da error. 
const getDatos = () => {
    return new Promise((resolve, reject) => {
        if(datos.length === 0){
            reject(new Error('No existen datos'))
        }
        setTimeout(() => {
            resolve(datos);
        }, 1500);
    });
}
// CAPTURA CON PROMESA
//Para utilizarlos, hay que usar .then. Llamamos a la función y utilizamos .then para que capture
// esos datos y luego los podamos imprimir por consola. 
getDatos()
    .then((datos) => console.log(datos));

// USO DE AWAIT
//Otra forma de realizar esto sería utilizando await. El resultado de await lo podemos guardar en 
// cualquier variable. Recordad que await sólo es válido dentro de una función asíncrona 

async function usandoAwait(){
    try{
        const misPeliculas = await getDatos();
        console.log(misPeliculas);

    }catch (err) {
        console.log("Se produjo un error.")
        console.log(err.message)
    }
}
usandoAwait();