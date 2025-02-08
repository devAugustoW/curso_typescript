// CLASSES COM TYPESCRIPT

// INICIALIZAR CLASSES SEM VALORES '!'
class User {
	name!: string
	age!: number
}
const augusto = new User();
console.log(augusto)

augusto.name = "Augusto";
augusto.age = 40;
// augusto.job = "Programmer";


// INICIALIZAR CLASSES COM VALORES --> CONSTRUCTOR
class NewUser {
	name
	age

	constructor(name: string, age: number){
		this.name = name
		this.age = age
	}
}
const joao = new NewUser("João", 50);
console.log(joao);

// const rafaela = new NewUser(30, 25);


// CAMPOS READONLY -->
class Car {
	name
	readonly wheels = 4

	constructor(name: string) {
		this.name = name
	}
}
const fusca = new Car("Fusca");
console.log(fusca);

fusca.name = "New Beatle";
console.log(fusca);

// fusca.wheels = 5;


// HERANÇA E SUPER --> EXTENDS
class Machine {
	name

	constructor(name: string){
		this.name = name
	}
}
const trator = new Machine("Trator");
console.log(trator);

class KillerMachine extends Machine{
	guns

	constructor(name: string, guns: number){
		super(name)
		this.guns = guns
	}
}
const destroyer = new KillerMachine("Destroyer", 4)
console.log(destroyer);


// MÉTODOS --> FUNÇÕES DENTRO DE CLASSES
class Dwarf {
	name

	constructor(name: string){
		this.name = name
	}

	greeting() {
		console.log("Hey Stanger!")
	}
}
const jimmy = new Dwarf("Jimmy")
console.log(jimmy);
console.log(jimmy.name);

jimmy.greeting();


// THIS -> INSTRUÇÃO QUE SE REFERE AO OBJETO EM SI
class Truck{
	name
	hp

	constructor(name: string, hp: number) {
		this.name = name
		this.hp = hp
	}

	showDetails() {
		console.log(`Caminhão do modelo: ${this.name}, tem ${this.hp} de potência.`)
	}
}

const volvo = new Truck("Volvo", 400);
const scania = new Truck("Scania", 500);

console.log(volvo);
console.log(scania);


// GETTER --> É UMA FORMA DE RETORNAR PROPRIEDADES DO OBJETO
class Person {
	name 
	surname

	constructor(name: string, surname: string) {
		this.name = name
		this.surname = surname
	}

	get fullName() {
		return this.name + " " + this.surname
	}
}

const boris = new Person("Boris", "Dantas");
console.log(boris);
console.log(boris.name);
console.log(boris.fullName);


// SETTERS --> FORMA DE ATRIBUIR OU MODIFICAR AS PROPS == CONSTRUCTOR
class Coords {
	x!: number
	y!: number

	set fillX(x: number){
		if (x === 0){
			return
		}

		this.x = x

		console.log("X inserido com sucesso!")
	}

	set fillY(y: number){
		if (y === 0){
			return
		}

		this.y = y

		console.log("Y inserido com sucesso!")
	}

	get getCoords(){
		return`X: ${this.x} e Y: ${this.y}`
	}
}

const myCoords = new Coords();

myCoords.fillX = 15;
myCoords.fillY = 0;
console.log(myCoords)

myCoords.fillY = 10;
console.log(myCoords)

console.log(myCoords.getCoords);


// CLASSE QUE HERDA INTERFACE --> IMPLEMENTS
interface showTitle {
	itemTitle(): string
}

class BlogPost implements showTitle {
	title

	constructor(title: string) {
		this.title = title
	}

	itemTitle() {
		return `O título do post é: ${this.title}`
	}
}
const myPost = new BlogPost("Hello World");
console.log(myPost.itemTitle());

class TestingInterface implements showTitle {
	title

	constructor(title: string) {
		this.title = title
	}

	itemTitle() {
		return `O título é: ${this.title}`
	}
}


// OVERRIDE --> TÉCNICA PARA SUBSTITUIR UM MÉTODO HERDADO
class Base {
	someMethod() {
		console.log("alguma coisa");
	}
}

class Nova extends Base {
	someMethod() {
		console.log("Testando outra coisa")
	}
}
const myObject = new Nova();

myObject.someMethod();


// VISIBILIDADE DE PROPS E MÉTODOS --> PUBLIC, PROTECT, PRIVATE

// PUBLIC --> MODO DEFAULT
class X {
	public x = 10
}
const cInstance = new X();
console.log(cInstance.x)

class D extends X{

}
const dInstance = new D()
console.log(dInstance.x)


// PROTECTED  --> É PRECISO CRIAR UM MÉTODO PARA ACESSAR A CLASSE
class E {
	protected x = "Protected"

	protected protectedMethod(){
		console.log("Este método é protegido");
	}
}

class F extends E{

	showX() {
		console.log(`X: ${this.x}`);
	}

	showProtectedMethod(){
		this.protectedMethod()
	}
}
const fInstance = new F();
fInstance.showX()
fInstance.showProtectedMethod();



// PRIVATE  --> NÍVEL MÁXIMO DE RESTRIÇÃO, SÓ PODEM SER ACESSADOS NA CLASSE QUE O DEFINIU
class PrivateClass {
	private name = "Classe privada"

	showName(){
		return this.name;
	}

	protected privateMethod(){
		console.log("Método privado")
	}

	showPrivateMethod(){
		this.privateMethod()
	}
}

const pObj = new PrivateClass();
console.log(pObj.showName());
pObj.showPrivateMethod();


// STATIC MEMBERS --> 
class StaticMembers {
	static	prop = "Teste Estático";

	static staticMethod() {
		console.log("Este é um método estático!")
	}
}

console.log(StaticMembers.prop);
StaticMembers.staticMethod();


// GENERIC CLASS
class Item<T, U> {
	first
	second

	constructor(first: T, second: U){
		this.first = first;
		this.second = second;
	}

	get showFirst() {
		return `O first é ${this.first}`
	}
}
const newItem = new Item("Caixa", "Surpresa");
console.log(newItem);
console.log(newItem.showFirst);
console.log(typeof newItem);
console.log(typeof newItem.first);

const secondItem = new Item(12, true);
console.log(secondItem.showFirst);
console.log(typeof secondItem.first);


// PARAMETERS PROPERTIES --> RECURSO PARA DEFINIR A PRIVACIDADE, NOME E TIPO DAS PROPS DO CONSTRUTOR
class ParameterProperties {
	constructor (
		public name: string, 
		private qty: number, 
		private price: number
	)	{
			this.name = name;
			this.qty = qty;
			this.price = price;
	}

	get showQty(){
		return `Qtd total: ${this.qty}`
	}

	get showPrice(){
		return `Preço da ${this.name} é ${this.price}`
	}

}

const NewShirt = new ParameterProperties("Camisa", 5, 19.99)
console.log(NewShirt.name);
console.log(NewShirt.showQty);
console.log(NewShirt.showPrice);


// ABSTRACT CLASSE --> É UM MOLDE PARA CRIAR CLASSES / PARECIDO COM INTERFACE
abstract class AbstractClass{
	abstract showName(): void;
}

class AbstractExemple extends AbstractClass {
	name: string;

	constructor(name: string){
		super();
		this.name = name;
	}

	showName(){
		console.log(`O nome é: ${this.name}`)
	}
}

const newAbstratObjetc = new AbstractExemple("Josias");

newAbstratObjetc.showName();