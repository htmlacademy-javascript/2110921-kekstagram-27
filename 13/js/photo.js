import {openCard} from './full-photo.js';

const userPictureList = document.querySelector('.pictures');
const similarCardTemplate = document.querySelector('#picture').content.querySelector('a');
const imgFilters = document.querySelector('.img-filters');
const pictureListFragment = document.createDocumentFragment();

const renderSimilarCards = (similarCards) => {
  imgFilters.classList.remove('img-filters--inactive');
  similarCards.forEach((card) => {
    const cardElement = similarCardTemplate.cloneNode(true);
    cardElement.querySelector('img').src = card.url;
    cardElement.querySelector('.picture__likes').textContent = card.likes;
    cardElement.querySelector('.picture__comments').textContent = card.comments.length;
    userPictureList.append(cardElement);

    cardElement.addEventListener('click', () => openCard(card));
  });
  userPictureList.append(pictureListFragment);
};

export {renderSimilarCards};
