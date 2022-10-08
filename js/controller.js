import * as model from "./model.js";
import productView from "./view/productView.js";

console.log("3️⃣Controller Funcionando...");

const controlProduct = async function () {
	try {
		// const id = "5ed6604591c37cdc054bc886";
		const id = 1;

		if (!id) return;

		//* 1) Load Product
		//* Esta funcion es asincrona
		await model.loadProduct(id);
		// const { product } = model.state;

		//* 2) Rendering Product
		productView.render(model.state.product);
		// const productView = new productView(model.state.product);
	} catch (error) {
		// alert(error);
		productView.renderError();
	}
};

const testPrint = function () {
	//* Asyc Function: Falta Agregar
	console.log("Prueba de Test Print Subscriber");
};

function init() {
	console.log("Funcion Init: Inicializando...");
	//* Handler Event
	productView.addHandlerRender(testPrint);
	//* Spinner
	productView.renderSpinner();
	//* Control Product
	controlProduct();
}

init();
