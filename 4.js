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

// Массив списка назвавний чисел (трипплетов)
const numArray = [
    "единиц",
    // "десятков",
    // "сотен",
    // "тысяч",
    // "миллионов",
    // "миллиардов",
    // "триллионов",
];

const FIRSTSIGNS = 3;

let firstArrayLenght =
    numArray.length >= FIRSTSIGNS ? FIRSTSIGNS : numArray.length;

const firstSignsArray = numArray.slice(0, firstArrayLenght);

const namedBigSigns = numArray.slice(firstArrayLenght, numArray.length);

let myStringArray = [];

// Число знаков, которые могут быть именованы из массива numArray
const maxSigns = namedBigSigns.length * 3 + firstSignsArray.length;

const splitter = ": ";

const myNumber = parseInt(inputCycle("Введите число"));

// Следующая строка — для проверки больших чисел
// const myNumber = 1_234_567_890_123;

// Количество знаков в числе
const signsOfMyNumber = parseInt(Math.log10(myNumber)) + 1;

// У кого толще
const currentMax = Math.min(maxSigns, signsOfMyNumber);

// Копия числа, чтобы резать последний знак
let shiftNumber = myNumber;

// Его же копия — в строку
let stringShiftNumber = String(shiftNumber);

let counter = 0;
let flag = 0;

for (let index = 0; index < currentMax; index++) {
    console.log(myNumber);
    if (myNumber <= 0) {
        console.log("Число меньше или равно 0");
        flag = 1;
        break;
    }
    if (index < 3) {
        myStringArray[index] =
            numArray[index] +
            splitter +
            stringShiftNumber[stringShiftNumber.length - index - 1];
    }
    if (index >= 3) {
        const myTripplet = index % FIRSTSIGNS;
        let smallSign = firstSignsArray[myTripplet] + " ";
        if (myTripplet === 0) {
            smallSign = "";
            counter++;
        }

        myStringArray[index] =
            smallSign +
            namedBigSigns[counter - 1] +
            splitter +
            stringShiftNumber[stringShiftNumber.length - index - 1];
    }
}

// Вывод программы
if (!flag) {
    console.log(
        `В числе ${myNumber} количество ${myStringArray.reverse().join(", ")}`
    );
}

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
