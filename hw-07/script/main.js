// Використовуючи for in  виведіть значення з обєктку в console.log
const person = {
    name: 'John',
    age: 25,
    occupation: 'Developer'
};

for (const keyName in person) {
    console.log(`key name ${keyName} key value ${person [keyName]}`);
    console.log(person.hasOwnProperty(keyName));
}

// Використовуючи for of  та for in  виведіть занчення з обєктів які знаходяться в масиві
const students = [
    { name: 'Alice', age: 20, grade: 'A' },
    { name: 'Bob', age: 22, grade: 'B' },
    { name: 'Charlie', age: 21, grade: 'C' }
];

for(let student of students) {
    console.log(`user's name: ${student.name} user's age: ${student.age} user's grade: ${student.grade}`);
}

for (let index in students ) {
    const student = students[index];
console.log(`user's name: ${student.name} user's age: ${student.age} user's grade: ${student.grade}`);
}

//  Написати гру "Камінь, ножниці, папір"  дані користувач отримує через prompt а результат гри виводити використовуючи alert (тут треба Math.random та if) 

function playGame() {
    const choices = ["камінь", "ножиці", "папір"];
    let userChoice;

    while (true) {
        userChoice = prompt("Виберіть: камінь, ножиці або папір");

        if (userChoice === null) {
            alert("Гра скасована. До зустрічі!");
            return;
        }

        userChoice = userChoice.toLowerCase();

        if (choices.includes(userChoice)) {
            break;
        }
        alert("Неправильний вибір! Спробуйте ще раз.");
    }

    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    
    let result;
    if (userChoice === computerChoice) {
        result = "Нічия!";
    } else if (
        (userChoice === "камінь" && computerChoice === "ножиці") ||
        (userChoice === "ножиці" && computerChoice === "папір") ||
        (userChoice === "папір" && computerChoice === "камінь")
    ) {
        result = "Ви виграли!";
    } else {
        result = "Комп'ютер виграв!";
    }
    alert(`Ваш вибір: ${userChoice}\nВибір комп'ютера: ${computerChoice}\n${result}`);
}
playGame();

// Завдання для Math.min та Math.max:
// Створіть функцію, яка приймає два числа як аргументи і повертає менше з них.
// Створіть функцію, яка приймає два числа як аргументи і повертає більше з них.

// function returnMin(num1, num2) {
//     return Math.min(num1, num2);
// }

const returnMin = (num1, num2) => Math.min(num1, num2);

console.log(`Повернення меншого числа: ${returnMin(45,2)}`);

// function returnMax(num1, num2) {
//     return Math.max(num1, num2);
// }

const returnMax = (num1, num2) => Math.max(num1, num2);

console.log(`Повернення більшого числа: ${returnMax(103,12)}`);

// Завдання для Math.pow:
// Створіть функцію, яка підносить число до заданого ступеня.
// Виведіть результат у консоль.

function toPower(number, power) {
    return Math.pow(number, power)
}

//const toPower = (number, power) => Math.pow(number, power);

console.log(`Піднесення числа до заданого ступеня: ${toPower(8,4)}`);

// Завдання для Math.floor та Math.ceil:
// Створіть функцію, яка приймає випадкове дробове число та використовує Math.floor для округлення вниз.
// Створіть функцію, яка приймає випадкове дробове число та використовує Math.ceil для округлення вгору.

function roundDown(number) {
    return Math.floor(number)
}

//const roundDown = number => Math.floor(number);

console.log(`Округлення дробового числа вниз: ${roundDown(3.67)}`);

function roundUp(number) {
    return Math.ceil(number)
}

//const roundUp = number => Math.ceil(number);

console.log(`Округлення дробового числа вгору: ${roundUp(3.67)}`);

// По классам
// 1 Створення класу та об'єкта:
// Створіть клас Person з властивостями name та age.
// Створіть об'єкт з цього класу з ім'ям "John" та віком 30.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

let john = new Person("John", 30);
console.log(john); 

// 2 Методи класу:
// Розширте клас Person, додайте метод sayHello, який виводить повідомлення з привітанням та ім'ям особи.

Person.prototype.sayHello = function () {
        console.log(`Hello ${this.name}`);
    }

john.sayHello();
// 3 Наслідування:
// Створіть клас Student, який наслідує від класу Person.
// Додайте властивість studentId до класу Student.
// Додайте метод study, який виводить повідомлення про вивчення студентом.

class Student extends Person {
    constructor(name, age, studentId, subject) {
        super(name, age);
        this.studentId = studentId;
        this.subject = subject;
    }
    study() {
        console.log(`${this.name} studies ${this.subject}`);
    }
}

let jackson = new Student("John Jackson", 30, 123, "Python");
console.log(jackson);
jackson.sayHello();
jackson.study();