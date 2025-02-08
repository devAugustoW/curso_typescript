// CRIAÇÃO DE TIPOS

// GENERICS -> É UTILIZADO QUANDO A FUNÇÃO PODE ACEITAR MAIS DE UM TIPO
function showData<T>(arg: T): string {
	return `O dado é ${arg}`;
};
console.log(showData(5));
console.log(showData("Testando Generic"));
console.log(showData(true));
console.log(["Teste", "Testando"])


// CONSTRINT EM GENERICS -> É UMA FORMA DE LIMITAR OS TIPOS ACEITOS
function showProductName<T extends {name: string}>(obj: T) {
	return `O nome do produto é: ${obj.name}`;
}

const myObj = {name: "Porta", cor: "Branca"};
const otherProduct = {name: "Carro", wheels: 4, engine: 1.0};
const thirdObj = {price: 19.99, category: "Roupa"};

console.log(showProductName(myObj));
console.log(showData(otherProduct));
//console.log(showProductName(thirdObj));


// INTERFACES COM GENERICS
interface MyObject<T, U, Q> {
	name: string
	wheels: T
	engine: U
	color: Q
}

type Car = MyObject<number, number, string>
type Pen = MyObject<boolean, boolean, string>

const myCar: Car = {name: "Fusca", wheels: 4, engine: 1.0, color: "Branco"};
const myPen: Pen = {name: "Caneta Bic", wheels: false, engine: false, color: "Azul"};

console.log(myCar);
console.log(myPen);


// TYPE PARAMETERS -> PARÂMETRO DE UMA FUNÇÃO É CHAVE E UM OBJETO
function getSomeKey<T, K extends keyof T>(obj: T, key: K){
	return `A chave ${String(key)} está presente no objeto e tem valor de ${obj[key]}`
}

const server = {
	hd: '2TB',
	ram: '32GB'
}

console.log(getSomeKey(server, 'ram'));
//console.log(getSomeKey(server, 'teste'));


// KEYOF TYPE OPERATOR -> 
type Character = {name: string, age: number, hasDriveLicense: boolean}

type C = keyof Character;

function showCharName(obj: Character, key: C): string {
	return `${obj[key]}`
}

const myChar: Character = {
	name: "Augusto",
	age: 40,
	hasDriveLicense: true
}

console.log(showCharName(myChar, "name"))
console.log(showCharName(myChar, "age"));


// TYPEOF TYPE OPERATOR
const userName: string = "Augusto";
const userName2: typeof userName = "João";
type X = typeof userName;
const userName4: X = "Joaquim";


// INDEX ACCESS TYPES
type Truck = {km: number, kg: number, description: string}; 
type Km = Truck["km"];

const newTruck: Truck = {
	km: 10000,
	kg: 5000,
	description: "Caminhão para pouca carga"
}

function showKm(km: Km) {
	console.log(`O veículo tem a km de: ${km}`)
}


// CONDITIONAL EXPRESSIONS TYPE
interface A {}

interface B {}

interface Teste {
	showName(): string
}

type myType = B extends A ? number : string

const someVar: myType = 5
// const someVar2: myType = "Teste";

type MyTYpeB = Teste extends {showNumber(): number} ? string : boolean



// TEMPLATE LITERAL TYPES 
type testA = "text";

type CustomType = `some ${testA}`;

// const testing: CustomType = "some text 2";

type a1 = "Testando";
type a2 = "Union";
type a3 = `${a1} | $(a2)`;