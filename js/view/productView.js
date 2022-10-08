console.log("2️⃣View Funcionando...");
class ProductView {
	#parentElement = document.querySelector(".producto-class");
	#data;
	#errorMessage = "⚠ Ocurrio un error al cargar los Productos ⚠";
	#message = "";

	// addHandlerRender(handler) {
	// 	const events = ["hashchange", "load"];
	// 	events.forEach((e) => window.addEventListener(e, handler));
	// }
	addHandlerRender(handler) {
		const events = ["click"];
		events.forEach((e) => this.#parentElement.addEventListener(e, handler));
	}

	render(data) {
		this.#data = data;
		console.log(this.#data);
		const markup = this.#generateMarkup();
		this.#clear();
		this.#parentElement.insertAdjacentHTML("afterbegin", markup);
	}

	#clear() {
		this.#parentElement.innerHTML = "";
	}

	renderError(message = this.#errorMessage) {
		const markup = `
			<div class="alert alert-danger text-center fw-bold" role="alert">
				${message}
			</div>`;

		this.#clear();
		this.#parentElement.insertAdjacentHTML("afterbegin", markup);
	}

	renderMessage(message = this.#message) {
		const markup = `
			<div class="alert alert-success text-center" role="alert">
				${message}
			</div>`;

		this.#clear();
		this.#parentElement.insertAdjacentHTML("afterbegin", markup);
	}

	renderSpinner() {
		const markup = ` 
				<div class="spinner">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-repeat"
						viewBox="0 0 16 16">
						<path
							d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
						<path fill-rule="evenodd"
							d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z" />
					</svg>
				</div>`;

		this.#clear();
		this.#parentElement.insertAdjacentHTML("afterbegin", markup);
	}

	#generateMarkup() {
		return `
		<div class="card mb-3">
			<div class="row g-0 justify-content-center justify-content-md-start">
				<div class="col-12 col-md-4 col-lg-auto px-2 d-flex justify-content-center d-md-block">
					<img
						src="${this.#data.image}"
						class="img-fluid rounded-start justify-content-center card__img" width="160" height="142" alt="...">
				</div>
				<div class="col-12 col-md-8 text-center text-md-start">
					<div class="card-body">
						<h5 class="card-title">${this.#data.name}</h5>
						<p class="card-text">$${this.#data.price}</p>
						<button class="btn btn-primary">Sumar al carrito</button>
					</div>
				</div>
			</div>
		</div>`;
	}
}

export default new ProductView();
