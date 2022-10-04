//Функция, возвращающая случайное целое число из переданного диапазона включительно
const randomNumber = (min, max) => {
  if (min < 0 || max < 0 || min > max) {
    return NaN;
  }
  return Math.random() * (max - min) + min;
};

//Функция для проверки максимальной длины строки
const checkerLengthStr = (str, maxLength) => str.length <= maxLength;

randomNumber(10, 12);
checkerLengthStr('Hello, world', 13);
