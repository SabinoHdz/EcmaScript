

class Calculator{
 valor_A=0;
 valor_B=0;
 constructor(valor_A,valor_B){
     this.valor_A=valor_A;
     this.valor_B=valor_B;
 }

 sumar(){
     return this.valor_A+this.valor_B;
 }
}

const calc=new Calculator(4,5);
console.log(calc.sumar());


// import hello from './Module';

// hello();


//generadores
function* helloworld(params) {
 if (true) {
     yield 'hello';
 }   

 if (true) {
     yield 'world'
 }
}
const generatorHello=helloworld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);