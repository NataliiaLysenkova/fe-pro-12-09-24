// Домашня робота:
// Створіть функцію welcomeUser, яка приймає масив і функцію-колбек hiUser яка виводить в console ('Вітаю ${user}'), і викликає цю функцію для кожного елемента масиву.

let users = ['Tom', 'Bob', 'Rob', 'Nick', 'Diana', 'Helena', 'Elsa', 'Mary'];
console.log(`Users length: ${users.length}`);

function hiUser(user) {
    console.log(`Вітаю ${user}!`);
}

function welcomeUsers(data, callback) {
    for (let index = 0; index < data.length; index++) {
        callback(data[index]);
    }
}

if (users.length > 0) {
    welcomeUsers(users, hiUser);
} else {
    console.log(`No users in array`);
}

// Параметри за замовчуванням:
// Створіть функцію, яка приймає параметр зі значенням за замовчуванням і виводить його.

function multiplyNumbers(param1 = 1, param2 = 1) {
    let multiplyNum = param1 * param2; 
    console.log(`Результат множення: ${multiplyNum}`);
    return multiplyNum;
}

// Перепишіть стрілкову функцію в звичайну 
// const multiplyValues = (a, b, c) => a * b * c;

// перший варіант
// const multiplyValues = function(a, b, c) {
//     return a * b * c;
// } 

//другий варіант
function multiplyValues(a, b, c) {
    let multiplyOperation = a * b * c;
    console.log(`Результат множення: ${multiplyOperation}`);
    return multiplyOperation;
}

//Створити пустий массив і заповнити його всіма парними занченнями від 0 до 8

let myArr = [];

for (let index = 0; index <= 8; index++) {
    if (index % 2 === 0) {
        myArr.push(index);
    }
}
console.log(myArr);

// Створити цикл який виводить значення з масивві  в консоль в такому 
// форматі "Сьогодні ....  у вас такі плани .." 
let days = ["Понеділок", "Середа", "Неділя"];
let plans = ["Урок 03", "Урок 04", "Вихідний"];

for (let index = 0; index < days.length; index++) {
    console.log(`Сьогодні ${days[index]} у вас такі плани: ${plans[index]}.`);
}

// Написати цикл який замінює відємне значення в масиві на 0  
let checkArr = [69, 96, -66, 77, 85, -85, 14, -20, 90, -36];

for (let index = 0; index < checkArr.length; index++) {
    if (checkArr[index] < 0) {
        checkArr[index] = 0;
    }
}
console.log(checkArr);

// Додаткове завадання:
// Напишіть функцію summArray яка приймає масив чисел і повертає їхню суму

function summArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
let arrayOfNumbers = [1, 2, 3, 4, 5];
let sum = summArray(arrayOfNumbers);
console.log(sum);

// Дано масив чисел [1,2,3,4 ]Створіть функцію squareArray яка приймає масив і повертає новий масив, де кожен елемент є квадратом відповідного елемента початкового масиву. 

function squareArray(numbers) {
    let squaredArray = [];
    for (let i = 0; i < numbers.length; i++) {
        squaredArray.push(numbers[i] ** 2);
    }
    return squaredArray;
}

let newArray = [1, 2, 3, 4];
let squared = squareArray(newArray);
console.log(squared);
