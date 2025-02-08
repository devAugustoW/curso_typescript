"use strict";
// FUNÇÕES
// FUNÇÕES SEM RETORNO - VOID
function withOutReturn() {
    console.log("Esta função não tem retorno.");
    // return 1
}
withOutReturn();
// CALLBACK COM ARGUMENTO
function greeting(name) {
    return `Olá ${name}`;
}
function preGreeting(f, userName) {
    console.log("Preparando a função!");
    const greet = f(userName);
    console.log(greet);
}
preGreeting(greeting, "Augusto");
preGreeting(greeting, "João");
preGreeting(greeting, "Matheus");
// GENERIC FUNCTIONS
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3]));
console.log(firstElement(["a", "b", "c"]));
// console.log(firstElement("Teste"));
function mergeObjects(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const newObject = mergeObjects({ name: "Augusto" }, { age: 40, job: "Programmer" });
console.log(newObject);
// CONSTRAINS NAS GENERIC FUNCTIONS
function biggestNumber(a, b) {
    let biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber(5, 3));
console.log(biggestNumber("12", "5"));
//console.log(biggestNumber("12", 5))
// DEFINIR TIPO DE PARÂMETRO
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArrays([1, 2, 3], [5, 6]));
console.log(mergeArrays([1, 2, 3], ["teste", "testando"]));
// PARÂMETROS OPCIONAIS
function moderGreeting(name, greet) {
    if (greet) {
        return `Olá ${greet} ${name}, tudo bem?`;
    }
    return `Olá ${name}, tudo bem?`;
}
console.log(moderGreeting("Matheus"));
// PARÂMETROS DEFAULT
function somaDefault(n, m = 10) {
    return n + m;
}
console.log(somaDefault(8));
console.log(somaDefault(15, 10));
// TIPO UNKNOWN
function doSomething(x) {
    if (Array.isArray(x)) {
        console.log(x[0]);
    }
    else if (typeof x === "number") {
        console.log("X é um número");
    }
}
doSomething([1, 2, 3]);
doSomething(5);
// TIPO NEVER
function showErrorMenssage(msg) {
    throw new Error(msg);
}
// REST OPERATOR 
function sumAll(...n) {
    return n.reduce((number, sum) => sum + number);
}
console.log(sumAll(1, 2, 3, 4, 5));
console.log(sumAll(5, 348, 2348));
//console.log(sumAll("teste"));
// DESTRUCTURING EM PARÂMETROS
function showProductDetails({ name, price }) {
    return `O nome do produto é ${name} e ele custa R$ ${price}`;
}
const shirt = { name: "Camisa", price: 49.99 };
console.log(showProductDetails(shirt));
