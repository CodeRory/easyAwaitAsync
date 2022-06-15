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


/*Tenemos una función que devuelve estos datos, que sería síncrono porque no tenemos que
esperar nada. Nos lo devolvería instantáneamente 
const getDatos = () => {
  return datos;
}

console.log(getDatos());
*/

//Vamos a simular el retraso de la siguiente manera. Construimos la función getDatos
// y utilizamos el método setTimeout, que llama a una función determinada (en este caso
// getDatos) después de un determinado número de segundos (1500). 
const getDatos = () => {
    setTimeout(() => {
        return datos;
    }, 1500);
}

console.log(getDatos());