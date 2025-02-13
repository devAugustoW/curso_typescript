// .Env
require("dotenv").config();

// express e pasta de configuração
import express from "express";
import config from "config";

// DB
import db from "../config/db";

// rotas
import router from "./router";

// Logger
import Logger from "../config/logger";

// Middlewares
import morganMiddleware from "./middlewares/morganMiddleware";

// express
const app = express();

// Middlewares
app.use(express.json());
app.use(morganMiddleware);
app.use("/api/", router);

// Porta de config
const PORT = config.get<Number>("PORT")

// listen
app.listen(PORT, async() => {
	await db();
	Logger.info(`Servidor rodando na porta ${PORT}`);
})
