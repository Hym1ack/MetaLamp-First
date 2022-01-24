import './like-btn.scss';

const likeBtn = document.querySelectorAll('.like__button');
const likeIcon = document.querySelectorAll('.like__heart');
const likeCount = document.querySelectorAll('.like__count');

import heartActive from './assets/heart-active.svg';
import heart from './assets/heart.svg';

likeBtn.forEach((button, index) => {
  let clicked = false;

  if (likeIcon[index].dataset.src == 'active') {
    likeIcon[index].src = heartActive;
    clicked = true;
  } else {
    likeIcon[index].src = heart;
    delete likeIcon[index].dataset.src;
  }

  button.addEventListener('click', () => {
    if (clicked) {
      clicked = false;
      button.classList.toggle('like__box-liked');
      likeIcon[index].src = heart;
      likeCount[index].textContent--;
    } else {
      clicked = true;
      button.classList.toggle('like__box-liked');
      likeIcon[index].src = heartActive;
      likeCount[index].textContent++;
    }
  });
});
