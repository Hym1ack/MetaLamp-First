import './like-btn.scss';

const likeBtn = document.querySelectorAll('.like__button');
let likeIcon = document.querySelectorAll('.like__heart');
let likeCount = document.querySelectorAll('.like__count');

for (let i = 0; i < likeBtn.length; i++) {
  let clicked = false;

  likeBtn[i].addEventListener('click', () => {
    if (!clicked) {
      clicked = true;
      likeBtn[i].classList.toggle('like__box-liked');
      likeIcon[i].src = 'pug/blocks/like-btn/heart-active.svg';
      likeCount[i].textContent++;
    } else {
      clicked = false;
      likeBtn[i].classList.toggle('like__box-liked');
      likeIcon[i].src = 'pug/blocks/like-btn/heart.svg';
      likeCount[i].textContent--;
    }
  });
}
