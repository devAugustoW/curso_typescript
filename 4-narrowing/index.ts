// NARROWING -> TÉCNICA PARA DESCOBRIR SE O DADO EXISTE

// TYPE OF - TYPE GUARD
function sun(a: number | string, b: number | string) {
	if (typeof a === "string" && typeof b === "string") {
		console.log(parseFloat(a) + parseFloat(b));

	} else if (typeof a === "number" && typeof b === "number"){
		console.log(a + b);

	} else {
		console.log("Impossível realizar operação!")

	}
}

sun("20", "5");
sun(8, 19);
sun("7", 10);


// CHECAR SE VALOR EXISTE
function operations(arr: number[], operation?: string | undefined) {
	if (operation){

		if (operation === "sum"){
			const sum = arr.reduce((i, total) => i + total);
			console.log(sum);

		} else if (operation === "multiply") {
			const multiply = arr.reduce((i, total) => i * total);
			console.log(multiply);

		}

	} else {
		console.log("Por favor, defina uma operação");
	}
}

operations([1, 2, 3]);
operations([1, 2, 3], "sum");
operations([2, 4, 8], "multiply");


// OPERADOR INSTANCE OF
class User {
	name;

	constructor(name: string){
		this.name = name;
	};
};

class SuperUser extends User {
	constructor(name: string){
		super(name);
	}
}

const jhon = new User("Jhon");
const paul = new SuperUser("Paul");

function userGreeting(user: object) {
	if (user instanceof SuperUser) {
		console.log(`Olá ${user.name}, deseja ver os dados do sistema?`);

	} else if (user instanceof User) {
		console.log(`Olá ${user.name}`);

	}
}
userGreeting(jhon);
userGreeting(paul);


// OPERADOR IN
class Dog {
	name
	breed

	constructor(name: string, breed?: string) {
		this.name = name;
		if (breed) {
			this.breed = breed;
		}
	}
}

const tuca = new Dog("Tuca");
const boris = new Dog("Boris", "Dashund");

function showDogDetails(dog: Dog){
	if ("breed" in dog) {
		console.log(`O cachorro é da raça ${dog.breed}`);

	} else {
		console.log("O cachorro é sem raça");

	}
}

showDogDetails(tuca);
showDogDetails(boris);