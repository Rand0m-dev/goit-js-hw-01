'use strict';

const credits = 23580;
const pricePerDroid = 3000;
let totalPrice, message, value;

value = prompt('Какое кол-во дроидов вы хотите купить?');
totalPrice = pricePerDroid * value;

if (value === null) {
    message = 'Отменено пользователем!';
} else if (credits < totalPrice) {
    message = 'Недостаточно средств на счету!';
} else {
    message = `Вы купили ${value} дроидов, на счету осталось ${credits - totalPrice} кредитов.`;
}

alert(message);
