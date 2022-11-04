import {openCard} from './full-photo.js';

const userPictureList = document.querySelector('.pictures');
const similarCardTemplate = document.querySelector('#picture').content.querySelector('a');

const pictureListFragment = document.createDocumentFragment();

const renderSimilarCards = (similarCards) => {
  similarCards.forEach((card) => {
    const cardElement = similarCardTemplate.cloneNode(true);
    cardElement.querySelector('img').src = card.url;
    cardElement.querySelector('.picture__likes').textContent = card.likes;
    cardElement.querySelector('.picture__comments').textContent = card.comments.length;
    userPictureList.append(cardElement);

    cardElement.addEventListener('click', () => openCard(card));
  });
};
userPictureList.append(pictureListFragment);

export {renderSimilarCards};
