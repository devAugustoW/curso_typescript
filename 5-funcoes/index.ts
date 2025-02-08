// FUNÇÕES

// FUNÇÕES SEM RETORNO - VOID
function withOutReturn(): void {
	console.log("Esta função não tem retorno.")
	// return 1
}

withOutReturn();

// CALLBACK COM ARGUMENTO
function greeting(name: string){
	return `Olá ${name}`
}
function preGreeting(f: (name: string) => string, userName: string) {
	console.log("Preparando a função!");

	const greet = f(userName);

	console.log(greet);
}

preGreeting(greeting, "Augusto");
preGreeting(greeting, "João");
preGreeting(greeting, "Matheus");


// GENERIC FUNCTIONS
function firstElement<T>(arr: T[]): T{
	return arr[0];
}

console.log(firstElement([1, 2, 3]));
console.log(firstElement(["a", "b", "c"]))
// console.log(firstElement("Teste"));

function mergeObjects<U, T>(obj1: U, obj2: T) {
	return {
		...obj1,
		...obj2
	}
}
const newObject = mergeObjects({name: "Augusto"}, {age: 40, job: "Programmer"})
console.log(newObject);


// CONSTRAINS NAS GENERIC FUNCTIONS
function biggestNumber<T extends number | string>(a: T, b: T): T {
	let biggest: T;

	if (+a > +b) {
		biggest = a;

	} else {
		biggest = b;

	}

	return biggest;
}

console.log(biggestNumber(5, 3));
console.log(biggestNumber("12", "5"));
//console.log(biggestNumber("12", 5))


// DEFINIR TIPO DE PARÂMETRO
function mergeArrays<T>(arr1: T[], arr2: T[]){
	return arr1.concat(arr2);
}
console.log(mergeArrays([1, 2, 3], [5, 6]));
console.log(mergeArrays<number | string>([1, 2, 3], ["teste", "testando"]));


// PARÂMETROS OPCIONAIS
function moderGreeting(name: string, greet?: string) {

	if (greet) {
		return `Olá ${greet} ${name}, tudo bem?`;

	}

	return `Olá ${name}, tudo bem?`
}
console.log(moderGreeting("Matheus"));


// PARÂMETROS DEFAULT
function somaDefault(n: number, m = 10): number {
	return n + m;
}
console.log(somaDefault(8));
console.log(somaDefault(15, 10));


// TIPO UNKNOWN
function doSomething(x: unknown) {
	if (Array.isArray(x)){
		console.log(x[0]); 

	} else if (typeof x === "number") {
		console.log("X é um número")

	}
}
doSomething([1, 2, 3]);
doSomething(5)


// TIPO NEVER
function showErrorMenssage(msg: string): never {
	throw new Error(msg);
}


// REST OPERATOR 
function sumAll(...n: number[]) {
	return n.reduce((number, sum) => sum + number)
}
console.log(sumAll(1, 2, 3, 4, 5));
console.log(sumAll(5, 348, 2348));
//console.log(sumAll("teste"));


// DESTRUCTURING EM PARÂMETROS
function showProductDetails({name, price}: {name: string, price: number}): string {
	return `O nome do produto é ${name} e ele custa R$ ${price}`;
}
const shirt = {name: "Camisa", price: 49.99}
console.log(showProductDetails(shirt))