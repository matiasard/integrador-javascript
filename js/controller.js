import * as model from "./model.js";
import productsView from "./view/productsView.js";
import productView from "./view/productView.js";
import searchView from "./view/searchView.js";
import resultsView from "./view/resultsView.js";
import paginationView from "./view/paginationView.js";

console.log("3️⃣Controller Funcionando...");

const controlProducts = async function () {
	//* 1) Load Products
	await model.loadProducts();

	//* Spinner
	productsView.renderSpinner();

	//* 2) Render products
	productsView.render(model.state.products);
};

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
		resultsView.renderSpinner();

		//* 2) Load Results
		await model.loadSearchResults(query);

		//* 3) Render Results
		// resultsView.render(model.state.search.results);
		resultsView.render(model.getSearchResultsPage(model.state.search.page));

		//* 4) Render initial pagination buttons
		paginationView.render(model.state.search);
		paginationView._addClassActivePage();
	} catch (error) {
		resultsView.renderError(
			`No se encontraron resultados con el nombre "${model.state.search.query}"`
		);
	}
};

const controllPagination = function (goToPage) {
	// console.log(goToPage);
	model.state.search.page = goToPage;

	//* Spinner
	resultsView.renderSpinner();

	//* 1) Render NEW Results
	resultsView.render(model.getSearchResultsPage(model.state.search.page));

	//* 2) Render New pagination buttons
	paginationView.render(model.state.search);
	paginationView._addClassActivePage();
};

const testPrint = function () {
	//* Asyc Function: Falta Agregar
	console.log("Prueba de Test Print Subscriber");
};

function init() {
	console.log("Funcion Init: Inicializando...");
	//* Handler Event
	// productView.addHandlerRender(controlProduct);
	productsView.addHandlerRender(testPrint);
	searchView.addHandlerSearch(controlSearchResults);
	paginationView.addHandlerClick(controllPagination, model.state.search);

	//* Show All Products
	controlProducts();
}

init();
