const getData = (onSuccess, onError) => {
  fetch('https://27.javascript.pages.academy/kekstagram/data')
    .then((response) => response.json())
    .then((cards) => {
      onSuccess(cards);
    })
    .catch(() => {
      onError();
    });
};

export {getData};
