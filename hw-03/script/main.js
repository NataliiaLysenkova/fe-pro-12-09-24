// 1)Використовуючи prompt, запросіть у користувача введення числа.
// Перевірте, чи введене число парне чи непарне.
// Виведіть результат з використанням console.log.

let numbers = +prompt(`Enter your number: `);
if (numbers%2 === 0) {
    console.log(`It is an even number`);
}
else {
console.log(`It is an odd number`);
}
console.log(numbers % 2 === 0 ? `It is an even number` : `It is an odd number`);  // 2 variant

// 2)Використовуючи prompt, запитайте у користувача його вік.
// Перевірте, чи вік менше 18 років.
// Виведіть відповідне повідомлення про те, чи може користувач використовувати певний ресурс.

let age = +prompt(`Enter your age: `);
if (age<18) {
    console.log(`Sorry, you can not use our service!`);
}
else {
    console.log(`You are welcome!`);
}
console.log(age<18 ? `Sorry, you can not use our service!` : `You are welcome!`);  // 2 variant

// 3) Розрахунок повної  вартості товарів :
// Створіть змінну ціна та кількість товару і присвойте їм значення використовуючи prompt .
// Використовуйте математичні операції для обчислення вартості товару (ціна * кількість).
// Виведіть результат за допомогою console.log.

let productsPrice = Number(prompt(`Enter product's price: `)); //parseFloat
let productsQuantity = Number(prompt(`Enter amount of product: `)); //parseInt
console.log(`${productsQuantity} items of product at a price of ${productsPrice} per item cost ${productsPrice*productsQuantity} in total`);

// 4) Розрахунок знижки на товар :
// Використовуючи prompt, запросіть в користувача вартість товару.
// Розрахуйте знижку на товар у розмірі 50% від введеної вартості.
// Виведіть результат знижки за допомогою alert.

let goodsPrice = Number(prompt(`Enter goods' price: `));
if (!isNaN(goodsPrice) && goodsPrice >= 0) {
    let discount = goodsPrice * 0.50; 
    alert(`Your discount is $${discount.toFixed(2)}`); 
} else {
    alert("Please enter a valid price.");
}

// 5) Запитайте у користувача ввести три числа (ввести через prompt)
// Виведіть у консоль повідомлення про те, яке з введених чисел є найбільшим.

let firstNumber = Number(prompt(`Enter first number: `));
let secondNumber = Number(prompt(`Enter second number: `));
let thirdNumber = Number(prompt(`Enter third number: `));

if (firstNumber>=secondNumber && firstNumber>=thirdNumber) {
    console.log(`${firstNumber} is the largest number.`);
}
else if (secondNumber>=firstNumber && secondNumber>=thirdNumber) {
    console.log(`${secondNumber} is the largest number.`);
}
else {
    console.log(`${thirdNumber} is the largest number.`);
}

// 6) Визначення сезону:
// Запитайте у користувача ввести номер місяця (від 1 до 12).
// Виведіть у консоль повідомлення про те, якому сезону належить введений місяць.

let monthNumber = +prompt('Enter the month number: ');
switch(monthNumber) {
    case 1:
    case 2:
    console.log(`${monthNumber} is a winter month`);
    break;
    case 3:
    case 4:
    case 5:
    console.log(`${monthNumber} is a spring month`);
    break;
    case 6:
    case 7:
    case 8:
    console.log(`${monthNumber} is a summer month`);
    break;
    case 9:
    case 10:
    case 11:
    console.log(`${monthNumber} is an autumn month`);
    break;
    case 12:
    console.log(`${monthNumber} is a winter month`);
    break;
    default:
    console.log(`Enter a number from 1 to 12!`);
    break;
}

// 7)
// Визначення розміру числа:
// Запитайте у користувача ввести число.
// Виведіть у консоль повідомлення про те, чи введене число є додатнім, від'ємним чи нулем.

let sizeOfNumber = Number(prompt(`Введіть число: `));
console.log(sizeOfNumber > 0 ? `Це додатне число` : 
            sizeOfNumber < 0 ? `Це від'ємне число` : 
            `Це число дорівнює 0`);

// 8)Визначення типу геометричної фігури за допомогою switch:
// Створіть код, який приймає назву геометричної фігури ("коло", "квадрат", "трикутник") і використовуючи switch оператор, виводить повідомлення про кількість сторін цієї фігури (наприклад, "Коло має 0 сторін", "Квадрат має 4 сторони").

let figure = prompt(`Введіть назву геометричної фігури: `).toLowerCase();
switch(figure) {
    case "коло":
        console.log(`${figure} має 0 сторін`);
        break;
    case "квадрат":
        console.log(`${figure} має 4 сторони`);
        break;
    case "трикутник":
        console.log(`${figure} має 3 сторони`);
        break;
        default:
        console.log(`Невідома фігура: ${figure}`);
        break;
}

// 9)Підрахунок суми парних чисел:
// Створіть код, який використовує цикл while для знаходження суми всіх парних чисел в заданому діапазоні (наприклад, від 1 до 20).

let sum = 0;
let i = 1;
while (i <= 20) {
    if (i % 2 === 0) {
        sum += i; 
    }
    i++; 
}
console.log(`Сума всіх парних чисел від 1 до 20 дорівнює ${sum}`);

// 10)Зворотний лічильник:
// Використовуючи цикл for, напишіть програму, яка виводить числа від 10 до 1 в зворотньому порядку.

for (let i = 10; i >= 1; i--) {
    console.log(`${i}`);
}