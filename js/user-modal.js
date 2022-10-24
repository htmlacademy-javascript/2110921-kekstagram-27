import { ESC_KEY } from './full-photo.js';
import { pristine, form, formHashtag, formComment } from './validate-form.js';

const body = document.querySelector('body');
const imageEditor = document.querySelector('.img-upload__overlay');
const uploadFile = document.querySelector('#upload-file');
const closeEditor = document.querySelector('#upload-cancel');

const onEscCloseModal = (evt) => {
  if (evt.keyCode === ESC_KEY) {
    evt.preventDefault();
    closeUserModal();
  }
};

const openUserModal = () => {
  imageEditor.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onEscCloseModal);
  closeEditor.addEventListener('click', closeUserModal);
};

function closeUserModal() {
  imageEditor.classList.add('hidden');
  body.classList.remove('modal-open');
  pristine.reset();//пока просто добавила, чтобы убиралось сообщение от валидатора при повторном открытии редактора
  document.removeEventListener('keydown', onEscCloseModal);
  closeEditor.removeEventListener('click', closeUserModal);
}

uploadFile.addEventListener('change', () => {
  openUserModal();
});

form.addEventListener('keydown', (evt) => {
  if (document.activeElement === formHashtag || document.activeElement === formComment) {
    evt.stopPropagation();
  }
});

