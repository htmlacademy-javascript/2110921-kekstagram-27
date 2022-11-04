const SCALE_STEP = 25;
const MIN_SCALE_VALUE = 25;
const MAX_SCALE_VALUE = 100;
const DEFAULT_SCALE_VALUE = 100;

const controlField = document.querySelector('.scale__control--value');
const decreaseButton = document.querySelector('.scale__control--smaller');
const increaseButton = document.querySelector('.scale__control--bigger');
const imagePreview = document.querySelector('.img-upload__preview img');

const scaleImage = () => {
  imagePreview.style.transform = `scale(${parseInt(controlField.value, 10) / DEFAULT_SCALE_VALUE})`;
};

const onIncreaseButton = () => {
  if (parseInt(controlField.value, 10) !== MAX_SCALE_VALUE ) {
    controlField.value = `${parseInt(controlField.value, 10) + SCALE_STEP}%`;
    scaleImage();
  }
};

const onDecreaseButton = () => {
  if (parseInt(controlField.value, 10) !== MIN_SCALE_VALUE) {
    controlField.value = `${parseInt(controlField.value, 10) - SCALE_STEP}%`;
    scaleImage();
  }
};

const setListenersButtons = () => {
  decreaseButton.addEventListener('click', onDecreaseButton);
  increaseButton.addEventListener('click', onIncreaseButton);
};

const removeListenersButtons = () => {
  decreaseButton.removeEventListener('click', onDecreaseButton);
  increaseButton.removeEventListener('click', onIncreaseButton);
};


const scale = () => {
  controlField.value = `${DEFAULT_SCALE_VALUE}%`;
  scaleImage();
  setListenersButtons();
};

export {scale, removeListenersButtons, imagePreview};
