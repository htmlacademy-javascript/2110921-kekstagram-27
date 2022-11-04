
const LINK = 'https://27.javascript.pages.academy/kekstagram';

const getData = (onSuccess, onError) => {
  fetch(`${LINK}/data`)
    .then((response) => response.json())
    .then((cards) => {
      onSuccess(cards);
    })
    .catch(() => {
      onError();
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    LINK,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail('Не удалось отправить форму. Попробуйте ещё раз');
      }
    })
    .catch(() => {
      onFail('Не удалось отправить форму. Попробуйте ещё раз');
    });
};

export {getData, sendData};
