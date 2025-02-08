"use strict";
// CRIAÇÃO DE TIPOS
// GENERICS -> É UTILIZADO QUANDO A FUNÇÃO PODE ACEITAR MAIS DE UM TIPO
function showData(arg) {
    return `O dado é ${arg}`;
}
;
console.log(showData(5));
console.log(showData("Testando Generic"));
console.log(showData(true));
console.log(["Teste", "Testando"]);
// CONSTRINT EM GENERICS -> É UMA FORMA DE LIMITAR OS TIPOS ACEITOS
function showProductName(obj) {
    return `O nome do produto é: ${obj.name}`;
}
const myObj = { name: "Porta", cor: "Branca" };
const otherProduct = { name: "Carro", wheels: 4, engine: 1.0 };
const thirdObj = { price: 19.99, category: "Roupa" };
console.log(showProductName(myObj));
console.log(showData(otherProduct));
const myCar = { name: "Fusca", wheels: 4, engine: 1.0, color: "Branco" };
const myPen = { name: "Caneta Bic", wheels: false, engine: false, color: "Azul" };
console.log(myCar);
console.log(myPen);
// TYPE PARAMETERS -> PARÂMETRO DE UMA FUNÇÃO É CHAVE E UM OBJETO
function getSomeKey(obj, key) {
    return `A chave ${String(key)} está presente no objeto e tem valor de ${obj[key]}`;
}
const server = {
    hd: '2TB',
    ram: '32GB'
};
console.log(getSomeKey(server, 'ram'));
function showCharName(obj, key) {
    return `${obj[key]}`;
}
const myChar = {
    name: "Augusto",
    age: 40,
    hasDriveLicense: true
};
console.log(showCharName(myChar, "name"));
console.log(showCharName(myChar, "age"));
// TYPEOF TYPE OPERATOR
const userName = "Augusto";
const userName2 = "João";
const userName4 = "Joaquim";
const newTruck = {
    km: 10000,
    kg: 5000,
    description: "Caminhão para pouca carga"
};
function showKm(km) {
    console.log(`O veículo tem a km de: ${km}`);
}
const someVar = 5;
