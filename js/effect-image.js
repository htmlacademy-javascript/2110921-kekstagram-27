import {imagePreview} from './scale-image.js';

const filterNone = document.querySelector('#effect-none');
const filterChrome = document.querySelector('#effect-chrome');
const filterSepia = document.querySelector('#effect-sepia');
const filterMarvin = document.querySelector('#effect-marvin');
const filterPhobos = document.querySelector('#effect-phobos');
const filterHeat = document.querySelector('#effect-heat');
const sliderField = document.querySelector('.effect-level');
const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');
const effectsList = document.querySelector('.effects__list');

let currentEffect = document.querySelector('.effects__list input:checked').value;

sliderField.style.display = 'none';

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  }
});


sliderElement.noUiSlider.on('update', () => {
  valueElement.value = sliderElement.noUiSlider.get();
});

// в зависимости от выбранного фильтра обновляем настройки слайдера и класс
effectsList.addEventListener('change', (evt) => {
  imagePreview.classList.remove(`effects__preview--${currentEffect}`);
  currentEffect = evt.target.value;
  imagePreview.classList.add(`effects__preview--${currentEffect}`);

  if (filterNone.checked) {
    sliderField.style.display = 'none';
    imagePreview.style.filter = 'none';
    valueElement.value = '';
  }
  else if (filterChrome.checked) {
    sliderField.style.display = 'block';
    sliderElement.noUiSlider.on('update', () => {
      imagePreview.style.filter = `grayscale(${sliderElement.noUiSlider.get()})`;
    });
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1
    });
  }
  else if (filterSepia.checked) {
    sliderField.style.display = 'block';
    sliderElement.noUiSlider.on('update', () => {
      imagePreview.style.filter = `sepia(${sliderElement.noUiSlider.get()})`;
    });
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1
    });
  }

  else if (filterMarvin.checked) {
    sliderField.style.display = 'block';
    sliderElement.noUiSlider.on('update', () => {
      imagePreview.style.filter = `invert(${sliderElement.noUiSlider.get()}%)`;
    });
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100,
      },
      start: 100,
      step: 1
    });
  }

  else if (filterPhobos.checked) {
    sliderField.style.display = 'block';
    sliderElement.noUiSlider.on('update', () => {
      imagePreview.style.filter = `blur(${sliderElement.noUiSlider.get()}px)`;
    });
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.1
    });
  }

  else if (filterHeat.checked) {
    sliderField.style.display = 'block';
    sliderElement.noUiSlider.on('update', () => {
      imagePreview.style.filter = `brightness(${sliderElement.noUiSlider.get()})`;
    });
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 1,
        max: 3,
      },
      start: 3,
      step: 0.1
    });
  }
});
