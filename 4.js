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

const numArray = ['единиц', 'десятков', 'сотен', 'тысяч', 'миллионов', 'миллиардов', ];
0 123 456 789
пиздец
бизнес
let myStringArray = [];

let shiftArray = (numArray.length - 3);
console.log(shiftArray);

// Число знаков, которые могут быть именованы
const maxSigns = (numArray.length - 3)*3 +3;

// let myVar = 1;

// let myIndex = 0;



const myNumber = parseInt(inputCycle("Введите число"));

// Количество знаков в число
const signsOfMyNumber = parseInt(Math.log10(myNumber))+1;

// У кого толще
const currentMax = Math.max(maxSigns, signsOfMyNumber);

// Копия числа, чтобы резать последний знак
let shiftNumber = myNumber;

for (let index = 0; index < currentMax; index++) {
    if (index < 3) {
        myStringArray[index] = shiftNumber % 10
    }
    
}


console.log(signsOfMyNumber);
console.log(myNumber);
console.log(myNumber[0]);
console.log(
    `В числе ${myNumber} количество сотен: ${
        myNumber[myNumber.length - 3]
    }, десятков: ${
        myNumber[myNumber.length - 2]
    }, единиц: ${
        myNumber[myNumber.length - 1]
    }`
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
