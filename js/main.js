//Функция, возвращающая случайное целое число из переданного диапазона включительно
function getRandomNumber(min, max) {
  if (min < 0 || max < 0 || min > max) {
    return NaN;
  }
  return Math.random() * (max - min) + min;
}

//Функция для проверки максимальной длины строки
function checkLengthStr(str, maxLength) {
  return str.length <= maxLength;
}

getRandomNumber(10, 12);
checkLengthStr('Hello, world', 13);

