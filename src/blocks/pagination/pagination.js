// import './pagination.scss';
// const paginationButtons = document.querySelector('.pagination__list');
// const paginationDescription = document.querySelector('.pagination__descr');

// const numberOfItems = 36;
// const numberPerPage = 9;
// const numberOfPages = Math.ceil(numberOfItems / numberPerPage);
// let currentPage = 10;

// const listArrayBtns = [];

// for (let i = 0; i <= numberOfItems; i++) {
//   listArrayBtns.push(
//     `<li class="pagination__item"> <a class="pagination__item-link" href="#">${i}</a></li>`
//   );
// }

// paginate();

// function paginate() {
//   buildPage(currentPage);
//   buildButtons(currentPage, numberOfPages);
// }

// function buildPage(currentPage) {
//   let minNumber = currentPage - 2;
//   let maxNumber = currentPage + 2;
//   if (minNumber <= 0) {
//     minNumber = 1;
//     maxNumber = 3;
//   }
//   console.log(minNumber, maxNumber);

//   const exportArray = listArrayBtns.slice(minNumber, maxNumber + 1);
//   exportArray.join(' ');
//   console.log(exportArray);
//   return exportArray;
// }

// function buildButtons(currentPage, numberOfPages) {
//   const prevButton = `
//   <li class="pagination__item">
//     <a class="pagination__item-link" href="#">
//       <img src=${ArrowImage} class="pagination__img pagination__img--left" alt="alt" />
//     </a>
//   </li>
//   `;
//   const nextButton = `
//   <li class="pagination__item">
//     <a class="pagination__item-link" href="#">
//       <img src=${ArrowImage} class="pagination__img" alt="alt" />
//     </a>
//   </li>
//   `;
//   if (currentPage > 3) {
//     paginationButtons.innerHTML += prevButton;
//   }
//   if (currentPage < numberOfPages - 3) {
//     paginationButtons.innerHTML += nextButton;
//   }
// }
import './pagination.scss';

const paginationButtons = document.querySelector('.pagination__list');
const paginationDescription = document.querySelector('.pagination__descr');

const ArrowImage = require('./arrow_button.svg');

let totalItems = 153;
let currentPage = 4;

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
    page += `<li class="pagination__item "> <a class="pagination__item-link ${activePage}" href="#">${pageLength}</a></li>`;
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
  paginationDescription.innerHTML = `${currentPage - (currentPage % 12)} - ${
    currentPage - (currentPage % 12) + 12
  } из 100+ вариантов аренды`;

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
