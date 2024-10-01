// push:
// Завдання 1: Створіть порожній масив та використайте метод push, щоб додати до нього кілька елементів (наприклад, чисел чи рядків).

let firstArray = [];
firstArray.push('Monday', 12, 'Sunday', 'Thursday', 14, 'Wednesday', 5, 17);
console.log(firstArray);

// Завдання 2: Створіть функцію, яка приймає масив і елемент, і використовує push для додавання цього елемента до масиву.

let lastElement = 'Friday';

function addElement(array, element) {
    array.push(element);
}
addElement(firstArray, lastElement);
console.log(firstArray);

// pop:
// Завдання 1: Створіть масив і використайте метод pop, щоб видалити останній елемент з масиву.
// Завдання 2: Напишіть функцію, яка приймає масив і використовує pop для видалення останнього елемента масиву.

let secondArray = ['red', 'yellow', 'orange', 'green', 'blue', 'purple'];
secondArray.pop();
console.log(secondArray);

function deleteLastElement(array) {
    array.pop();
}

deleteLastElement(secondArray);
console.log(secondArray);

// unshift:
// Завдання 1: Створіть масив і використайте метод unshift, щоб додати елементи в початок масиву.
// Завдання 2: Напишіть функцію, яка приймає масив і елемент, і використовує unshift для додавання цього елемента в початок масиву.

let cities = ['Kharkiv', 'Kyiv', 'Poltava', 'Trostianets','Sumy'];
cities.unshift('Odesa');
console.log(cities);

function addCities (array, ...elements) {
    array.unshift(...elements);
}

addCities(cities, 'Lviv', 'Dnipro', 'Uzhhorod');
console.log(cities);

// shift:
// Завдання 1: Створіть масив і використайте метод shift, щоб видалити перший елемент з масиву.
// Завдання 2: Напишіть функцію, яка приймає масив і використовує shift для видалення першого елемента масиву.

let tableware = ['plates', 'glasses', 'cups', 'spoons', 'forks', 'knives'];
tableware.shift();
console.log(tableware);

function deleteFirstElement(array) {
    array.shift();
}

deleteFirstElement(tableware);
console.log(tableware);

// fill:
// Завдання 1: Створіть масив певного розміру і використайте метод fill, щоб заповнити його певним значенням.
// Завдання 2: Напишіть функцію, яка приймає масив, значення та індекси, і використовує fill для заповнення масиву зазначеними значеннями на зазначених позиціях.

let chemicalElements = new Array(12);
chemicalElements.fill('chemical elements');
console.log(chemicalElements);

chemicalElements.fill('Lithium',2,3);
console.log(chemicalElements);

chemicalElements.fill('Carbon',5,6);
console.log(chemicalElements);

function fillArray(array,value,index1, index2) {
array.fill(value,index1,index2);
}

fillArray(chemicalElements,'Hydrogen',0,1);
fillArray(chemicalElements,'Helium',1,2);
fillArray(chemicalElements,'Oxygen',7,8);
console.log(chemicalElements);

// reverse:
// Завдання 1: Створіть масив і використайте метод reverse, щоб перевернути змінений порядок його елементів.
// Завдання 2: Напишіть функцію, яка приймає масив і використовує reverse для зміни порядку його елементів.

let reversedNumbers = [23, 56, 104, 17, 45, 228, 90];
reversedNumbers.reverse();
console.log(reversedNumbers);

function reversedArray(array) {
    array.reverse();
}

reversedArray(firstArray);
console.log(firstArray);

// Завдання з обєктами
// Створіть функцію, яка приймає число і повертає масив об'єктів. Кожен об'єкт має містити два поля: число і його квадрат. Масив повинен містити об'єкти для чисел від 1 до цьго чила . Наприклад
// [
//   { number: 1, square: 1 },
//   { number: 2, square: 4 },
//   { number: 3, square: 9 },
//   { number: 4, square: 16 },
//   { number: 5, square: 25 }
// ]

function createSquareArray(n) {
    let result = [];
    for (let i = 1; i <= n; i++) {
        result.push({ number: i, square: i * i });
    }
    return result;
}
console.log(createSquareArray(5));

// Створіть функцію, яка приймає два масиви: масив імен та масив віків. Функція повинна повернути масив об'єктів, де кожен об'єкт представляє користувача з ім'ям і віком.

let names = ['Оля', 'Іван', 'Марія'];
let ages = [25, 30, 22];

function createUsersArray(names, ages) {
    let newArray = [];
    let length = Math.min(names.length, ages.length); 
    for (let i = 0; i < length; i++) {
        newArray.push({ name: names[i], age: ages[i] });
    }
    
    return newArray;
}
console.log(createUsersArray(names, ages));

// Дано масив чисел видаліть найбільший елемент з масиву

let numbersArray = [12, 45, 177, 89, 93 ,5, 34, 6, 17,8, 145, 203, 14, 56, 11];
console.log(numbersArray);

function deleteMaxNumber (array) {
   let maxValue = Math.max(...array);
   console.log(maxValue);
   return array.filter((number) => number !== maxValue);
}
console.log(deleteMaxNumber(numbersArray));

// Напишіть функцію, яка приймає масив чисел, сортує його за спаданням, потім замінює перші три елементи масиву значенням 10

function changeNumbers(array) {
    let sortedArray = [...array].sort((a, b) => b - a);

    if (sortedArray.length > 3) {
        for (let index = 0; index < 3; index++) {
            sortedArray[index] = 10;
        }
    }
    return sortedArray;
}
console.log(changeNumbers(numbersArray));
