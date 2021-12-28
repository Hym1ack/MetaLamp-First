import './dropdown.scss';

const dropdownMenu = document.querySelector('.dropdown__menu'),
  dropdownBtn = document.querySelector('.dropdown__btn'),
  dropdownCounter = dropdownMenu.querySelectorAll('.dropdown__item-counter'),
  dropdownReset = dropdownMenu.querySelector('.dropdown__reset'),
  dropdownApply = dropdownMenu.querySelector('.dropdown__apply');

let currentNumbers = [];


dropdownCounter.forEach(dropdownCount => {
  dropdownCount.addEventListener('click', e => {
    currentNumbers = [];

    const target = e.target;
    if (target.classList == 'dropdown__item-minus') {
      target.nextSibling.innerText = Number(target.nextSibling.innerText) - 1;
      updateNumbers(currentNumbers, dropdownCounter);
    } else if (target.classList == 'dropdown__item-plus') {
      target.previousSibling.innerText =
        Number(target.previousSibling.innerText) + 1;
      updateNumbers(currentNumbers, dropdownCounter);
    }
  });
});

dropdownReset.addEventListener('click', () => {
  currentNumbers = [0];
  dropdownCounter.forEach(dropdownCount => {
    dropdownCount.children[1].innerText = currentNumbers;
  });
  dropdownBtn.innerText = `Выберите количество гостей`;
  updateNumbers(currentNumbers, dropdownCounter);
});

dropdownApply.addEventListener('click', () => {
  const guests = currentNumbers.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );
  switch (guests) {
    case 0:
      dropdownBtn.innerText = `Выберите количество гостей`;
      break;
    case 1:
      dropdownBtn.innerText = `${guests} гость`;
      break;
    case 2:
    case 3:
    case 4:
      dropdownBtn.innerText = `${guests} гостя`;
      break;

    default:
      dropdownBtn.innerText = `${guests} гостей`;
      break;
  }
});

updateNumbers(currentNumbers, dropdownCounter);

function updateNumbers(currentNumbers, dropdownCounter) {
  dropdownCounter.forEach(dropdownCount => {
    currentNumbers.push(Number(dropdownCount.children[1].innerText));
    if (dropdownCount.children[1].innerText == 0) {
      dropdownCount.firstChild.classList.add('dropdown__item--opacity');
    } else {
      dropdownCount.firstChild.classList.remove('dropdown__item--opacity');
    }
  });
}
