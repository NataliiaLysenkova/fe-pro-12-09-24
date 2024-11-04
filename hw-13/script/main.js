// Домашня робота:
// 1 Знаходження всіх великих літер в тексті і збереження їх в масив

// let textStr = "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos itaque vero laborum fugit harum! Quia, cumque necessitatibus nemo veniam odit dolor impedit aspernatur, ipsa vitae minima quasi doloribus repellendus cupiditate!";

let textStr = "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos itaque vero laborum fugit harum! Quia, cumque necessitatibus nemo veniam odit dolor impedit aspernatur, ipsa vitae minima quasi doloribus repellendus cupiditate!";

// Знаходження всіх великих літер
let uppercaseLetters = textStr.match(/[A-Z]/g) || []; // Використовуємо || [] для обробки випадку, якщо немає великих літер

console.log(uppercaseLetters); 

// 2 Вибір числових значень з строки
// let operation = "5 плюс 7 = 3";

let operation = "5 плюс 7 = 3";

// Знаходження всіх числових значень
let numbers = operation.match(/\d+/g).map(Number); // Використовуємо .map(Number) для перетворення рядків в числа

console.log(numbers); 

// 3  Знаходження слів із певною кількістю символів:
// Напишіть регулярний вираз для знаходження слів у тексті, що складаються рівно з 5 букв, можна взяти текст з textStr з першого завдання

textStr = "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos itaque vero laborum fugit harum! Quia, cumque necessitatibus nemo veniam odit dolor impedit aspernatur, ipsa vitae minima quasi doloribus repellendus cupiditate!";

// Регулярний вираз для знаходження слів з 5 букв
let fiveLetterWords = textStr.match(/\b\w{5}\b/g) || []; // Використовуємо || [] для обробки випадку, якщо немає слів

console.log(fiveLetterWords);

// 4 Створіть веб-сторінку з текстовим полем і кнопкою. При натисканні на кнопку, збережіть введення користувача у sessionStorage. Додайте ще одну кнопку, яка при натисканні відображатиме збережені дані у веб-сторінці.

 // Зберігаємо введення користувача у sessionStorage
 document.getElementById('saveButton').addEventListener('click', function(e) {
    e.preventDefault();
    const userInput = document.getElementById('userInput').value;
    sessionStorage.setItem('userInput', userInput);
    document.getElementById('userInput').value = ''; // Очищення текстового поля
    alert('Дані збережено!');
});

// Відображаємо збережені дані на сторінці
document.getElementById('showButton').addEventListener('click', function(e) {
    e.preventDefault();
    const savedData = sessionStorage.getItem('userInput');
    document.getElementById('savedData').innerText = savedData ? savedData : 'Немає збережених даних';
});

// 5 Створіть форму з полями email та password  та кнопкою відправити. Та напишіть функції які перевіряють дані на валідність.  Пароль мінімум 8 символів і повинен містити цифрові значення та літери в верхньому регістрі.
// Якщо дані невалідні не заповненні відповідно то кнопка відправити має стан disabled

    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const submitButton = document.getElementById('submitButton');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    // Перевірка на валідність email
    function validateEmail() {
        const email = emailInput.value;
        const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        emailError.style.display = isValid ? 'none' : 'block';
        return isValid;
    }

    // Перевірка на валідність пароля
    function validatePassword() {
        const password = passwordInput.value;
        const isValid = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
        passwordError.style.display = isValid ? 'none' : 'block';
        return isValid;
    }

    // Вмикання або вимикання кнопки відправки
    function toggleSubmitButton() {
        submitButton.disabled = !(validateEmail() && validatePassword());
    }

    // Додавання подій для перевірки даних при введенні
    emailInput.addEventListener('input', toggleSubmitButton);
    passwordInput.addEventListener('input', toggleSubmitButton);

    // Зупиняємо відправку форми, якщо дані невалідні
    document.getElementById('registrationForm').addEventListener('submit', function(event) {
        if (!validateEmail() || !validatePassword()) {
            event.preventDefault(); // Зупиняє відправку форми, якщо дані не відповідають вимогам
        }
    });
 
// Додаткова робота:
// - Модифікуйте список задач щоб він  зберігав додані пункти в localstorage і при оновлені сторінки виводив список задач які були додані до цього. Також реалізуйте механізм видалення данних. Щоб дані в локалсторедж синхронізувались  з станом списку задач.

// Завдання виконане у папці to-do