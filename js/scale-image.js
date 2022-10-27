const SCALE_STEP = 25;
const MIN_SCALE_VALUE = 25;
const MAX_SCALE_VALUE = 100;
const DEFAULT_SCALE_VALUE = 100;

const controlField = document.querySelector('.scale__control--value');
const decreaseButton = document.querySelector('.scale__control--smaller');
const increaseButton = document.querySelector('.scale__control--bigger');
const imagePreview = document.querySelector('.img-upload__preview img');

const scaleImage = () => {
  imagePreview.style.transform = `scale(${parseInt(controlField.value, 10) / 100})`;
};

const increaseImage = () => {
  if (parseInt(controlField.value, 10) !== MAX_SCALE_VALUE ) {
    controlField.value = `${parseInt(controlField.value, 10) + SCALE_STEP}%`;
    scaleImage();
  }
};

const decreaseImage = () => {
  if (parseInt(controlField.value, 10) !== MIN_SCALE_VALUE) {
    controlField.value = `${parseInt(controlField.value, 10) - SCALE_STEP}%`;
    scaleImage();
  }
};

const setListenersButtons = () => {
  decreaseButton.addEventListener('click', decreaseImage);
  increaseButton.addEventListener('click', increaseImage);
};

const removeListenersButtons = () => {
  decreaseButton.removeEventListener('click', decreaseImage);
  increaseButton.removeEventListener('click', increaseImage);
};


const scale = () => {
  controlField.value = `${DEFAULT_SCALE_VALUE}%`;
  scaleImage();
  setListenersButtons();
};

export {scale, removeListenersButtons};
