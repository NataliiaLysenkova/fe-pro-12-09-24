// Додаткові задачі

// Напишіть функцію, яка приймає масив чисел, видаляє всі повторювані елементи, сортує залишки за спаданням і видаляє найбільший елемент.

let randomNumbers = [46, 25, 40, 21, 32, 32, 23, 42, 0, 37, 35, 35, 46, 39, 23, 1, 17, 31, 5, 33];

function sortNumbers(array) { 
    let sortedNumbers = array.filter((item, index) => array.indexOf(item) === index);
    console.log(`Видаляємо дублікати => ${sortedNumbers}`);
    sortedNumbers.sort((a, b) => b - a);
    console.log(`Сортуємо за спаданням => ${sortedNumbers}`);
    sortedNumbers.shift();
    console.log(`Видаляємо найбільший елемент => ${sortedNumbers}`);
    return sortedNumbers;
}
console.log(sortNumbers(randomNumbers));

// Напишіть функцію, яка приймає два масиви чисел, об'єднує їх, сортує у порядку зростання і видаляє останні 4 елементи.
let Array1 = [12, 69, 3, 5, 19, 20, 47, 60];
let Array2 = [99, 74, 2, 15, 26, 5, 5, 90, 7];

function concatArrays( array1, array2) {
    let concatedArray = array1.concat(array2);
    console.log(`Об'єднуємо масиви => ${concatedArray}`);
    concatedArray.sort((a, b) => a - b);
    console.log(`Сортуємо за зростанням => ${concatedArray}`);
    concatedArray.splice(-4, 4);
    console.log(`Видаляємо останні 4 елементи => ${concatedArray}`);
    return concatedArray;
}
let concatedArray = concatArrays(Array1, Array2);
console.log(concatedArray);

// У вас є масив об'єктів, які представляють користувачів. Кожен користувач має ім'я та вік. Напишіть функцію, яка відфільтрує користувачів старших за 18 років, відсортує їх за віком у порядку зростання і видалить наймолодшого.

let users = [
    { name: 'Оля', age: 17 },
    { name: 'Іван', age: 25 },
    { name: 'Петро', age: 19 },
    { name: 'Марія', age: 30 },
];

function filterAndSortUsers(users) {
    let filteredUsers = users.filter(user => user.age > 18);
    filteredUsers.sort((a, b) => a.age - b.age);
    filteredUsers.shift();  // filteredUsers.splice(0, 1); 
    return filteredUsers;
}

let result = filterAndSortUsers(users);
console.log(result);
