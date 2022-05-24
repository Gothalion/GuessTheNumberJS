'use strict';
// Дописать функционал игрового бота.
// Кол-во попыток пользователя должно быть ограничено: 10
// — если пользовательское число больше, то бот выводит
//  "Загаданное число меньше, осталось попыток ..." и предлагает ввести новый вариант;
// — если пользовательское число меньше, то бот выводит "Загаданное число больше, осталось попыток ..." и предлагает
//  ввести новый вариант;
// — если пользователь вводит правильное число, то бот выводит "Поздравляю, Вы угадали!!! Хотели бы сыграть еще?",
// при нажатии ОК игра перезапускается (
// снова 10 попыток и
// новое загаданное число)
// — если пользователь ввел не число, то выводит сообщение "Введи число!" и предлагает ввести новый вариант;
// — если пользователь нажимает "Отмена", то игра выводит прощальное сообщение и завершается.
// — если закончились попытки то программа сообщает: "Попытки закончились, хотите сыграть еще?"
// Программа должны быть выполнена с помощью рекурсии, без единого цикла.
// Загаданное число и оставшиеся кол-во попыток должно храниться «в замыкании»

const isNumber = function (value) {
  return !isNaN(parseFloat(value) && isFinite(value));
}; // Проверка на число

const getNumber = function () {
  let n = Math.floor(Math.random() * 100 + 1);
  let i = 10;

  let testNumber = function () {
    let userNumber = prompt(
      'Угадай число от 1 до 100. У тебя осталось ' + i + ' попыток.'
    );
    i--;

    if (i === 0) {
      let end = confirm('Попытки закончились. Хотите сыграть еще?');
      if (end) {
        getNumber();
      }
    } else if (userNumber === null) {
      alert('Игра окончена');
    } else if (!isNumber(userNumber)) {
      alert('Введи число');
      i++;
      testNumber();
    } else if (userNumber > n) {
      alert('Загаданное число меньше');
      testNumber();
    } else if (userNumber < n) {
      alert('Загаданное число больше');
      testNumber();
    } else if (userNumber === n) {
      let correctAnswer = confirm(
        'Поздравляю, Вы угадали! Хотели бы сыграть еще?'
      );
      if (correctAnswer) {
        getNumber();
      }
    }
  };

  testNumber();
};
getNumber();
