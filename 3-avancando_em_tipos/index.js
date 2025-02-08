"use strict";
// ARRAYS
const numbers = [1, 2, 3, 4];
console.log(numbers);
numbers.push(5);
console.log(numbers);
console.log(numbers[2]);
let names = ["Augusto", "Boris", "Patrícia"];
console.log(names);
names.push("Dalva");
console.log(names);
console.log(names[3]);
// TIPO ANY --> evitar o uso
let avoid = ["Augusto", 2, "Dalva", 3, "Patrícia"];
console.log(avoid);
avoid.push(1, "Boris");
console.log(avoid);
// PARÂMETROS TIPADOS
const a = 5;
const b = 10;
function sun(num1, num2) {
    console.log(num1 + num2);
}
;
sun(a, b);
sun(30, 20);
// RETORNO DA FUNÇÃO
function greeting(name) {
    return `Olá ${name}!`;
}
;
console.log(greeting("Augusto"));
// FUNÇÕES ANÔNIMAS
// setTimeout(function() {
//	const name: string = ("Augusto");
//	console.log(name);
// }, 2000);
// OBJETOS
function passCoordinates(coord) {
    console.log("X coordinate: " + coord.x);
    console.log("Y cordinates: " + coord.y);
}
;
const objCoord = { x: 329, y: 84.2 };
passCoordinates(objCoord);
// PROPS OPCIONAIS '?'
function showNumbers(a, b, c) {
    console.log("A: " + a);
    console.log("B: " + b);
    console.log("C: " + c);
}
showNumbers(1, 2, 3);
showNumbers(1, 2);
showNumbers(1);
function showName(a, b, c) {
    console.log("A: " + a);
    console.log("B: " + b);
    if (c)
        console.log("C: " + c);
}
showName("Augusto", "Dalva", "Patrícia");
showName("Augusto", "Dalva");
// VALIDAÇÃO DE ARGUMENTO OPCIONAL !== UNDEFINED
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return `Olá, ${firstName} ${lastName}, tudo bem?`;
    }
    return `Olá, ${firstName}, tudo bem?`;
}
console.log(advancedGreeting("Augusto", "Dantas"));
console.log(advancedGreeting("Augusto"));
// UNION TYPES (number | string)
function showBalance(balance) {
    console.log(`O saldo da conta é R$ ${balance}`);
}
showBalance(500);
showBalance("500");
const arr2 = [1, "teste", true];
// AVANÇANDO EM UNIO TYPES
function showUserRole(role) {
    if (typeof role === 'boolean') {
        return "Usuário não aprovado!";
    }
    ;
    return `A função do usuário é: ${role}`;
}
console.log(showUserRole(false));
console.log(showUserRole("Admin"));
function showId(id) {
    console.log(`O ID é: ${id}`);
}
;
showId(1);
showId("200");
showId(123);
function showCoords(obj) {
    console.log(`X: ${obj.x} Y: ${obj.y}, Z: ${obj.z} `);
}
const coordObj = {
    x: 10,
    y: 15,
    z: 20
};
showCoords(coordObj);
const somePerson = { name: "Boris", age: 3 };
console.log(somePerson);
//type personType{
//	age: number
//}
// LITERAL TYPES
let test;
test = "testando";
console.log(test);
function showDirection(direction) {
    console.log(`A direção é: ${direction}`);
}
showDirection("left");
// NON NULL ASSERTION OPERATOR
const p = document.getElementById("some-p");
console.log(p.innerText);
// BIGINT
let n;
// n = 1;
n = 1000n;
console.log(n);
console.log(typeof n);
console.log(n + 100n);
// SYMBOL
let symbolA = Symbol("a");
let symbolB = Symbol("a");
console.log(symbolA == symbolB);
console.log(symbolA === symbolB);
