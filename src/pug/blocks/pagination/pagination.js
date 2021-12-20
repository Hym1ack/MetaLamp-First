import './pagination.scss';

const paginationButtons = document.querySelector('.pagination__list');
const paginationDescription = document.querySelector('.pagination__descr');

let totalPages = 120;

function paginationRefresh(totalPages, page) {
  let liTag = '';
  let activeLi;
  let beforePages = page - 1;
  let afterPages = page + 1;

  if (beforePages == 0) {
    beforePages == page;
  }

  if (page > 1) {
    liTag += `<li class="pagination__prev"><img class="pagination__img pagination__img--left" src="../../../images/arrow_button.svg" alt="Prev" /></li>`;
  }
  
  for (let pageLenght = beforePages; pageLenght <= afterPages; pageLenght++) {
    if (page == pageLenght) {
      activeLi = 'pagination__number--active';
    } else {
      activeLi = '';
    }
    liTag += `<li class="pagination__number ${activeLi}">${pageLenght}</li>`;
  }

  if (page < totalPages) {
    liTag += `<li class="pagination__next"><img class="pagination__img pagination__img--right" src="../../../images/arrow_button.svg" alt="Next"></li>`;
  }
  paginationButtons.innerHTML = liTag;
  paginationDescription.innerHTML = `${page - (page % 12)} - ${
    page - (page % 12) + 12
  } из ${totalPages}+ вариантов аренды`;
}

paginationRefresh(totalPages, 55);
