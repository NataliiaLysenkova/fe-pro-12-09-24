// Задача №1:
// =====================================
// 1. - Вам потрібно створити калькулятор індексу маси тіла (BMI).

// 2. - Індекс маси тіла розраховується за формулою: 
// вага в Кг / Зріст у квадраті.

// Наприклад, маса людини = 74 кг, зріст = 172 см. Отже, індекс маси тіла в цьому випадку дорівнює:
// ІМТ = 74кг / 1,722м² ≈ 25,01 кг/м²

// Краще створити змінні для ваги та зросту і потім ще одну змінну для результату. Але можна все в одну змінну, як завгодно, не принципово.

let weight = parseFloat(prompt(`Введіть свою вагу (в кг):`));
let heightCm = parseFloat(prompt(`Введіть свій зріст (в см): `));
//Перетворюємо зріст з сантиметрів в метри
let heightM = heightCm / 100;
//Розраховуємо ІМТ
let BMI = weight / (heightM ** 2);
alert(`Ваш ІМТ (індекс маси тіла) дорівнює ${BMI.toFixed(2)} кг/м²`);

// 3. Порівняти маси тіл двох людей (дані нижче), і вивести в консоль порівняння двох результатів у булевому значенні (true / false).
// 4. У кого індекс BMI більший?

// ДАНІ:
// Варіант1:
//     Артем: Вага: 72кг зріст: 1.88м
//     Василь: Вага: 82кг зріст: 1.73м

let weightArtem = 72;
let weightVasyl = 82;
let heightArtem = 1.88;
let heightVasyl = 1.73;

let BMIArtem = weightArtem/ (heightArtem ** 2);
console.log(`ІМТ Артема: ${BMIArtem.toFixed(2)}`);
let BMIVasyl = weightVasyl/ (heightVasyl ** 2);
console.log(`ІМТ Василя: ${BMIVasyl.toFixed(2)}`);
console.log(`Чи вага Артема більше, ніж вага Василя? ${weightArtem > weightVasyl}`);
console.log(`ІМТ (індекс маси тіла) Василя більше, ніж ІМТ (індекс маси тіла) Артема? ${BMIVasyl > BMIArtem} `);

// Варіант2:
//     Аліса: Вага: 50кг зріст: 1.58м
//     Юлія: Вага: 62кг зріст: 1.70м

let weightAlisa = 50;
let weightYuliia = 62;
let heightAlisa = 1.58;
let heightYuliia = 1.70;

let BMIAlisa = weightAlisa/ (heightAlisa ** 2);
console.log(`ІМТ Аліси: ${BMIAlisa.toFixed(2)}`);
let BMIYuliia = weightYuliia/ (heightYuliia ** 2);
console.log(`ІМТ Юлії: ${BMIYuliia.toFixed(2)}`);
console.log(`Чи вага Аліси більше, ніж вага Юлії? ${weightAlisa > weightYuliia}`);
console.log(`ІМТ (індекс маси тіла) Юлії більше, ніж ІМТ (індекс маси тіла) Аліси? ${BMIYuliia > BMIAlisa}`);

// =============================================
// Задача №2
// =============================================
// Вам потрібно вирахувати переможця серед двох команд.
// Уявімо 2 команди з плавання - «crazyKats» і «funnyDucks».

// Кожна з команд показала 3 підсумкові результати, у трьох запливах. Наприклад crazyKats показали три резултата (30, 60, 43).

// Одна з команд перемагає тільки в тому випадку, якщо середня кількість очок за підсумками трьох результатів мінімум у 2 рази більша, ніж у суперника. Інакше нічия

// Завдання:

// 1) Створити змінні в яких буде розраховуватися середній результат для першої команди та другої команди;
// 2) Порівняти через умовний оператор if середній результат команд та вивести переможця ВІДПОВІДНО до умови яка вказана вище.
// 3) Написати завдання через тернарний оператор

// Вихідні дані:
//     Перший варіант: «crazyKats» - 44, 23, 71 «funnyDucks» 65, 54, 49

let firstResultKats = 44;
let secondResultKats = 23;
let thirdResultKats = 71;
let crazyKats = (firstResultKats + secondResultKats + thirdResultKats) / 3;
console.log(`Середній результат команди crazyKats: ${crazyKats}`);

let firstResultDucks = 65;
let secondResultDucks = 54;
let thirdResultDucks = 49;
let funnyDucks = (firstResultDucks + secondResultDucks + thirdResultDucks) / 3;
console.log(`Середній результат команди funnyDucks: ${funnyDucks}`);

if (crazyKats >= 2 * funnyDucks) {
    console.log(`crazyKats with a score of ${crazyKats} win!`)
}
else if ( funnyDucks >= 2 * crazyKats) {
    console.log(`funnyDucks with a score of ${funnyDucks} win!`)
}
else {
    console.log(`It is a draw!`)
}

console.log(crazyKats >= 2 * funnyDucks ? `crazyKats with a score of ${crazyKats} win!` :
            funnyDucks >= 2 * crazyKats ? `funnyDucks with a score of ${funnyDucks} win!` :
            `It is a draw!`
 );
//     Другий варіант: «crazyKats» - 85, 54, 41 «funnyDucks» 23, 34, 27
 firstResultKats = 85;
 secondResultKats = 54;
 thirdResultKats = 41;
 crazyKats = (firstResultKats + secondResultKats + thirdResultKats) / 3;
console.log(`Середній результат команди crazyKats: ${crazyKats}`);

 firstResultDucks = 23;
 secondResultDucks = 34;
 thirdResultDucks = 27;
 funnyDucks = (firstResultDucks + secondResultDucks + thirdResultDucks) / 3;
console.log(`Середній результат команди funnyDucks: ${funnyDucks}`);

if (crazyKats >= 2 * funnyDucks) {
    console.log(`crazyKats with a score of ${crazyKats} win!`)
}
else if ( funnyDucks >= 2 * crazyKats) {
    console.log(`funnyDucks with a score of ${funnyDucks} win!`)
}
else {
    console.log(`It is a draw!`)
}

console.log(crazyKats >= 2 * funnyDucks ? `crazyKats with a score of ${crazyKats} win!` :
            funnyDucks >= 2 * crazyKats ? `funnyDucks with a score of ${funnyDucks} win!` :
            `It is a draw!`
 );