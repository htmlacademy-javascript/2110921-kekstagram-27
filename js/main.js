const PHOTOS_NUMBER = 25;
const AVATAR_NUMBER = 6;

const PHOTO_ID = Array.from({length: PHOTOS_NUMBER}, (_, i) => i + 1);
const URL_PHOTO = Array.from({length: PHOTOS_NUMBER}, (_, i) => `photos/${i + 1}.jpg`);


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

function getId (number) {
  return Array (number).fill (0).map((_, i) => i + 1);
}

const COMMENT_ID = getId(200);

const getRandomComment = () => ({
  id: getRandomArrayElement(COMMENT_ID),
  avatar: getRandomArrayElement(AVATAR),
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES)
});

const createCard = (i) => ({
  id: PHOTO_ID[i],
  url: URL_PHOTO[i],
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomPositiveInteger(15,200),
  comments: getRandomComment ()
});

const photoCollection = Array.from({length: PHOTOS_NUMBER}, (_, i) => createCard(i)
);
console.log(photoCollection);

//Функция для проверки максимальной длины строки
const checkerLengthStr = (str, maxLength) => str.length <= maxLength;

checkerLengthStr('Hello, world', 13);
