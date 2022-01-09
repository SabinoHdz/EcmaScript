const deadpool={
    nombre:"Wade",
    apellido:"Winston",
    poder:"Regeneración",
    edad:50,
    getNombre:function () {
        return `${this.nombre} ${this.apellido} ${this.poder}`;
    }
};
//desestructuración
const {nombre,apellido,poder,edad=0}=deadpool;
console.log( nombre,apellido,poder,edad);

//desestructuracion en las funciones
// function impimirHeroe(heroe) {
//     const {nombre,apellido,poder,edad=0}=heroe;
// console.log( nombre,apellido,poder,edad);
// }

function impimirHeroe({nombre,apellido,poder,edad=0}) {
    nombre="Fernando";
    console.log( nombre,apellido,poder,edad);
 }
impimirHeroe(deadpool);

//desestructuracion de arreglos
const heroes=['spiderman','batman','superman'];
const [,,h3]=heroes;
console.log(h3);
