import {ESC_KEY} from './full-photo.js';

const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const successMessage = successMessageTemplate.cloneNode(true);
const successCloseButton = successMessage.querySelector('.success__button');
const successMessageArea = document.querySelector('.success__inner');

const onEscCloseSuccessMessage = (evt) => {
  if (evt.keyCode === ESC_KEY) {
    evt.preventDefault();
    closeSuccessMessage();
  }
};

const onOutsideClick = (evt) => {
  const isInsideClick = evt.composedPath().includes(successMessageArea);
  if(!isInsideClick) {
    closeSuccessMessage();
  }
};

const getSuccessMessage = () => {
  document.body.appendChild(successMessage);
  document.addEventListener('keydown', onEscCloseSuccessMessage);
  document.addEventListener('click', onOutsideClick);
  successCloseButton.addEventListener('click', closeSuccessMessage);
};

function closeSuccessMessage () {
  document.body.removeChild(successMessage);
  document.removeEventListener('keydown', onEscCloseSuccessMessage);
  document.removeEventListener('click', onOutsideClick);
  successCloseButton.removeEventListener('click', closeSuccessMessage);
}

export {getSuccessMessage};
