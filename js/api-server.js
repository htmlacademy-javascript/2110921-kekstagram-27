import {renderSimilarCards} from './photo.js';

fetch('https://27.javascript.pages.academy/kekstagram/data')
  .then((response) => response.json())
  .then((cards) => {
    renderSimilarCards(cards);
  });
