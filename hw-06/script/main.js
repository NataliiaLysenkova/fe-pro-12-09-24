// Переишіть цей код використовуючи let const~
// // Замість var
for (let i = 0; i < 5; i++) {
    console.log(i);
}
//console.log(i);
// змінна let доступна лише всередині цього блоку
// for (const i = 0; i < 5; i++) {
//     console.log(i);
// }
// змінна const не може бути перевизначена

// // Замість var

let message = 'test';
function example() {
    if (true) {
        let message = 'Hello, world!';
        console.log(message); // Виведе 'Hello, world!'
    }
    console.log(message); // Виведе 'test'
}
example();

const message1 = 'test';
function example() {
    if (true) {
    const message = 'Hello, world!';
        console.log(message); // Виведе 'Hello, world!'
    }
    console.log(message); // Виведе 'test'
}
example();

// Створіть функцію яка приймає массив оброблює його map  та повертає новий масив де є імя та середній бал студента

const students = [
  { name: 'Оля', scores: { math: 85, english: 78, science: 92 } },
  { name: 'Іван', scores: { math: 58, english: 74, science: 80 } },
  { name: 'Марія', scores: { math: 95, english: 85, science: 99 } },
  { name: 'Петро', scores: { math: 70, english: 65, science: 75 } },
];

function getStudentsAverages(students) {
    return students.map(student => {
      let average = (student.scores.math + student.scores.english + student.scores.science) / 3;
      return { name: student.name, average: average.toFixed(2) };
    });
  }
  
  let studentsAverages = getStudentsAverages(students);
  console.log(studentsAverages);
  
// Відфільтруйте студентів за допомогою filter в яких середній бал вище 80 балів

let filterStudents = studentsAverages.filter((student) => student.average > 80);
console.log(filterStudents);

// Використайте фільтер для того щоб отримати 2 массива з income та expense  а також за допомогою .
// Використайте map щоб зібрати всі дані в окремі масиви про  income та expense.  Та порахуйте сумарне значення для кожного з видів доходу чи роходу

const transactions = [
    { id: 1, type: 'income', amount: 100 },
    { id: 2, type: 'expense', amount: 50 },
    { id: 3, type: 'income', amount: 150 },
    { id: 4, type: 'expense', amount: 70 },
    { id: 5, type: 'income', amount: 200 },
  ];
  
  const incomeTransactions = transactions.filter(transaction => transaction.type === 'income');
  const expenseTransactions = transactions.filter(transaction => transaction.type === 'expense');
  
  const incomeAmounts = incomeTransactions.map(transaction => transaction.amount);
  console.log('Income Transactions:', incomeTransactions);
  const expenseAmounts = expenseTransactions.map(transaction => transaction.amount);
  console.log('Expense Transactions:', expenseTransactions);

  let totalIncome = 0;
  incomeAmounts.forEach(amount => {
    totalIncome += amount;
  });
  
  let totalExpense = 0;
  expenseAmounts.forEach(amount => {
    totalExpense += amount;
  });
  
  console.log('Income Transactions:', incomeTransactions);
  console.log('Expense Transactions:', expenseTransactions);
  console.log('Total Income:', totalIncome);
  console.log('Total Expense:', totalExpense);
  
// Створіть функцію, яка приймає масив чисел, фільтрує ті, що більше 10, і повертає новий масив, що містить перші три елементи результату.

let randomNumbers = [36, 8, 42, 103, 2, 7, 88, 79, 12, 5];

function filterAndChange(array) {
  let filteredArray = array.filter((number) => number > 10);
  return filteredArray.slice(0, 3);
}
console.log(filterAndChange(randomNumbers));


// Створіть функцію, яка приймає масив і два індекси, і повертає новий масив, що містить елементи між цими індексами, у зворотньому порядку.

let newNumbers = [100, 72, 26, 102, 87, 85, 55, 59, 74, 67];

function elementsAndIndexes(array, index1, index2) {
  let slicedArray = array.slice(index1, index2 + 1);
  return slicedArray.reverse();
}
console.log(elementsAndIndexes(newNumbers, 1, 6));

// Створіть функцію, яка приймає масив чисел, фільтрує парні числа, а потім повертає новий масив, де кожне парне число помножене на 2.

let anyNumbers = [16, 71, 28, 97, 64, 26, 82, 103, 15, 71];

function evenAndMultipliedNumbers(array) {
  let filteredArray = array.filter((number) => number % 2 === 0);
  let multipliedArray = filteredArray.map((number) => number * 2);
  return multipliedArray;
}
console.log(evenAndMultipliedNumbers(anyNumbers));

// Додаткове завдання
// Використайте map щоб отримати сумму кожно вкладено массиву

const arrayOfArrays = [
  [1, 2, 3],
  [4, 5],
  [6, 7, 8, 9],
  [10]
];

function calculateSum(array) {
  let sum = 0;
  for (let number of array) {
    sum += number;
  }
  return sum;
}

let sumOfArrays = arrayOfArrays.map((array) => calculateSum(array));
console.log(sumOfArrays);
let sumsOfArrays = arrayOfArrays.map((array) => [calculateSum(array)]);
console.log(sumsOfArrays); //  масив з масивами сум