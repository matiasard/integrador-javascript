console.log("View Funcionando...");
class ProductView {
	#parentElement = document.querySelector(".producto-class");
	#data;

	render(data) {
		this.#data = data;
		console.log(this.#data);
		const markup = this.#generateMarkup();
		this.#clear();
		// recipeContainer.innerHTML = "";
		this.#parentElement.insertAdjacentHTML("afterbegin", markup);
	}

	#clear() {
		this.#parentElement.innerHTML = "";
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
						<h5 class="card-title">${this.#data.title}</h5>
						<p class="card-text">$${this.#data.id}</p>
						<button class="btn btn-primary">Sumar al carrito</button>
					</div>
				</div>
			</div>
		</div>`;
	}
}

export default new ProductView();
