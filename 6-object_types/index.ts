// OBJECTS TYPES

// TIPO DE INTERFACE
interface Product {
	name: string;
	price: number;
	isAvaliable: boolean;
}

function showProductDetails(product: Product){
	console.log(`O nome do produto é ${product.name} e o seu preço é R$ ${product.price}`);

	if (product.isAvaliable){
		console.log("O produto esta disponível");
	} else {
		console.log("Produto indisponível")
	}
}

const shirt: Product = {
	name: "Camisa",
	price: 19.99,
	isAvaliable: true
}
showProductDetails(shirt);
showProductDetails({name: "Tênis", price: 159.99, isAvaliable: false});


// INTERFACE COM PROPS OPCIONAIS '?'
interface User {
	email: string;
	role?: string;
}

function showUserDetails(user: User){
	console.log(`O usuário tem o email: ${user.email}`);

	if (user.role) {
		console.log(`A função do usuário é: ${user.role}`)
	}
}

const user1 = {email: "augusto@email.com", role: "Admin"};
const user2 = {email: "boris@email.com"};

showUserDetails(user1);
showUserDetails(user2);



// READONLY -> IMPEDE A MUDANÇA DE VALORES
interface Car {
	brand: string,
	readonly rodas: number,
}

const fusca:Car = {
	brand: "VW",
	rodas: 4,
}
console.log(fusca);
// fusca.rodas = 5;


// INDEX SIGNATURE -> UTILIZADO QUANDO Ñ SABEMOS O NOME DA PROPRIEDADE
interface CoorObject {
	[index: string]: number
}

let coords: CoorObject = {
	x: 10
}
coords.y = 15;
console.log(coords);

// coords.z = "teste";


// EXTENDS INTERFACE
interface Human {
	name: string,
	age: number
}

interface SuperHuman extends Human {
	superPower: string[]
}

const augusto: Human ={
	name: "Augusto",
	age: 40,
}
console.log(augusto);

const goku: SuperHuman = {
	name: "Goku",
	age: 50,
	superPower: ["Kamehameha", "Genki Dama"]
}
console.log(goku);
console.log(goku.superPower[1]);


// INTERSECTION TYPES -> UNIR DUAS INTERFACES
interface Character{
	name: string
}

interface Gun {
	type: string,
	caliber: number
}

type Soldier = Character & Gun;

const arnold: Soldier = {
	name: "Arnold",
	type: "Shotgun",
	caliber: 12
}
console.log(arnold);
console.log(arnold.caliber)


// READONLY ARRAY
let myArray: ReadonlyArray<string> = ["maçã", "Pêra", "Laranja"];

// myArray[3] = "Mamão";

console.log(myArray);

myArray.forEach((item) => {
	console.log("Fruta: " + item)
});

myArray = myArray.map((item) => {
	return `Fruta: ${item}`
})
console.log(myArray);


// TUPLAS
type fiveNumbers = [number, number, number, number, number]

// number[];
const myNumberArray: fiveNumbers = [1, 2, 3, 4, 5];
//const myNumberArray: fiveNumbers = [1, 2, 3, 4, 5, 6];
//const myNumberArray: fiveNumbers = [1, true, "Teste", 4, 5];
console.log(myNumberArray);

type nameAndAge = [string, number];
const anotherUser: nameAndAge = ["Augusto", 40];
console.log(anotherUser)
console.log(anotherUser[1])

anotherUser[0] = "João";
//anotherUser[1] = "teste";
console.log(anotherUser);
console.log(anotherUser[0]);


// TUPLAS COM READONLY
function showNumbers(numbers: readonly [number, number]) {

	// numbers[0] = 10

	console.log(numbers[0]);
	console.log(numbers[1]);
}

showNumbers([1, 2]);