# Express com TypeScript
Este documento tem como objetivo explicar cada parte do módulo de Express com TypeScript, ministrado pelo professor Matheus Battisti.

### 1. Criação da pasta do projeto
Abra o terminal e navegue até o diretório onde deseja criar o projeto. Em seguida, utilize o comando
```
c:/curso-typescript> mkdir express_com_typescript
```

### 2. Configuração Inicial
Dentro da pasta do projeto devemos executar os seguintes comandos:
```
- npm init -y
- tsc --init
- npm install @types/express@^4.17.13 @types/node@^22.13.1 ts-node-dev@^2.0.0 typescript@^5.7.3 --save-dev
- npm install express
```
- @types/express e @types/node: Para suporte a TypeScript.
- ts-node-dev: Para reiniciar o servidor automaticamente em mudanças no código.

<br>

### 3. Criação da pasta src e arquivo app.ts
-  Criar a pasta 'src' para manter uma estrutura organizada, separando o código-fonte dos arquivos de configuração.
- Dentro de 'src', criar o arquivo 'app.ts'

<br>

### 4. Criação do script de execução do projeto
No arquivo package.json, adicionar o seguinte script:
```
"scripts": {
  "dev": "ts-node-dev --respawn --transpile-only src/app.ts"
}
```
- --respawn: Reinicia o servidor quando há mudanças no código.
- --transpile-only: Compila o código sem verificar os tipos, o que acelera o tempo de build

<br>

### 5. Inicialização do servidor
- Após a criação do script de execução do projeto, podemos iniciar o servidor com o comando: npm run dev
```
c:/curso-typescript/express_com_typescript> npm run dev
```

## app.ts
### 1. Importação e Configuração do Express
Iniciamos com a importação do módulo express e os tipos NextFunction, Request e Response do Express, que são utilizados para tipar as variáveis e garantir que o TypeScript possa verificar a tipagem do código.

```ts
import express, { NextFunction, Request, Response } from 'express';
```
<br>

Inicializamos uma instância do Express com const app = express(). 
O método app.use(express.json()) é utilizado para configurar o middleware que permite que o corpo da requisição seja lido como JSON.

```ts
const app = express();
app.use(express.json());
```

<br>

Inializamos o servidor com o comando:
```ts
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
```
<br>

### 2. Middleware Global
- Middleware é aplicado globalmente ao servidor.
- Todas as rotas tem este Middleware como parte do seu ciclo de vida.
```ts
app.use(showPath);
```	

<br>

- Função que compõe o Middleware.
- Imprime no console o caminho da URL da requisição.
- O next() é chamado para passar o controle para o próximo middleware ou rota.
```ts
function showPath(req: Request, res: Response, next: NextFunction) {
  console.log(req.path);
  next();
}
```
<br>

### 3. Rota de Teste (GET/)
Aqui temos um rota GET de teste que imprime no corpo da requisição a mensagem "1 - Rota de Teste".
```ts
app.get('/', (req: Request, res: Response) => {
  res.send('1 - Rota de Teste');
});
```

<br>

### 4. Rota POST
- A rota POST permite adicionar um novo "produto" ao servidor.
```ts
app.post('/api/products', (req: Request, res: Response) => {
  console.log(req.body);
  return res.send("Produto adicionado!");
});
```
<br>

### 5. Rota para todos os Métodos
A rota ALL é especial, responde a todos os métodos HTTP.
```ts
app.all('/api/products/check', (req, res) => {
  if (req.method === "POST") res.send("Inseriu um registro");
  else if (req.method === "GET") res.send("Leu um registro");
  else res.send("Não podemos realizar esta operação");
});
```

<br>

## 7. Rota Usando Interfaces
O uso de interfaces ajuda a garantir que o código tenha tipos seguros e que os parâmetros de requisição e resposta estejam corretamente tipados.
```ts
interface Product {
  name: string;
  price: number;
}

app.get('/api/interfaces', (req: Request, res: Response) => {
  return res.send("Utilizando as interfaces.");
});
```

<br>

### 8. Retornando JSON
É possível retornar um JSON com o método res.json().
```ts
app.get('/api/json', (req: Request, res: Response) => {
  return res.json({
    name: "Shirt",
    price: 30.00,
    color: "Blue",
    size: ["p", "M", "G"],
  });
});
```

<br>

### 9. Rota com Parâmetros de URL
Esta rota utiliza o método o parâmetro '/:id' que é recebido na URL da requisição, para buscar um produto específico.
```ts
app.get('/api/product/:id', (req: Request, res: Response) => {
  const id = req.params.id;
  return res.send(`Produto id: ${id}`);
});
```

<br>

### 10. Rota com mais de um Parâmetro de URL
Essa rota utiliza dois parâmetros de URL: id para o produto e reviewId para a revisão do produto. Ela retorna uma mensagem informando quais dados estão sendo acessados.
```ts
app.get('/api/product/:id/review/:reviewId', (req: Request, res: Response) => {
  const id = req.params.id;
  const reviewId = req.params.reviewId;
  return res.send(`Acessando a Review ${reviewId} do produto ${id}`);
});
```

<br>

### 11. Router Handler
A função getUser é um handler de rota que é responsável por buscar e retornar informações sobre um usuário com base no ID fornecido na URL.
```ts
function getUser(req: Request, res: Response): Response {
  console.log(`Resgatando o usuário com id: ${req.params.id}`);
  return res.send("Usuário encontrado!");
}
app.get('/api/user/:id', getUser);
```

<br>

### 12. Middleware de Acesso
Esse middleware checkUser verifica se o id do usuário é igual a "1". Se for, o middleware permite que a requisição continue e chama next(). Caso contrário, a requisição é bloqueada, e uma mensagem de "Acesso negado" é exibida.
```ts
function checkUser(req: Request, res: Response, next: NextFunction) {
  if (req.params.id === "1") {
    console.log("Pode seguir!");
    next();
  } else {
    console.log("Acesso negado!");
  }
}

app.get('/api/user/:id/access', checkUser, (req: Request, res: Response) => {
  return res.json({ msg: "Bem-vindo à área restrita!" });
});
```

<br>

### 13. Uso de Generics para Tipagem de Dados
Aqui, utilizamos generics para tipar os parâmetros da requisição (req.params.id e req.params.name) e a resposta (res.json()). Isso melhora a segurança do código, garantindo que os tipos dos parâmetros e respostas estejam corretos.
```ts
app.get('/api/user/:id/details/:name', 
  (req: Request<{ id: string; name: string }>, res: Response<{ status: boolean }>) => {
    console.log(`ID: ${req.params.id}`);
    console.log(`Name: ${req.params.name}`);
    return res.json({ status: true });
  }
);
```

<br>

### 14. Tratamento de Erros ( Try/Catch)
O tratamento de erros é uma parte importante da aplicação, pois permite lidar com erros de forma adequada e continuar a execução do programa.
```ts
app.get('/api/error', (req: Request, res: Response) => {
  try {
    // Lógica que pode lançar um erro
  } catch (error) {
    res.status(500).send("Ocorreu um erro no servidor.");
  }
});
```

	
<br>

## Conclusão
Esse foi um resumo explicativo sobre o código do projeto Express com TypeScript. O objetivo principal é demonstrar como configurar rotas, usar middlewares, fazer validação de parâmetros e utilizar as funcionalidades do TypeScript para garantir a segurança e qualidade do código.


	





