import './dropdown.scss';

const dropdownArray = document.querySelectorAll('.dropdown');

dropdownArray.forEach(dropdownArr => {
  const dropdownBtn = dropdownArr.querySelector('.dropdown__btn'),
    dropdownCounter = dropdownArr.querySelectorAll('.dropdown__item-counter'),
    dropdownResetBtn = dropdownArr.querySelector('.dropdown__reset'),
    dropdownApplyBtn = dropdownArr.querySelector('.dropdown__apply');

  let currentNumbers = [];

  function hideResetBtn(dropdownCounter, currentNumbers) {
    console.log(dropdownCounter, currentNumbers);
  }
  console.log(dropdownCounter);

  function buttons() {
    dropdownApplyBtn.addEventListener('click', () => {
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
    dropdownResetBtn.addEventListener('click', () => {
      currentNumbers = [0];
      console.log(currentNumbers);
      dropdownCounter.forEach(dropdownCount => {
        dropdownCount.children[1].innerText = currentNumbers;
      });

      dropdownBtn.innerText = `Выберите количество гостей`;
      updateNumbers(currentNumbers);
      // hideResetBtn(dropdownCounter, currentNumbers)
    });
  }

  dropdownCounter.forEach((dropdownCount, i) => {
    dropdownCount.addEventListener('click', e => {
      const target = e.target;
      currentNumbers = [];
      if (target.classList == 'dropdown__item-minus') {
        target.nextSibling.innerText = Number(target.nextSibling.innerText) - 1;
        updateNumbers(currentNumbers);
      } else if (target.classList == 'dropdown__item-plus') {
        target.previousSibling.innerText =
          Number(target.previousSibling.innerText) + 1;
        updateNumbers(currentNumbers);
      }
    });

    updateNumbers(currentNumbers);

    if (!dropdownBtn.classList.contains('dropdown__rooms')) {
      buttons();
    }

    function updateNumbers(currentNumbers) {
      hideResetBtn(dropdownCount, currentNumbers);
      dropdownCounter.forEach(dropdownCount => {
        currentNumbers.push(Number(dropdownCount.children[1].innerText));
        if (dropdownCount.children[1].innerText == 0) {
          dropdownCount.firstChild.classList.add('dropdown__item--opacity');
        } else {
          dropdownCount.firstChild.classList.remove('dropdown__item--opacity');
        }
      });

      if (dropdownBtn.classList.contains('dropdown__rooms')) {
        let outerText = '';
        const arrNames = [];
        dropdownArr.querySelectorAll('.dropdown__item-text').forEach(item => {
          arrNames.push(item.innerText);
        });

        for (let i = 0; i < arrNames.length; i++) {
          outerText += `${currentNumbers[i]} ${arrNames[i]}, `;
        }

        dropdownBtn.innerText = outerText;
        if (dropdownBtn.innerText.length > 19) {
          dropdownBtn.innerText = `${outerText.substring(0, 20)}...`;
        }
      }
    }
  });
});
