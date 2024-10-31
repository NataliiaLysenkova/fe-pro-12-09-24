// Домашня робота
// Створіть форму з декількома радіокнопками, кожна з яких представляє різний колір (наприклад, червоний, зелений, синій).
// Використовуйте подію onchange для кожної радіокнопки, щоб змінювати колір фону сторінки відповідно до вибору користувача.

function changeBackgroundColor(color) {
  document.body.style.backgroundColor = color;
}

// Створіть випадаючий список з назвами країн.
// Використовуйте подію onchange для випадаючого списку, щоб виводити інформацію про вибрану країну, таку як столиця або населення, в іншому елементі на сторінці.

function displayCountryInfo() {
  const countryInfo = {
    ukraine: {
      capital: "Київ",
      population: "41 мільйон"
    },
    japan: {
      capital: "Токіо",
      population: "126 мільйонів"
    },
    germany: {
      capital: "Берлін",
      population: "83 мільйони"
    },
    turkey: {
      capital: "Анкара",
      population: "85 мільйонів"
    },
    usa: {
      capital: "Вашингтон",
      population: "331 мільйон"
    },
    canada: {
      capital: "Оттава",
      population: "38 мільйонів"
    }
  };

  const selectedCountry = document.querySelector(".countrySelect").value;
  const infoDisplay = document.querySelector(".countryInfo");

  if (selectedCountry && countryInfo[selectedCountry]) {
    const { capital, population } = countryInfo[selectedCountry];
    infoDisplay.innerHTML = `<p>Столиця: <strong>${capital}</strong></p>
                             <p>Населення: <strong>${population}</strong></p>`;
  } else {
    infoDisplay.innerHTML = ""; // Очистити інформацію, якщо нічого не вибрано
  }
}

// створіть кнопку яка при натисканні запускає таймер, який виводить збільшення лічильника кожну секунду. Коли лічильник досягне 10, автоматично зупиніть таймер.

let count = 0;
let counter;

function startCounter() {
  // Перевіряємо, чи таймер вже працює, щоб не запускати ще один
  if (counter) return;

  // Скидаємо лічильник до 0 при повторному запуску
  count = 0;
  document.getElementById("counter").textContent = count;

  counter = setInterval(() => {
    count++;
    document.getElementById("counter").textContent = count;

    // Зупиняємо таймер, коли лічильник досягне 10
    if (count === 10) {
      clearInterval(counter);
      counter = null; // Скидаємо таймер, щоб дозволити перезапуск
    }
  }, 1000); // Збільшення кожну секунду
}


// Додаткова робота:
// Реалізуйте таймер з дизайну
// https://www.figma.com/file/AQtBhmWEI5QPOiH29eJAev/Pomodoro-File-Playground-File-(Copy)?node-id=0%3A1&mode=dev

//зворотній відлік
let timeLeft = 25 * 60;
let timerInterval;
let isRunning = false; // Прапорець для контролю запуску таймера

function startTimer() {
  if (isRunning) return; // Якщо таймер уже запущений, нічого не робимо
  isRunning = true; // Установлюємо прапорець у true

  timerInterval = setInterval(() => {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    document.querySelector('.text').textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    
    if (timeLeft > 0) {
      timeLeft--;
    } else {
      clearInterval(timerInterval);
      isRunning = false; // Скидаємо прапорець після завершення таймера
      alert("Час вийшов!");
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timerInterval);
  timeLeft = 25 * 60;
  isRunning = false; // Скидаємо прапорець, щоб можна було повторно запускати таймер
  document.querySelector('.text').textContent = "25:00";
}

document.querySelector('.button').addEventListener('click', startTimer);
document.querySelector('.reset').addEventListener('click', resetTimer);


//наростаючий відлік
// let timeElapsed = 0;
// const maxTime = 25 * 60;
// let timerInterval;
// let isRunning = false; // Додаємо прапорець для контролю запуску таймера

// function startTimer() {
//   if (isRunning) return; // Якщо таймер уже запущений, нічого не робимо
//   isRunning = true; // Установлюємо прапорець у true

//   timerInterval = setInterval(() => {
//     let minutes = Math.floor(timeElapsed / 60);
//     let seconds = timeElapsed % 60;
//     document.querySelector('.text').textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    
//     if (timeElapsed < maxTime) {
//       timeElapsed++;
//     } else {
//       clearInterval(timerInterval);
//       isRunning = false; // Скидаємо прапорець після завершення таймера
//       alert("Час вийшов!");
//     }
//   }, 1000);
// }

// function resetTimer() {
//   clearInterval(timerInterval);
//   timeElapsed = 0;
//   isRunning = false; // Скидаємо прапорець, щоб можна було повторно запускати таймер
//   document.querySelector('.text').textContent = "0:00";
// }

// document.querySelector('.button').addEventListener('click', startTimer);
// document.querySelector('.reset').addEventListener('click', resetTimer);
