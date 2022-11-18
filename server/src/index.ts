import express from "express";
import { ApolloServer } from "apollo-server-express";
import { typeDefs, resolvers } from "./graphql";

const app = express();
const port = 9000;

async function startserver() {
	const server = new ApolloServer({ typeDefs, resolvers });
	await server.start();

	server.applyMiddleware({ app, path: "/api" });
}

startserver();

app.listen(port, () => console.log(`[app]: http://localhost:${port}`));
