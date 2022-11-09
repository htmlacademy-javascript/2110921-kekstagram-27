import {setUserFormSubmit} from './validate-form.js';
import {closeUserModal} from './user-modal.js';
import './effect-image.js';
import {getData} from './api-server.js';
import {renderSimilarCards} from './photo.js';
import {showAlert} from './util.js';
import {changeFilter} from './sorting.js';


const onSuccessLoadData = (cards) => {
  renderSimilarCards(cards);
  changeFilter(cards);
};

const onErrorLoadData = () => {
  showAlert('Не удалось загрузить данные');
};

getData(onSuccessLoadData, onErrorLoadData);


setUserFormSubmit(closeUserModal);
