import {checkLengthStr, countSameValue} from './util.js';
import {sendData} from './api-server.js';
import {resetForm} from './effect-image.js';
import {getSuccessMessage, getErrorMessage} from './popup-message.js';

const HASHTAG_RULE = /^#[a-zа-яё0-9]{1,19}$/i;
const HASTAG_MAX_COUNT = 5;
const MAX_DESCRIPTION_LENGTH = 140;

const form = document.querySelector('#upload-select-image');
const formHashtag = form.querySelector('.text__hashtags');
const formComment = form.querySelector('.text__description');
const submitButton = document.querySelector('#upload-submit');

const getHashTagsArray = (value) => value.trim().toLowerCase().split(' ');

const pristine = new Pristine(form, {
  classTo: 'img-upload__error',
  errorTextParent: 'img-upload__error',
  errorTextTag: 'p',
  errorTextClass: 'form__error'
});

pristine.addValidator(formHashtag, (value) => {
  if (value.length === 0) {
    return true;
  }
  const hashtags = getHashTagsArray(value);
  const check = hashtags.every((hashtag) => (HASHTAG_RULE.test(hashtag)));
  return check;
}, 'Неверный формат хэштегов.');

pristine.addValidator(formHashtag, (value) => {
  const hashtags = getHashTagsArray(value);
  return hashtags.length <= HASTAG_MAX_COUNT;
}, `нельзя указать больше ${HASTAG_MAX_COUNT} хэштегов.`);

pristine.addValidator(formHashtag, (value) => {
  const hashtags = getHashTagsArray(value);
  const isValidHashtags = hashtags.every((hashtag) => {
    const isUniqueHashtag = countSameValue(hashtags, hashtag) === 1;
    return isUniqueHashtag;
  });
  return isValidHashtags;

}, 'Один и тот же хэш-тег не может быть использован дважды.');

pristine.addValidator(formComment, (comment) => {
  if (comment.length < MAX_DESCRIPTION_LENGTH) {
    return true;
  }
  checkLengthStr(comment, MAX_DESCRIPTION_LENGTH);
}, 'Длина комментария не может составлять больше 140 символов.');

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Сохраняю...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Сохранить';
};

const setUserFormSubmit = (onSuccess) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(
        () => {
          onSuccess();
          unblockSubmitButton();
          resetForm();
          getSuccessMessage();
        },
        () => {
          getErrorMessage();
          unblockSubmitButton();
        },
        new FormData(evt.target),
      );
    }
  });
};

export {pristine, form, formHashtag, formComment, setUserFormSubmit};
