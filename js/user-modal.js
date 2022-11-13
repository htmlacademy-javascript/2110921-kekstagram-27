import {ESC_KEY} from './full-photo.js';
import {form, formHashtag, formComment} from './validate-form.js';
import {scale, imagePreview, removeListenersButtons} from './scale-image.js';
import {resetForm} from './effect-image.js';

const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const body = document.querySelector('body');
const imageEditor = document.querySelector('.img-upload__overlay');
const uploadFile = document.querySelector('#upload-file');
const closeEditor = document.querySelector('#upload-cancel');


const onEscCloseModalKeydown = (evt) => {
  const errorElement = document.querySelector('.error');
  if (evt.keyCode === ESC_KEY && !errorElement) {
    evt.preventDefault();
    closeUserModal();
  }
};

const openUserModal = () => {
  scale();
  imageEditor.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onEscCloseModalKeydown);
  form.addEventListener('keydown', onEscInputKeydown);
  closeEditor.addEventListener('click', closeUserModal);
};

function closeUserModal() {
  imageEditor.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscCloseModalKeydown);
  form.removeEventListener('keydown', onEscInputKeydown);
  closeEditor.removeEventListener('click', closeUserModal);
  removeListenersButtons();
  resetForm();
}

uploadFile.addEventListener('change', () => {
  const file = uploadFile.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    imagePreview.src = URL.createObjectURL(file);
  }
  openUserModal();
});

function onEscInputKeydown(evt) {
  if (document.activeElement === formHashtag || document.activeElement === formComment) {
    evt.stopPropagation();
  }
}

export {openUserModal, closeUserModal};
