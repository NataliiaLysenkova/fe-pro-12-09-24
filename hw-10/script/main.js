// Домашня робота:
// 1. onclick
// Задача: Створіть кнопку та елемент Р з текстом,при кліку на кнопку текст змінює колір. Можете використати функцію яка генерує різний колір

// Функція для генерації випадкового RGB кольору
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// Отримання елементів
const textElements = document.querySelectorAll('.text');
const buttonElement = document.querySelector('.change-color-btn');

// Додавання обробника події для кнопки
buttonElement.onclick = function() {
    textElements.forEach(element => {
        element.style.color = getRandomColor(); // Зміна кольору тексту
    });
};


// 2. ondblclick
// Задача: Створіть елемент, який при подвійному кліку збільшує свій розмір в 2 рази ( змінюємо width i height).

// Отримання елемента
const boxElement = document.querySelector('.resizeable-box');

// Додавання обробника події для подвоєння розміру при подвійному кліку
boxElement.ondblclick = function() {
    // Отримання поточних розмірів
const currentWidth = parseFloat(getComputedStyle(boxElement).width);
const currentHeight = parseFloat(getComputedStyle(boxElement).height);

    
    // Зміна розміру в 2 рази
    boxElement.style.width = `${currentWidth * 2}px`;
    boxElement.style.height = `${currentHeight * 2}px`;
};


// 3. addEventListener і removeEventListener

// Створити кнопку і текстовий елемент в якому розмість лічільник: 0,при кліку на кнопку в текстовому значенні повино збільшуватись значення на 1. Коли значення лічильника перевищує 10, кнопка перестає реагувати на кліки.

// Отримання елементів
const countElement = document.getElementById('count');
const buttonEl = document.querySelector('.increment-btn');

// Початкове значення лічильника
let count = 0;

// Функція для збільшення лічильника
function incrementCounter() {
    count++; // Збільшуємо значення на 1
    countElement.textContent = count; // Оновлюємо текстовий елемент

    // Якщо лічильник перевищує 10, прибираємо обробник події
    if (count > 10) {
        buttonEl.removeEventListener('click', incrementCounter);
        buttonEl.disabled = true; // Додаємо також візуальну ознаку, що кнопка неактивна
    }
}

// Додаємо обробник події кліку
buttonEl.addEventListener('click', incrementCounter);

// 4. Створіть веб-сторінку з кнопкою та 10 елементами (наприклад, div). Підключіть обробник події onclick до кожного елементу. Коли користувач натисне на елемент,цей елемент має бути видалений зі сторінки

// Отримання елементів
const generateBtn = document.getElementById('generate-btn');
const container = document.querySelector('.generated-elements');

// Функція для створення 10 елементів
function generateElements() {
    // Очищуємо контейнер перед додаванням нових елементів
    container.innerHTML = '';
    
    // Створюємо 10 елементів div
    for (let i = 1; i <= 10; i++) {
        const div = document.createElement('div');
        div.classList.add('box');
        div.textContent = `Box ${i}`;
        
        // Додаємо обробник події для кожного div
        div.onclick = function() {
            container.removeChild(div); // Видаляємо div при кліку
        };
        
        // Додаємо div до контейнера
        container.appendChild(div);
    }
}

// Додаємо обробник події для кнопки
generateBtn.addEventListener('click', generateElements);

// 5.event.target   
// Створіть блок з классом blockContainer з 3 кнопками,  в кожної з яких унікальний клас button.first, button.second, button.third.
// Додайте обробник кліка на blockContainer і при кліку на кнопку виводьте alert в якому повідомляйте яка кнопка отримала клік

// Отримуємо елемент blockContainer
const blockContainer = document.querySelector('.blockContainer');

// Додаємо обробник події кліку на контейнер
blockContainer.addEventListener('click', function(event) {
    // Перевіряємо, чи клік був на елементі з класом button
    if (event.target.classList.contains('button')) {
        if (event.target.classList.contains('first')) {
            alert('Натиснуто на першу кнопку');
        } else if (event.target.classList.contains('second')) {
            alert('Натиснуто на другу кнопку');
        } else if (event.target.classList.contains('third')) {
            alert('Натиснуто на третю кнопку');
        }
    }
});


// 6. onclick + робота з css
// створіть кнопку та список з лінками.Кнопка має текст "Відкрити меню". І по кліку на кнопку відкриває меню яке заховане за допомгою css та змінює текст в середині на "Закрити меню"

// Отримуємо кнопку та меню
const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');

// Функція для перемикання відображення меню
function toggleMenu() {
    // Перевіряємо, чи меню приховане
    if (menu.style.display === 'none' || menu.style.display === '') {
        // Показуємо меню
        menu.style.display = 'block';
        // Змінюємо текст кнопки на "Закрити меню"
        menuButton.textContent = 'Закрити меню';
    } else {
        // Приховуємо меню
        menu.style.display = 'none';
        // Змінюємо текст кнопки на "Відкрити меню"
        menuButton.textContent = 'Відкрити меню';
    }
}


// Додаткова задача:
// зробіть на сторінці нетфлікс можливість при кліку на зірку встановити новий рейтинг. Клік по першій зірці рейтинг 1 клік по останній рейтинг 5 і всі 5 зірок жовті

//Вже виконане у попередньому дз 9
