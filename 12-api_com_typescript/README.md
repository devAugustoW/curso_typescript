# API Restfull com Typescript 🌐
Este projeto é o último módulo do cursos de Typescript, ministrado pelo professor Matheus Batistit. API RESTful construída com TypeScript, Express, Mongoose e validação de dados usando express-validator. Ele permite realizar operações CRUD (Criar, Ler, Atualizar, Excluir) para um recurso de "Filmes". Além disso, inclui funcionalidades de logging, configuração de ambiente, e middleware para gerenciamento de requisições.

<br>

## Funcionalidades ✨
- GET /movies: Retorna todos os filmes cadastrados.
- GET /movie/:id: Retorna um filme específico baseado no ID.
- POST /movie: Cria um novo filme.
- PATCH /movie/:id: Atualiza um filme existente baseado no ID.
- DELETE /movie/:id: Remove um filme baseado no ID.

<br>

## Tecnologias Utilizadas 🛠️
- TypeScript
- Express
- Express-validator
- Mongoose
- Morgan
- Winston
- Dotenv

<br>

## Estrutura do Projeto 📁
- app.ts: Arquivo principal que inicializa o servidor Express, configura middlewares, e escuta na porta definida no arquivo .env.
- router.ts: Define as rotas da API, com validações e chamadas aos controladores.
- movieModel.ts: Define o modelo de dados para o recurso "Filme", usando o Mongoose.
- movieValidation.ts: Define as validações para os dados de entrada ao criar ou atualizar um filme.
- morganMiddleware.ts: Configura o middleware de logging usando o Morgan.
- handleValidator.ts: Middleware para tratar erros de validação.
- movieController.ts: Controlador que contém a lógica de CRUD para o recurso "Filme".

<br>
## Como rodar o projeto 🚀

### 1. Baixar pasta do projeto em 
```	
https://github.com/devAugustoW/curso_typescript/tree/main/12-api_com_typescript	
```

### 2. Instalar dependências
```
npm install
```

### 3. Criar Banco de Dados no MongoDB
### 4. Criar arquivo .env e configurar as variáveis de ambiente
### 5. Conectar o Banco de Dados na API com String de conexão
### 6. Iniciar o Servidor
```
npm start
```

<br>
## Endpoints 📡

### 1. Criar um novo filme
- POST /api/movie
```json
{
  "title": "A Origem",
  "rating": 8,
  "description": "Um ladrão atormentado que extrai segredos dos sonhos dos outros aceita uma última missão.",
  "director": "Christopher Nolan",
  "stars": ["Leonardo DiCaprio", "Joseph Gordon-Levitt"],
  "poster": "https://image.url/inception.jpg"
}
```

### 2. Retornar todos os filmes
- GET /api/movies

### 3. Retornar um filme específico
- GET /api/movie/:id

### 4. Atualizar um filme existente
- PATCH /api/movie/:id
```json
{
  "title": "A Origem",
  "rating": 10,
  "description": "Um ladrão atormentado que extrai segredos dos sonhos dos outros aceita uma última missão: liderar uma missão perigosa para plantar uma ideia no subconsciente de um alvo",
}
```	

### 5. Remover um filme existente
- DELETE /api/movie/:id

<br>

## Validações ✅
- O campo 'title' deve ser uma string com no mínimo 5 caracteres.
- O campo 'rating' deve ser um número entre 0 e 10.
- O campo 'description', 'director' e 'poster' são obrigatórios e devem ser do tipo string.
- O campo 'poster' deve ser uma URL válida.

<br>

## Logs 📜
O projeto utiliza:
- Winston para logs.
- Morgan para logs de requisições.

<br>

## Contribuição 🤝
Suas contribuições para este projeto são muitob bem-vindas! Se você encontrar algum bug ou tiver sugestões de melhorias, por favor, envie um issue no GitHub.

<br>

## Realização 📚
Projeto realizado por Augusto Dantas, no curso de Typescript do professor Matheus Batistit.