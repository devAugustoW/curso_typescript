// Tipos
const x: number = 10
console.log(x)
console.log(x.toPrecision(3));

// String
const firstName: string = "Augusto";
console.log(firstName);
console.log(firstName.toLocaleUpperCase());

const lastName: string = "Dantas";
console.log(lastName);
console.log(lastName.toUpperCase())

let fullName: string;
fullName = firstName + " " + lastName;
console.log(fullName);
console.log(fullName.toUpperCase())

// Boolean
const bo: boolean = true;
console.log(bo);
console.log(typeof(bo));


/* 
	ARQUIVO DE CONFIGURAÇÃO DO TYPESCRIPT

 	-> tsc --init --> Vai gerar o arquivo TSCon
*/

/*
	COMANDO DE COMPILAÇÃO AUTOMÁTICA do TYPESCRIPT

	-> tsc -w  --> Cria um listerner e compila o arquivo sempre que modificado
*/