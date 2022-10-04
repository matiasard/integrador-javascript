import { productsData } from "./db.js";
import { API_URL } from "./config.js";
import { getJSON } from "./helper.js";

console.log("Model Funcionando...");

console.log(productsData);

export const state = {
	recipe: {},
};

export const loadProduct = async function (id) {
	try {
		// const data = await getJSON(`${API_URL}/${id}`);

		// let { recipe } = data.data;

		// state.recipe = {
		// 	id: recipe.id,
		// 	title: recipe.title,
		// 	publisher: recipe.publisher,
		// 	sourceUrl: recipe.source_url,
		// 	image: recipe.image_url,
		// 	servings: recipe.sercings,
		// 	cookingTime: recipe.cooking_time,
		// 	ingredients: recipe.ingredients,
		// };

		let data2 = productsData.find((el) => el.id === Number(id));
		console.log(data2);
		let recipe = data2;
		console.log(recipe);

		state.recipe = {
			id: recipe.price,
			title: recipe.name,
			publisher: recipe.description,
			image: recipe.cardImg,
		};

		console.log(state.recipe);
	} catch (error) {
		alert(error);
	}
};
