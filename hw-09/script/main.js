// Домашня робота:

//     <table>
//         <thead>
//             <tr>
//                 <th>
//                     title
//                 </th>
//                 <th>
//                     year
//                 </th>   
//                 <th>
//                     rating
//                 </th>                   
//             </tr>
//         </thead>

//     </table>
// 2) пройдіть по масиву і зробіть заповнення таблиці даними з масива
// const booksArray = [
//     {
//         title: 'Пригоди Аліси в Країні Див',
//         year: 1865,
//         rating: 4.5
//     },
//     {
//         title: '1984',
//         year: 1949,
//         rating: 4.8
//     },
//     {
//         title: 'Гаррі Поттер і філософський камінь',
//         year: 1997,
//         rating: 4.7
//     }
// ];

        const booksArray = [
            { title: 'Пригоди Аліси в Країні Див', year: 1865, rating: 4.5 },
            { title: '1984', year: 1949, rating: 4.8 },
            { title: 'Гаррі Поттер і філософський камінь', year: 1997, rating: 4.7 }
        ];

        const tableBody = document.querySelector("#booksTable tbody");

        booksArray.forEach(book => {
            // Створюємо новий рядок
            const row = document.createElement("tr");

            // Створюємо та додаємо клітинки з даними
            Object.values(book).forEach(value => {
                const cell = document.createElement("td");
                cell.textContent = value;
                row.appendChild(cell);
            });

            // Додаємо новий рядок до тіла таблиці
            tableBody.appendChild(row);
        });
   

//  3)   Створіть HTML-сторінку з контейнером, в який будуть додаватися елементи за допомогою JavaScript.
//     const elementsArray = [
//     { tag: 'p', text: 'Елемент 1' },
//     { tag: 'div', text: 'Елемент 2' },
//     { tag: 'span', text: 'Елемент 3' }
// ];
// Створіть функцію, яка приймає об'єкт і створює новий елемент з використанням document.createElement, встановлює текст елемента та повертає його в контейнер.
// Пройдіть циклом по масив і для кожного обєкту застосуйте створену функцію

const elementsArray = [
    { tag: 'p', text: 'Елемент 1: Це абзац тексту.' },
    { tag: 'div', text: 'Елемент 2: Це div контейнер.' },
    { tag: 'span', text: 'Елемент 3: Це span текст.' }
];

/**
 * Функція для створення та додавання елемента до контейнера.
 * @param {Object} elementObj - Об'єкт, що містить теги та текст.
 */
function createAndAppendElement(elementObj) {
    // Створюємо новий елемент за вказаним тегом
    const newElement = document.createElement(elementObj.tag);
    
    // Встановлюємо текстовий вміст елемента
    newElement.textContent = elementObj.text;
    
    // Додаємо новий елемент до контейнера
    const container = document.getElementById('container');
    container.appendChild(newElement);
}

// Проходимося по масиву та додаємо кожен елемент до контейнера
elementsArray.forEach(element => {
    createAndAppendElement(element);
});


// Додаткове завдання:

// - Виведіть на сторінці нетфікс рейтинг за допомогою js


// - Виведіть жанри за допомогою js

// Масив жанрів
const genres = ["Drama", "Thriller", "Supernatural"];

// Знайти елемент h3, в якому будемо виводити жанри
const genresContainer = document.getElementById('genres');

// Створити HTML для жанрів
const genresHTML = genres.map((genre, index) => {
    // Якщо це не останній жанр, додаємо після нього "|"
    return `<a href="#">${genre}${index < genres.length - 1 ? ' <span>|</span>' : ''}</a>`;
}).join('');

// Вставити жанри в контейнер
genresContainer.innerHTML = genresHTML;

// Другий варіант
// Масив жанрів
// const genres = ["Drama", "Thriller", "Supernatural"];

// // Знайти елемент h3, в якому будемо виводити жанри
// const genresContainer = document.getElementById('genres');

// // Динамічне створення елементів
// genres.forEach((genre, index) => {
//     // Створюємо елемент <a>
//     const genreLink = document.createElement('a');
//     genreLink.href = "#";
//     genreLink.textContent = genre;

//     // Додаємо посилання до контейнера h3
//     genresContainer.appendChild(genreLink);

//     // Якщо це не останній жанр, додаємо <span>|</span>
//     if (index < genres.length - 1) {
//         const separator = document.createElement('span');
//         separator.textContent = "|";
//         genresContainer.appendChild(separator);
//     }
// });

// Для простих задач та швидкого прототипування => innerHTML.
// Для більш складних або безпечних рішень => динамічне створення елементів через createElement та appendChild.

// - Спробуйте створити картинки слайдера та створити їх за допмогою js