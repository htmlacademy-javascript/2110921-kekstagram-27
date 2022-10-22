const ESC_KEY = 27;

const body = document.querySelector('body');
const bigPictureElement = document.querySelector('.big-picture');
const previewPhoto = bigPictureElement.querySelector('.big-picture__img');
const previewPhotoImage = previewPhoto.querySelector('img');
const likesCounter = bigPictureElement.querySelector('.likes-count');
const commentsCounter = bigPictureElement.querySelector('.comments-count');
const socialCaption = bigPictureElement.querySelector('.social__caption');
const socialCommentList = bigPictureElement.querySelector('.social__comments');
const socialCommentsCounter = document.querySelector('.social__comment-count');
const loadButton = document.querySelector('.comments-loader');
const closePicture = bigPictureElement.querySelector('#picture-cancel');

const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');

const makeSocialCommentItem = (comments) => {
  comments.forEach(({avatar, name, message}) => {
    const commentElement = commentTemplate.cloneNode(true);
    commentElement.querySelector('img').src = avatar;
    commentElement.querySelector('img').alt = name;
    commentElement.querySelector('.social__text').textContent = message;
    socialCommentList.append(commentElement);
  });
};

const makeBigPicture = ({url, likes, comments, description}) => {
  previewPhotoImage.src = url;
  likesCounter.textContent = likes;
  commentsCounter.textContent = comments.length;
  makeSocialCommentItem(comments);
  socialCaption.textContent = description;
};

const onEscClose = (evt) => {
  if (evt.keyCode === ESC_KEY) {
    evt.preventDefault();
    closeCard();
  }
};

function closeCard() {
  bigPictureElement.classList.add('hidden');
  socialCommentsCounter.classList.remove('hidden');
  loadButton.classList.remove('hidden');
  body.classList.remove('modal-open');
  socialCommentList.innerHTML = '';
  document.body.removeEventListener('keydown', onEscClose);
}

const openCard = (card) => {
  bigPictureElement.classList.remove('hidden');
  socialCommentsCounter.classList.add('hidden');
  loadButton.classList.add('hidden');
  body.classList.add('modal-open');

  makeBigPicture(card);
  document.body.addEventListener('keydown', onEscClose);
};

closePicture.addEventListener('click',() => {
  closeCard ();
});

export {openCard, ESC_KEY};
