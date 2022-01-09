// 🧯 Replace
const string = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web.";
const replacedString = string.replace("JavaScript", "Python");
console.log(replacedString);

//// Output: Python es maravilloso, con JavaScript puedo crear el futuro de la web.

// const replacedString2 = string.replaceAll("JavaScript", "Python");
// console.log(replacedString2);


// 🔒 Metodos privados
class Message {
    #show(val){ // Con el # convertimos al método en privado
        console.log(val);
    };
};

const message = new Message();
//message.show('Hola!');


////  👽 Promise Any

const promise5 = new Promise((resolve, reject) => reject("1"));
const promise6 = new Promise((resolve, reject) => resolve("2"));
const promise7 = new Promise((resolve, reject) => resolve("3"));

// Promise.Any([promise5, promise6, promise7])
//     .then(response => console.log(response));

//  🦴 WeakRef(element);: Referencia debil a un elemeto

class AnyClass {
    constructor(element){
        this.ref = new WeakRef
    }
    
}

// 🧪 Nuevos operadores lógicos

// let isTrue = true;
// let isFalse = false;
// console.log(isTrue &&= isFalse);

// let isTrue = true;
// let isFalse = false;
// console.log(isTrue ||= isFalse);

// let isTrue = true;
// let isFalse = false;
// console.log(isTrue ??= isFalse);


let be='a';
console.log(be);
let be='b';
console.log(be);