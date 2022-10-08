// import { productsData } from "./db.js";
// console.log(productsData);
import { API_URL, API_URL_2 } from "./config.js";
import { getJSON } from "./helper.js";

console.log("1️⃣Model Funcionando...");

export const state = {
	product: {},
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
			title: product.name,
			description: product.description,
			image: product.cardImg,
			price: product.price,
		};
		console.log(state.product);
	} catch (error) {
		//* Propagamos el error para que pase directo al "Catch" del "controller.js"
		throw error;
	}
};
