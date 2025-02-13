import mongoose from 'mongoose';
import config from 'config';

// importar Logger
import Logger from "../config/logger";

async function connect() {
	const dbUri = config.get<string>("DbUri");

	try {
		await mongoose.connect(dbUri);
		Logger.info("Conectou ao Banco de Dados!")

	} catch (e) {
		Logger.error("Não foi possível conectar com o Banco de Dados!");
		Logger.error(`Erro: ${e}`);
		process.exit(1);
	}
}
export default connect;