// import { productsData } from "./db.js";
// console.log(productsData);
import { API_URL, API_URL_2 } from "./config.js";
import { getJSON } from "./helper.js";

console.log("1️⃣Model Funcionando...");

export const state = {
	product: {},
	products: {},
	search: {
		query: "",
		results: [],
	},
};

export const loadProducts = async function () {
	try {
		const data = await getJSON(API_URL_2);
		state.products = data;
	} catch (error) {
		throw error;
	}
};

export const loadProduct = async function (id) {
	try {
		// * Fetch 👇
		// const data = await getJSON(`${API_URL}/${id}`);
		const data = await getJSON(`${API_URL_2}`);
		console.log(data);
		// let { product } = data.data;

		let product = data.find((el) => el.id === Number(id));

		state.product = {
			id: product.id,
			name: product.name,
			description: product.description,
			category: product.category,
			image: product.image,
			price: product.price,
		};
		console.log(state.product);
	} catch (error) {
		//* Propagamos el error para que pase directo al "Catch" del "controller.js"
		throw error;
	}
};

//* Dado que esto realizara llamadas AJAX, sera una funcion Asincrona
export const loadSearchResults = async function (query) {
	try {
		state.search.query = query;
		// const data = await getJSON(`${API_URL_2}?search=${query}`);
		const data = await getJSON(API_URL_2);

		const searchResults = data.filter((product) =>
			product.name.toLowerCase().includes(query)
		);

		state.search.results = searchResults.map((product) => {
			return {
				id: product.id,
				name: product.name,
				image: product.image,
				price: product.price,
			};
		});
	} catch (error) {
		//* Propagamos el error para que el "controller.js" decida que accion realizar con el error
		throw error;
	}
};
// loadSearchResults("placa");
