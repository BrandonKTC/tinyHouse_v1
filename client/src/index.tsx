import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import reportWebVitals from "./reportWebVitals";
import { Listings } from "./sections";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

const client = new ApolloClient({
	cache: new InMemoryCache(),
	uri: "/api",
});
root.render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<Listings title="TinyHouse Listings" />
		</ApolloProvider>
	</React.StrictMode>
);

// If you wa"nt to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
