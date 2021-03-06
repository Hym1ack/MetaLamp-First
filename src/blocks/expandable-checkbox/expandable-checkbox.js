import './expandable-checkbox.scss';

const expandCheckboxBtns = document.querySelectorAll('.expand-checkbox__btn'),
  expandCheckboxImg = document.querySelectorAll('.expand-checkbox__img'),
  expandCheckboxLists = document.querySelectorAll('.expand-checkbox__list');

expandCheckboxBtns.forEach((checkboxBtn, i) => {
  checkboxBtn.addEventListener('click', () => {
    expandCheckboxLists[i].classList.toggle('expand-checkbox__hide-smooth');
    expandCheckboxImg[i].classList.toggle('expand-checkbox__img--rotate');
  });
});
