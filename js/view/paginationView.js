import View from "./View.js";

class PaginationView extends View {
	_parentElement = document.querySelector(".pagination__container");
	// _errorMessage = `⚠ Ocurrio un error al cargar los productos ⚠`;
	// _message = "";

	addHandlerClick(handler, data) {
		this._parentElement.addEventListener("click", function (e) {
			const btn = e.target.closest(".page-item");
			if (!btn) return;

			const numPages = Math.ceil(data.results.length / data.resultPerPage);
			const goToPage = Number(btn.dataset.goto);

			if (goToPage === 0 || goToPage > numPages) return;

			handler(goToPage);
		});
	}

	_generateMarkup() {
		const currentPage = this._data.page;
		const numPages = Math.ceil(
			this._data.results.length / this._data.resultPerPage
		);

		const arrayPageNumbers = Array(numPages)
			.fill(null)
			.map((el, index) => (el = index + 1));

		// Page 1 and there other page
		if (currentPage === 1 && numPages > 1) {
			return this._generateMarkupPreview(
				arrayPageNumbers,
				currentPage,
				false,
				true
			);
		}

		// Last Page
		if (currentPage === numPages && numPages > 1) {
			return this._generateMarkupPreview(
				arrayPageNumbers,
				currentPage,
				true,
				false
			);
		}

		// Other Page
		if (currentPage < numPages) {
			return this._generateMarkupPreview(
				arrayPageNumbers,
				currentPage,
				true,
				true
			);
		}

		// Page 1 and there NO other page
		return "";
	}

	_generateMarkupPreview(
		arrayPageNumbers,
		currentPage,
		previousPageExists = false,
		nextsPageExists = false
	) {
		return `
      <nav aria-label="...">
        <ul class="pagination justify-content-center">
          <li 
            data-goto="${currentPage - 1}" 
            class="page-item ${previousPageExists ? "" : "disabled"}">
            <a class="page-link" href="#">Previous</a>
          </li>
          
          ${arrayPageNumbers.map((el) => {
						return `
              <li data-goto="${el}" class="page-item">
                <a class="page-link" href="#">${el}</a>
              </li>`;
					})}
          <li
            data-goto="${currentPage + 1}"
            class="page-item ${nextsPageExists ? "" : "disabled"}">
            <a class="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>`;
	}

	_addClassActivePage() {
		const currentPageNumber = this._data.page;
		let btnsPage = Array.from(document.getElementsByClassName("page-link"));
		if (btnsPage.length == 0 || !btnsPage) return;

		//* Remove active class
		btnsPage.forEach((element) => {
			if (element.className.includes("active")) {
				element.toggle("active");
			}
		});

		//* Add active class
		btnsPage[currentPageNumber].classList.add("active");
		// console.log(btnsPage[currentPageNumber]);
	}
}

export default new PaginationView();
