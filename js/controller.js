import * as model from "./model.js";
import ProductView from "./view/productView.js";

console.log("Controller Funcionando...");

const controlProduct = async function () {
	try {
		// const id = "5ed6604591c37cdc054bc886";
		const id = 1;

		if (!id) return;
		// renderSpinner(productContainer); Funcion: Falta Implementar

		//* 1) Load Product
		//* Esta funcion es asincrona
		await model.loadProduct(id);
		// model.loadProduct(id);
		// const { product } = model.state;

		//* 2) Rendering Product
		ProductView.render(model.state.recipe);
		// const productView = new productView(model.state.product);
	} catch (error) {
		alert(error);
	}
};

// ['hashchange', 'load'].forEach(ev => {
// 	window.addEventListener(ev, controlProduct)
// });

function init() {
	console.log("Funcion Init: Inicializando...");
	controlProduct();
}

init();
