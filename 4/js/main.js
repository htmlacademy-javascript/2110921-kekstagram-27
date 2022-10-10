const PHOTOS_NUMBER = 25;
const AVATAR_NUMBER = 6;

const NAMES = [
  'Иван',
  'Мария',
  'Денис',
  'Павел',
  'Виктор',
  'Юлия',
  'Марина',
  'Василий',
];

const DESCRIPTIONS = [
  'Осень',
  'Утро',
  'Лето',
  'Погода за окном',
  'Чудесный день!',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const likes = (start = 15, end = 200) => Array(end - start + 1).fill().map((_, idx) => start + idx);

const getRandomPositiveInteger = (a, b) => {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};


const AVATAR = Array.from({length: AVATAR_NUMBER}, () => `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`);

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const createRandomIdFromRangeGenerator = (min, max) => {
  const previousValues = [];

  return function () {
    let currentValue = getRandomPositiveInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomPositiveInteger(min, max);
    }

    previousValues.push(currentValue);
    return currentValue;
  };
};

const createRandomUrlFromRangeGenerator = (min, max) => {
  const previousValues = [];

  return function () {
    let currentValue = getRandomPositiveInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomPositiveInteger(min, max);
    }

    previousValues.push(currentValue);
    return `photos/${currentValue}.jpg`;
  };
};

const getPhotoId = createRandomIdFromRangeGenerator(1, 25);
const getCommentId = createRandomIdFromRangeGenerator(1, 200);
const getUrl = createRandomUrlFromRangeGenerator(1, 25);

const getRandomComment = () => ({
  id: getCommentId(),
  avatar: getRandomArrayElement(AVATAR),
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES)
});

const createCard = () => ({
  id: getPhotoId(),
  url: getUrl(),
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomArrayElement(likes()),
  comments: getRandomComment ()
});

const photoCollection = Array.from({length: PHOTOS_NUMBER}, createCard);
photoCollection();

//Функция для проверки максимальной длины строки
const checkerLengthStr = (str, maxLength) => str.length <= maxLength;

checkerLengthStr('Hello, world', 13);
