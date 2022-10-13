import View from "./View.js";

class ProductsView extends View {
	_parentElement = document.querySelector(".producto-class");
	_errorMessage = `⚠ Ocurrio un error al cargar los productos ⚠`;
	_message = "";

	addHandlerRender(handler) {
		const events = ["click"];
		events.forEach((e) => this._parentElement.addEventListener(e, handler));
	}

	_generateMarkup() {
		return this._data.map(this._generateMarkupPreview).join("");
	}

	_generateMarkupPreview(product) {
		return `
      <div class="card mb-3">
        <div class="row g-0 justify-content-center justify-content-md-start">
          <div class="col-12 col-md-4 col-lg-auto px-2 d-flex justify-content-center d-md-block">
            <img
              src="${product.image}"
              class="img-fluid rounded-start justify-content-center card__img" width="160" height="142" alt="...">
          </div>
          <div class="col-12 col-md-8 text-center text-md-start">
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text">$${product.price}</p>
              <button class="btn btn-primary">Sumar al carrito</button>
            </div>
          </div>
        </div>
      </div>`;
	}
}

export default new ProductsView();
