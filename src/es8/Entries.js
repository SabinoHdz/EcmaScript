// Object.entries 
//Permite la clave y los valores de una matriz 
const data = {
    frontend: 'Juan',
    backend: 'Carlos',
    design: 'Ana'
}
const entries= Object.entries(data);
console.log(entries);
console.log(entries.length);

const values=Object.values(data);
console.log(values);

const keys=Object.keys(data);
console.log(keys);