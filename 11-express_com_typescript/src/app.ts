// importar o Express
import express, { NextFunction, Request, Response} from 'express';

const app = express();
app.use(express.json());

// 10 - Middleware para todas as rotas
function showPath(req: Request, res: Response, next: NextFunction) {
	console.log(req.path);
	next();
}

app.use(showPath);

// 1-  rota de teste
app.get('/', (req: Request, res, Response) => {
	console.log(req.body)

	return res.send("1 - Rota de Teste");
});

// 3- rota com Post
app.post('/api/products', (req: Request, res, Response) => {
	console.log(req.body)

	return res.send("Produto adicionado!")
})

// 4 - rota para todos os métodos
app.all('/api/products/check', (req, res) => {
	if (req.method === "POST") res.send("Inseriu um registro")
	else if (req.method === "GET") res.send("Leu um registro")
	else res.send("Não podemos realizar esta operação");
})

// 5 - interfaces do Express
app.get('/api/interfaces', (req: Request, res: Response) => {
	return res.send("Utilizando as interfaces.")
})

// 6- enviando json
app.get('/api/json', (req: Request, res: Response) => {
	
	return res.json({
		name: "Shirt",
		price: 30.00,
		color: "Blue",
		size: ["p", "M", "G"],
	})
})

// rota com params
app.get('/api/product/:id', (req: Request, res: Response) => {
	const id = req.params.id

	if (id === "1") {
		const productOne = {
			id: 1,
			name: "Calça",
			price: 80.00
		}
		res.send(productOne);

	} else if (id === "2") {
		const productTwo = {
			id: 2,
			name: "Boné",
			price: 25.99
		} 
		res.send(productTwo);

	} else {
		res.send("Produto não encontrado!")
	}
})


// 7 - rotas mais complexas
app.get('/api/produtc/:id/review/:reviewId', (req: Request, res: Response) => {
	const id = req.params.id;
	const reviewId = req.params.reviewId;

	return res.send(`Acessando a Review ${reviewId} do produto ${id}`);
});

// 8 - router handler
function getUser(req: Request, res: Response): Response {
    console.log(`Resgatando o usuário com id: ${req.params.id}`);

    return res.send("Usuário encontrado!");
}
app.get('/api/user/:id', getUser);


// 9 - Middleware
function checkUser(req: Request, res: Response, next: NextFunction) {
	if (req.params.id === "1") {
		console.log("Pode seguir!");
		next();

	} else{
		console.log("Acesso negado!");
	}
}

app.get('/api/user/:id/access', checkUser, (req: Request, res: Response) => {
	return res.json({ msg: "Bem vindo a área restrita!"})
})

// 11 - req e res com generics
app.get('/api/user/:id/details/:name', 
	(
			req: Request<{ id: string; name: string }>,
			res: Response<{ status: boolean }>
	) => {
			console.log(`ID: ${req.params.id}`);
			console.log(`Name: ${req.params.name}`);

			return res.json({ status: true });
	}
);


// 12 - tratamento de erros --> try catch
app.get('/api/error', (req: Request, res: Response) => {
	try {

		throw new Error("Erro de propósito")

	} catch (e: any) {

		res.status(500).json({msg: e.message})
	}
})

// listen
app.listen(3000, () => {
	console.log("Aplicação TS com Express")
})