import {
  getRandomArrayElement,
  getRandomPositiveInteger,
  createRandomIdFromRangeGenerator,
  createRandomUrlFromRangeGenerator,
  rangeLikes,
} from './util.js';


const PHOTOS_NUMBER = 25;
const AVATAR_NUMBER = 6;

const likes = {
  start: 15,
  end: 200,
};

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

const AVATAR = Array.from({length: AVATAR_NUMBER}, () => `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`);

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
  likes: getRandomArrayElement(rangeLikes(likes.start, likes.end)),
  comments: getRandomComment (),
});

const CreateCardCollection = () => Array.from({length: PHOTOS_NUMBER}, createCard);

export {CreateCardCollection};
