'use strict';

let input = 0;
let total = 0;

while (input !== null) {
    input = prompt('Введите число');
    total += Number(input);
}

alert(`Общая сумма чисел равна ${total}`);


