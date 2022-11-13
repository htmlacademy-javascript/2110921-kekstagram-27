import {ESC_KEY} from './full-photo.js';

const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const successMessage = successMessageTemplate.cloneNode(true);
const successCloseButton = successMessage.querySelector('.success__button');
const successMessageArea = document.querySelector('.success__inner');

const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');
const errorMessage = errorMessageTemplate.cloneNode(true);
const errorCloseButton = errorMessage.querySelector('.error__button');
const errorMessageArea = document.querySelector('.error__inner');


//сообщение об успешной отправке и действия с ним

const onEscCloseSuccessMessageKeydown = (evt) => {
  if (evt.keyCode === ESC_KEY) {
    evt.preventDefault();
    closeSuccessMessage();
  }
};

const onOutsideSuccessClick = (evt) => {
  const isInsideClick = evt.composedPath().includes(successMessageArea);
  if(!isInsideClick) {
    closeSuccessMessage();
  }
};

const getSuccessMessage = () => {
  document.body.appendChild(successMessage);
  document.addEventListener('keydown', onEscCloseSuccessMessageKeydown);
  document.addEventListener('click', onOutsideSuccessClick);
  successCloseButton.addEventListener('click', closeSuccessMessage);
};

function closeSuccessMessage () {
  document.body.removeChild(successMessage);
  document.removeEventListener('keydown', onEscCloseSuccessMessageKeydown);
  document.removeEventListener('click', onOutsideSuccessClick);
  successCloseButton.removeEventListener('click', closeSuccessMessage);
}

//сообщение об ошибке и действия с ним

const onEscCloseErrorMessage = (evt) => {
  if (evt.keyCode === ESC_KEY) {
    evt.preventDefault();
    closeErrorMessage();
  }
};

const onOutsideErrorClick = (evt) => {
  const isInsideClick = evt.composedPath().includes(errorMessageArea);
  if(!isInsideClick) {
    closeErrorMessage();
  }
};

const getErrorMessage = () => {
  document.body.appendChild(errorMessage);
  document.addEventListener('click', onOutsideErrorClick);
  document.addEventListener('keydown', onEscCloseErrorMessage);
  errorCloseButton.addEventListener('click', closeErrorMessage);
};

function closeErrorMessage () {
  document.body.removeChild(errorMessage);
  document.removeEventListener('click', onOutsideErrorClick);
  document.removeEventListener('keydown', onEscCloseErrorMessage);
  errorCloseButton.removeEventListener('click', closeErrorMessage);
}

export {getSuccessMessage, getErrorMessage};
