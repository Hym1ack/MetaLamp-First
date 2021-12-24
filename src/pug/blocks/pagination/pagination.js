import './pagination.scss';

const paginationButtons = document.querySelector('.pagination__list');
const paginationDescription = document.querySelector('.pagination__descr');

let totalItems = 153;
let currentPage = 3;

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

  if (currentPage > 1) {
    page += `<li class="pagination__prev"><img class="pagination__img pagination__img--left" src="../../../images/arrow_button.svg" alt="Prev" /></li>`;
  }

  for (let pageLenght = beforePages; pageLenght <= afterPages; pageLenght++) {
    if (currentPage == pageLenght) {
      activePage = 'pagination__number--active';
    } else {
      activePage = '';
    }
    page += `<li class="pagination__number ${activePage}">${pageLenght}</li>`;
  }

  if (currentPage < totalPages) {
    page += `<li class="pagination__next"><img class="pagination__img pagination__img--right" src="../../../images/arrow_button.svg" alt="Next"></li>`;
  }

  console.log(beforePages, currentPage, afterPages);
  paginationButtons.innerHTML = page;
  paginationDescription.innerHTML = `${currentPage - (currentPage % 12)} - ${
    currentPage - (currentPage % 12) + 12
  } из 100+ вариантов аренды`;

  paginationButtons.addEventListener('click', e => {
    console.log(e.target.classList);
    if (e.target.classList == 'pagination__number') {
      // paginate(totalItems, +e.target.innerHTML);
      console.log('lol');
      console.log(e.target.classList, +e.target.innerText);
    }

    if (e.target.parentNode.classList == 'pagination__prev') {
      paginate(totalItems, currentPage - 1);
      console.log('done -');
    } else if (e.target.parentNode.classList == 'pagination__next') {
      paginate(totalItems, currentPage + 1);
      console.log('done +');
    }
  });
}
