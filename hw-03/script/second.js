// Додаткові задачі
// 1)Перевірка величини кута:
// Запитайте у користувача ввести величину кута в градусах.
// Виведіть у консоль повідомлення про те, чи є величина кута гострою чи тупою ( це більше і менеше 90 градусів відповідно), використовуючи тернарний оператор.

let angleValue = parseFloat(prompt(`Введіть величину кута в градусах: `));
console.log(
    angleValue > 90 && angleValue <= 360 ? `Величина кута є тупою, оскільки більше 90°` :
    angleValue < 90 && angleValue >= 0 ? `Величина кута є гострою, оскільки менше 90°` :
    angleValue === 90 ? `Величина кута є прямою, оскільки дорівнює 90°` :
    `Введено недійсне значення кута`
);

// 2)Знаходження першого парного числа:
// Напишіть програму, яка використовує цикл for для перебору чисел від 1 до 10 і виводить перше знайдене парне число. Використайте оператор break, щоб припинити виконання циклу, якщо парне число знайдено.

for (let index = 1; index <= 10; index++) {
    if (index % 2 === 0) {
        console.log(`Перше знайдене парне число: ${index}`);
        break;
    }
}

// 3) створити switch  в якому є назви планет сонячної системи. Якщо користувач вводить назву планети сонячної системи то виводити ця планета в сонячній системі. Якщо такої планети нема то виводити: такої планети нема в сонячній системі

let planets = prompt(`Введіть назву планети Сонячної Системи: `).toLowerCase();
switch(planets) {
    case 'меркурій':
        console.log(`${planets.charAt(0).toUpperCase() + planets.slice(1)} - це перша планета Сонячної Системи.`);
        break;
    case 'венера':
        console.log(`${planets.charAt(0).toUpperCase() + planets.slice(1)} - це друга планета Сонячної Системи.`);
        break;
    case 'земля':
        console.log(`${planets.charAt(0).toUpperCase() + planets.slice(1)} - це третя планета Сонячної Системи.`);
        break;
     case 'марс':
        console.log(`${planets.charAt(0).toUpperCase() + planets.slice(1)} - це четверта планета Сонячної Системи.`);
        break;
    case 'юпітер':
        console.log(`${planets.charAt(0).toUpperCase() + planets.slice(1)} - це п'ята планета Сонячної Системи.`);
        break;
    case 'сатурн':
        console.log(`${planets.charAt(0).toUpperCase() + planets.slice(1)} - це шоста планета Сонячної Системи.`);
        break;
    case 'уран':
        console.log(`${planets.charAt(0).toUpperCase() + planets.slice(1)} - це сьома планета Сонячної Системи.`);
        break;
    case 'нептун':
        console.log(`${planets.charAt(0).toUpperCase() + planets.slice(1)} - це восьма планета Сонячної Системи.`);
        break;
    default:
        console.log(`${planets.charAt(0).toUpperCase() + planets.slice(1)} такої планети немає в Сонячній Системі!`)
}
