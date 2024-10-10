// Домашня робота
// Тема: Spread
// Напишіть функцію, яка об'єднує два масиви в один, використовуючи оператор Spread, і виводить новий масив.

function joinArrays(arr1, arr2) {
     let joinedArray = [...arr1, ...arr2];
     return joinedArray;
}
console.log(joinArrays([1,2,3,4], [5,6,7,8,9]));

// Тема: Rest
// Створіть функцію, яка приймає перший аргумент як рядок, а решту аргументів зберігає в масиві за допомогою оператора Rest. Функція повинна вивести рядок і масив.

function stringAndArray(string, ...args) {
    return console.log(string, args);
}

let newString = "I am a new string";
let newArray = ["I", "am", "a", "new", "array"];
console.log(stringAndArray(newString, ...newArray)); 
console.log(newArray.toString()); //Вивід масиву в рядок з комами
console.log(newArray.join(' ')); //Вивід масиву в рядок з з роздільним знаком (пробіл)

// Напишіть функцію, яка приймає будь-яку кількість числових аргументів та обчислює їх середнє значення за допомогою оператора Rest.

function calculateAverage(...numbers) {
    if (numbers.length === 0) return 0;

    const sum = numbers.reduce((accumulator, current) => accumulator + current, 0); 
    return parseFloat((sum / numbers.length).toFixed(2)); // Форматуємо до 2 знаків після коми і перетворюємо назад в число
}

console.log(calculateAverage(67, 15, 48)); // Виведе: 43.33
console.log(calculateAverage(106, 14, 97, 35)); // Виведе: 63.00
console.log(calculateAverage()); // Виведе: 0

// Тема: TypeOf
// Створіть функцію, яка приймає аргумент будь-якого типу та виводить повідомлення про його тип за допомогою оператора typeof.

function getAnyArg(param) {
    return typeof(param);
}
console.log(getAnyArg(1));
console.log(getAnyArg('new value'));
console.log(getAnyArg(null));

let simpleArr = [12, 'word', false];
console.log(getAnyArg(simpleArr));

let simpleObj = {
    number: 143,
    value: true
}
console.log(getAnyArg(simpleObj));

const fnValue = () => 'hello';
console.log(getAnyArg(fnValue));
console.log(getAnyArg(undefined));
console.log(getAnyArg(true));
console.log(getAnyArg(Symbol('sym')));
console.log(getAnyArg( 1234567890123456789012345678901234567890n));

// Напишіть функцію, яка перевіряє тип змінної та виводить повідомлення "Це число", "Це рядок" або "Це інший тип", використовуючи оператор typeof.

// function checkType(param) {
//     if (typeof param === 'number') {
//         console.log("Це число");
//     } else if (typeof param === 'string') {
//         console.log("Це рядок");
//     } else {
//         console.log("Це інший тип");
//     }
// }

function checkType(param) {
    const message = typeof param === 'number' ? "Це число" :
                    typeof param === 'string' ? "Це рядок" :
                    "Це інший тип";
    
    console.log(message);
}

checkType(100); 
checkType("тисяча"); 
checkType(true); 


// Створіть функцію, яка повертає рік народження користувача коли користувач вводить свій вік
// Виведіть результат у консоль.

function getYearOfBirth(age) {
    let nowDate = new Date(); 
    let currentYear = nowDate.getFullYear(); 
    return currentYear - age; 
}

console.log(`Ваш рік народження: ${getYearOfBirth(35)}`); 

// Завдання для Date.toLocaleString:

// Створіть об'єкт Date для поточної дати та часу.
// Використайте метод toLocaleString(), щоб отримати поточну дату та час у зручному для читання форматі.
// Виведіть результат у консоль.

let currentDate = new Date();

// Метод toLocaleString() повертає рядок, що представляє дату та час у зручному для читання форматі відповідно до локалі системи. Це відображення може залежати від налаштувань мови та регіону.
console.log(currentDate.toLocaleString());

// Виводимо різну інформацію про дату та час
console.log(`Day info: ${currentDate.getDate()}`); // Виводить день місяця (1-31)
console.log(`Day number info: ${currentDate.getDay()}`); // Виводить номер дня тижня (0-6, де 0 - неділя)
console.log(`Month number info: ${currentDate.getMonth()}`); // Виводить номер місяця (0-11, де 0 - січень)
console.log(`Hours info: ${currentDate.getHours()}`); // Виводить години (0-23)
console.log(`Minutes info: ${currentDate.getMinutes()}`); // Виводить хвилини (0-59)
console.log(`Seconds info: ${currentDate.getSeconds()}`); // Виводить секунди (0-59)

// Різні формати часу
console.log(`Format time (JSON): ${currentDate.toJSON()}`); // Формат JSON
console.log(`Format time (DateString): ${currentDate.toDateString()}`); // Лише дата
console.log(`Format time (UTCString): ${currentDate.toUTCString()}`); // Час в UTC


// Завдання для String.split та toUpperCase:

// Створіть рядок, який містить слова, розділені пробілами.
// Використайте метод split, щоб розбити рядок на масив слів.
// Виведіть отриманий масив у консоль у верхньому регістрі.

let dayOfToday = "Today is a great sunny wonderful day!";
console.log(`String: ${dayOfToday}`);

let dayArray = dayOfToday.split(' ');
console.log(`Array: ${dayArray.map(word => word.toUpperCase()).join(' ')}`);


// і ще таких легких по document
// Створіть HTML-сторінку з елементами header, section,  div, задайте елементам атрибути id, сlass.

// Виберіть ці елементи за допомогою 
// getElementById
// getElementsByClassName
// getElementsByTagName

//let queryId = document.querySelector('#unique-div');
//console.log(queryId);

let idDiv = document.getElementById('unique-div');
console.log(idDiv);

let className = document.getElementsByClassName('section-1');
console.log(className);

let tagName = document.getElementsByTagName('header');
console.log(tagName);


// створіть список ul з 5 елементами li всередині.
// За допомогою querySelector виберіть:
// - перший елемент списку
// - останній елемент списку
// - 3 елемент списку
// За допомогою querySelectorAll
// - всі елементи li в списку
// - конвертуйте вибрані елменти в массив

    let firstElement = document.querySelector('ul li:first-child');
    console.log('Перший елемент списку:', firstElement);

    let thirdElement = document.querySelector('ul li:nth-child(3)');
    console.log('Третій елемент списку:', thirdElement);

    let lastElement = document.querySelector('ul li:last-child');
    console.log('Останній елемент списку:', lastElement);

    let listElements = document.querySelectorAll('ul li');  //document.querySelectorAll        повертає  NodeList, яка не є справжнім масивом
    let listElementsArr = Array.from(listElements);
    // Array.from(listElements) створює новий масив, копіюючи елементи з NodeList
    console.log(listElementsArr);

    console.log(`=============================`);

    let [...elements] = document.querySelectorAll('ul li');
    //Деструктуризація з використанням ...: Цей синтаксис використовується для розгортання елементів NodeList в новий масив.
    console.log(elements);
    // У цьому випадку всі елементи NodeList зберігаються в масиві elements безпосередньо

    // Різниця в результаті
// У першому прикладі ви отримуєте два окремі об'єкти: NodeList (listElements) і масив (listElementsArr).
// У другому прикладі ви отримуєте масив безпосередньо в змінній elements.

console.log(`=============================`);
// Створіть на сторінці елемент який вибирається ціми селекторами
// // let listItems = document.querySelectorAll('ul.nav > li');
// // let listItem = document.querySelectorAll('li:nth-child(2)');

let listItems = document.querySelectorAll('ul.nav > li');
console.log('Вибір усіх елементів <li> в <ul> з класом nav:', listItems);

let listItem = document.querySelectorAll('li:nth-child(2)');
console.log('Другий елемент списку:', listItem);
