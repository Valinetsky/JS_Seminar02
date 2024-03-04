"use strict";

/*
Необязательное задание.
Если вам показалось домашнее задание простым, выполняем данный пункт.

Необходимо от пользователя получить целое число.
Необходимо вывести разряды числа, а именно: количество сотен, десятков и единиц.

Пример:
Пользователь ввел число 163. Программа должна вывести:
"В числе 163 количество сотен: 1, десятков: 6, единиц: 3"

Пример 2:
Пользователь ввел число 74. Программа должна вывести:
"В числе 74 количество сотен: 0, десятков: 7, единиц: 4"

Пример 3:
Пользователь ввел число 9537. Программа должна вывести:
"В числе 9537 количество сотен: 5, десятков: 3, единиц: 7"

Уточнение: Пользователь всегда вводит корректное положительное целое число.
Подсказка: Возможно, вам понадобится округление чисел и оператор %.
*/

const myNumber = parseInt(inputCycle("Введите число"));

// Способ деления и остатка
// const Sigh_1 = myNumber % 10;
// const Sigh_10 =
//     (myNumber / 10) % 10 === undefined ? 0 : parseInt(myNumber / 10) % 10;
// const Sigh_100 =
//     (myNumber / 100) % 10 === undefined ? 0 : parseInt(myNumber / 100) % 10;

// console.log(
//     `В числе ${myNumber} количество сотен: ${Sigh_100}, десятков: ${Sigh_10}, единиц: ${Sigh_1}`
// );

// Способ добавки нулей
const myNumberReverse = String(myNumber + 1000)
    .slice(-3)
    .split("")
    .reverse();

console.log(
    `В числе ${myNumber} количество сотен: ${myNumberReverse.pop()}, десятков: ${myNumberReverse.pop()}, единиц: ${myNumberReverse.pop()}`
);

function inputNumber(text) {
    return prompt(text, "").replace(",", ".");
}

function inputCycle(text) {
    while (true) {
        let num = inputNumber(text);
        if (!isNaN(num)) {
            // …превратить в числа.
            return +num;
        }
        console.log("Введено не число. Попробуйте еще раз.");
    }
}
