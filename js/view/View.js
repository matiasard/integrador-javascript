export default class View {
	_data;

	render(data) {
		if (!data || (Array.isArray(data) && data.length === 0))
			return this.renderError();

		this._data = data;
		console.log(this._data);
		const markup = this._generateMarkup();
		this.#clear();
		this._parentElement.insertAdjacentHTML("afterbegin", markup);
	}

	#clear() {
		this._parentElement.innerHTML = "";
	}

	renderError(message = this._errorMessage) {
		const markup = `
			<div class="alert alert-danger text-center fw-bold" role="alert">
				${message}
			</div>`;

		this.#clear();
		this._parentElement.insertAdjacentHTML("afterbegin", markup);
	}

	renderMessage(message = this._message) {
		const markup = `
			<div class="alert alert-success text-center" role="alert">
				${message}
			</div>`;

		this.#clear();
		this._parentElement.insertAdjacentHTML("afterbegin", markup);
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
		this._parentElement.insertAdjacentHTML("afterbegin", markup);
	}
}
