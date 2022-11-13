const ESC_KEY = 27;
const COUNT_VIEW_COMMENTS = 5;

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

let usersComments;
let amount;

const makeSocialCommentItem = (comments) => {
  const commentElement = commentTemplate.cloneNode(true);
  commentElement.querySelector('img').src = comments.avatar;
  commentElement.querySelector('img').alt = comments.name;
  commentElement.querySelector('.social__text').textContent = comments.message;
  socialCommentList.append(commentElement);
};

const renderComments = () => {
  socialCommentList.innerHTML = '';
  const loadedCommtent = usersComments.slice(0, amount);
  loadedCommtent.forEach((comment) => makeSocialCommentItem(comment));

  socialCommentsCounter.innerHTML = `${loadedCommtent.length} из <span class="comments-count">${usersComments.length}</span> комментариев`;
  if(loadedCommtent.length === usersComments.length) {
    loadButton.classList.add('hidden');
  } else {
    loadButton.classList.remove('hidden');
  }

};

const commentsLoaderOnClick = () => {
  amount += COUNT_VIEW_COMMENTS;
  renderComments();
};

const makeBigPicture = (({url, likes, comments, description}) => {
  previewPhotoImage.src = url;
  likesCounter.textContent = likes;
  commentsCounter.textContent = comments.length;
  socialCaption.textContent = description;

  usersComments = comments;
  // eslint-disable-next-line no-unused-expressions
  comments.length < COUNT_VIEW_COMMENTS ? amount = comments.length : amount = COUNT_VIEW_COMMENTS;
  renderComments();
  loadButton.addEventListener('click', commentsLoaderOnClick);
});

const onEscClose = (evt) => {
  if (evt.keyCode === ESC_KEY) {
    evt.preventDefault();
    closeCard();
  }
};

function closeCard() {
  bigPictureElement.classList.add('hidden');
  body.classList.remove('modal-open');
  socialCommentList.innerHTML = '';
  document.body.removeEventListener('keydown', onEscClose);
}

const openCard = (card) => {
  bigPictureElement.classList.remove('hidden');
  body.classList.add('modal-open');

  makeBigPicture(card);
  document.body.addEventListener('keydown', onEscClose);
};

closePicture.addEventListener('click',() => {
  closeCard ();
});

export {openCard, ESC_KEY};
