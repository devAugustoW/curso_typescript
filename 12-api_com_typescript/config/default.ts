const db_user = process.env.DB_USER;
const dbPassowrd = process.env.DB_PASSWORD;

export default {
	PORT: 3333,
	DbUri: `mongodb+srv://${db_user}:${dbPassowrd}@restfull.xbsbi.mongodb.net/?retryWrites=true&w=majority&appName=Restfull`,
	env: "development",
}