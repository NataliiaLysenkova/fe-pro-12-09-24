// Домашня робота:
// Завдання 'onMouseOver' і 'onMouseOut': Створіть область на сторінці (наприклад, div), яка змінює свій фоновий колір, коли користувач наводить на неї курсор миші, та повертає початковий колір, коли курсор покидає цю область.

let colorfulDiv = document.querySelector('.colorful-div');

// функція для зміни кольору, вибирається випадковий колір
function changeColor(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

colorfulDiv.addEventListener('mouseover', function () {
    this.style.backgroundColor = changeColor(); // змінюємо фон
    this.style.color = changeColor();           // змінюємо колір тексту
});

colorfulDiv.addEventListener('mouseout', function () {
    this.style.backgroundColor = "rgb(123, 16, 46)"; // повертаємо початковий колір фону
    this.style.color = "rgb(255, 255, 255)";         // повертаємо початковий колір тексту
});

// Завдання 'onContextMenu': 
// Створіть елемент текстовий блок, на який при правому кліку миші замість звичайного контекстного меню браузера з'являється власне створене контекстне меню. Це меню може містити опції, як-от "вирівняти по центру", "вирівняти по правому центру", "вирівняти по лівому краю", "Приховати елемент". Складніший варіант зробити щоб при кліку на меню текст в блоці вирівнювався

let textBlock = document.querySelector('.text-block');
let customMenu = document.querySelector('.custom-menu');

// Функція для закриття меню
function hideCustomMenu() {
    customMenu.style.display = 'none';
}

// Відкриваємо власне контекстне меню при правому кліку
textBlock.addEventListener('contextmenu', function (e) {
    e.preventDefault();

    customMenu.style.display = 'block';
    customMenu.style.left = `${e.pageX}px`;
    customMenu.style.top = `${e.pageY}px`;
});

// Додаємо слухач події на документ для закриття меню при кліку поза ним
document.addEventListener('click', function (e) {
    // Якщо клік не по меню або не по опціях меню, закриваємо меню
    if (!customMenu.contains(e.target)) {
        hideCustomMenu();
    }
});

// Дії для кожної опції меню
document.querySelector('.option.first').addEventListener('click', function () {
    textBlock.style.textAlign = 'center';
    hideCustomMenu(); // Ховаємо меню після вибору опції
});

document.querySelector('.option.second').addEventListener('click', function () {
    textBlock.style.textAlign = 'right';
    hideCustomMenu(); // Ховаємо меню після вибору опції
});

document.querySelector('.option.third').addEventListener('click', function () {
    textBlock.style.textAlign = 'left';
    hideCustomMenu(); // Ховаємо меню після вибору опції
});

document.querySelector('.option.fourth').addEventListener('click', function () {
    textBlock.style.display = 'none';
    hideCustomMenu(); // Ховаємо меню після вибору опції
});

// Завдання 'keyup': Створіть ігрове поле, де користувач може переміщати об'єкт (наприклад, квадрат або коло) за допомогою клавіш стрілок. Рух об'єкта повинен зупинятися, коли клавіша відпущена

// Виконане завдання у папці game

// Завдання з інпутами
// Конвертер валют
// Мета: Створити простий конвертер валют, який перетворює введені користувачем гроші з однієї валюти в іншу.

// Інструкції:
// Створіть два поля введення: одне для суми, друге для курсу обміну.
// Додайте кнопку, яка виконає конвертацію при її натисканні.
// При натисканні кнопки, зчитайте значення з обох полів і виконайте конвертацію.
// Виведіть результат конвертації на сторінку.

// Виконане завдання у папці currency

// Динамічний список задач
// Мета: Створити додаток для управління списком задач, де користувач може додавати та видаляти задачі.

// Інструкції:
// Створіть поле введення для введення назви задачі.
// Додайте кнопку для додавання задачі до списку.
// Кожна додана задача повинна з'являтися на сторінці у вигляді списку.
// Додайте можливість видалення задачі зі списку.

// Виконане завдання у папці to-do

// Додаткове Завдання 
// 'onMouseDown' і 'onMouseUp': Реалізуйте просту гру "Перетягування": створіть об'єкт, який можна перетягувати в межах певної області, використовуючи події натискання та відпускання кнопки миші.

// Виконане завдання у папці mouse_events