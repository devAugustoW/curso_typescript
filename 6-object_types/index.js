"use strict";
// OBJECTS TYPES
function showProductDetails(product) {
    console.log(`O nome do produto é ${product.name} e o seu preço é R$ ${product.price}`);
    if (product.isAvaliable) {
        console.log("O produto esta disponível");
    }
    else {
        console.log("Produto indisponível");
    }
}
const shirt = {
    name: "Camisa",
    price: 19.99,
    isAvaliable: true
};
showProductDetails(shirt);
showProductDetails({ name: "Tênis", price: 159.99, isAvaliable: false });
function showUserDetails(user) {
    console.log(`O usuário tem o email: ${user.email}`);
    if (user.role) {
        console.log(`A função do usuário é: ${user.role}`);
    }
}
const user1 = { email: "augusto@email.com", role: "Admin" };
const user2 = { email: "boris@email.com" };
showUserDetails(user1);
showUserDetails(user2);
const fusca = {
    brand: "VW",
    rodas: 4,
};
console.log(fusca);
let coords = {
    x: 10
};
coords.y = 15;
console.log(coords);
const augusto = {
    name: "Augusto",
    age: 40,
};
console.log(augusto);
const goku = {
    name: "Goku",
    age: 50,
    superPower: ["Kamehameha", "Genki Dama"]
};
console.log(goku);
console.log(goku.superPower[1]);
const arnold = {
    name: "Arnold",
    type: "Shotgun",
    caliber: 12
};
console.log(arnold);
console.log(arnold.caliber);
// READONLY ARRAY
let myArray = ["maçã", "Pêra", "Laranja"];
// myArray[3] = "Mamão";
console.log(myArray);
myArray.forEach((item) => {
    console.log("Fruta: " + item);
});
myArray = myArray.map((item) => {
    return `Fruta: ${item}`;
});
console.log(myArray);
// number[];
const myNumberArray = [1, 2, 3, 4, 5];
//const myNumberArray: fiveNumbers = [1, 2, 3, 4, 5, 6];
//const myNumberArray: fiveNumbers = [1, true, "Teste", 4, 5];
console.log(myNumberArray);
const anotherUser = ["Augusto", 40];
console.log(anotherUser);
console.log(anotherUser[1]);
anotherUser[0] = "João";
//anotherUser[1] = "teste";
console.log(anotherUser);
console.log(anotherUser[0]);
// TUPLAS COM READONLY
function showNumbers(numbers) {
    // numbers[0] = 10
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([1, 2]);
