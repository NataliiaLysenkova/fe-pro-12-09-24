// 4) Створіть сторінку та підключіть до неї js
// 4.1) За допомогою js  створіть на сторінці елемент header  та задайте padding 50px та background-color жовтого кольору і властивість text-align center
// 4.2) const menuData = [
//     { name: 'Головна', url: '/' },
//     { name: 'Про нас', url: '/about' },
//     { name: 'Послуги', url: '/services' },
//     // Додайте ще пункти меню за потреби
// ];
// Створіть в хедері А теги з значенням з обєкта name  встановленим значенням в href з url.
// 4.3) Додайте тегам А що створені в header  атрибут target з властивістю _blank

const header = document.createElement('header');

header.style.padding = '50px';
header.style.backgroundColor = 'yellow';
header.style.textAlign = 'center';
header.textContent = 'Ласкаво просимо на наш сайт!';

const app = document.getElementById('app');
app.appendChild(header);

const menuData = [
    { name: 'Головна', url: '/' },
    { name: 'Про нас', url: '/about' },
    { name: 'Послуги', url: '/services' },
    { name: 'Контакти', url: '/contact' }
];

const nav = document.createElement('nav');
const ul = document.createElement('ul');
ul.style.listStyle = 'none';
ul.style.padding = '0';
ul.style.margin = '20px 0 0 0';
ul.style.display = 'flex';
ul.style.justifyContent = 'center';

const liStyle = `
    margin: 0 15px;
`;

const aStyle = `
    text-decoration: none;
    color: black;
    font-weight: bold;
`;

menuData.forEach(item => {
    const li = document.createElement('li');
    li.style.margin = '0 15px';

    const a = document.createElement('a');
    a.href = item.url;
    a.textContent = item.name;
    a.style.textDecoration = 'none';
    a.style.color = 'black';
    a.style.fontWeight = 'bold';
    a.target = '_blank';  

    li.appendChild(a);
    ul.appendChild(li);
});

nav.appendChild(ul);

header.appendChild(nav);


// 4.4)Створіть блок за допомогою js задайте блоку стиль display flex та в середині цього блоку створіть 50 div блоків з правилом border-radius, width 50px height 50px та background-color

// 4.5) доадайте всім стврореним 50 div елементам класс circle-elemt

// спробуйте зробити  завдання 4.5 так щоб в кожного div елемента був унікальний бекграунд

// Створюємо основний блок
const container = document.createElement('div');

// Задаємо стилі для блоку
container.style.display = 'flex';
container.style.flexWrap = 'wrap'; // Дозволяє обгортати елементи
container.style.justifyContent = 'center'; // Вирівнює елементи по центру
container.style.marginTop = '20px'; // Відступ зверху

// Додаємо блок до контейнера
app.appendChild(container);

// Створюємо 50 div блоків
for (let i = 0; i < 50; i++) {
    const circle = document.createElement('div');

    // Задаємо стилі для кожного div
    circle.style.width = '50px';
    circle.style.height = '50px';
    circle.style.borderRadius = '50%'; // Задаємо округлення
    circle.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`; // Випадковий колір
    circle.style.margin = '5px'; // Відступ між кругами

    // Додаємо клас до елемента
    circle.classList.add('circle-element');

    // Додаємо круг до контейнера
    container.appendChild(circle);
}
