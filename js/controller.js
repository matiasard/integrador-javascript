import * as model from "./model.js";
import productView from "./view/productView.js";
import searchView from "./view/searchView.js";

console.log("3️⃣Controller Funcionando...");

const controlProduct = async function () {
	try {
		// const id = "5ed6604591c37cdc054bc886";
		const id = 1;

		if (!id) return;
		//* Spinner
		productView.renderSpinner();

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

const controlSearchResults = async function () {
	try {
		//* 1) Get search query
		const query = searchView.getQuery();

		if (!query) return;
		productView.renderSpinner();

		//* 2) Load Results
		await model.loadSearchResults(query);

		//* 3) Render Results
		// todo: implementar la funcion para renderizar todos los resultados
		console.log(model.state.search.results);
		// await productView.renderSearchResults(model.state.search.results);
		await productView.render(model.state.search.results[0]);
	} catch (error) {
		productView.renderError(
			`No se encontraron resultados con el nombre "${model.state.search.query}"`
		);
	}
};

const testPrint = function () {
	//* Asyc Function: Falta Agregar
	console.log("Prueba de Test Print Subscriber");
};

function init() {
	console.log("Funcion Init: Inicializando...");
	//* Handler Event
	// productView.addHandlerRender(controlProduct);
	productView.addHandlerRender(testPrint);
	searchView.addHandlerSearch(controlSearchResults);

	//* Control Product
	controlProduct();
}

init();
