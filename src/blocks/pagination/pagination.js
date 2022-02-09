import './pagination.scss';

const paginationButtons = document.querySelector('.pagination__list');
const paginationDescription = document.querySelector('.pagination__descr');

const ArrowImage = require('./assets/arrow_button.svg');

let totalItems = 180;
let currentPage = 1;

paginate(totalItems, currentPage);

function paginate(totalItems, currentPage) {
  let pageSize = 12;
  let totalPages = Math.ceil(totalItems / pageSize);
  let page = '';
  let activePage;
  let beforePages = currentPage - 2;
  let afterPages = currentPage + 2;

  if (currentPage < 1) {
    currentPage = 1;
  } else if (currentPage > totalPages) {
    currentPage = totalPages;
  } else if (currentPage == 1) {
    beforePages = currentPage;
  }
  if (currentPage == 2) {
    beforePages = 1;
  }

  if (currentPage > 3) {
    page += `
    <li class="pagination__item">
      <a class="pagination__item-link pagination__prev" href="#">
        <img src=${ArrowImage} class="pagination__img pagination__img--left" alt="alt" />
      </a>
    </li>
     `;
  }
  for (let pageLength = beforePages; pageLength <= afterPages; pageLength++) {
    if (currentPage == pageLength) {
      activePage = 'pagination__item-link--active';
    } else {
      activePage = '';
    }
    page += `<li class="pagination__item "> <a class="pagination__item-link" href="#">${pageLength}</a></li>`;

    if (pageLength === afterPages) {
      page += `
        <li class="pagination__item">
          <span class="pagination__dots">...</span>
        </li>`;
      page += `
        <li class="pagination__item "> 
          <a class="pagination__item-link" href="#">${totalPages}</a>
        </li>`
    }
  }

  if (currentPage < totalPages) {
    page += `
      <li class="pagination__item">
        <a class="pagination__item-link pagination__next" href="#">
          <img src=${ArrowImage} class="pagination__img" alt="alt" />
        </a>
      </li>
       `;
  }

  paginationButtons.innerHTML = page;
  // paginationDescription.innerHTML = `${currentPage - (currentPage % 12)} - ${
  //   currentPage - (currentPage % 12) + 12
  // } из 100+ вариантов аренды`;

  paginationButtons.addEventListener('click', e => {
    if (e.target.classList[0] === 'pagination__item-link') {
      paginate(totalItems, +e.target.innerText);
    }

    if (e.target.parentNode.classList[1] == 'pagination__prev') {
      paginate(totalItems, currentPage - 1);
    } else if (e.target.parentNode.classList == 'pagination__next') {
      paginate(totalItems, currentPage + 1);
    }
  });
}
