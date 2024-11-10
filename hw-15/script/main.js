// Домашня робота:
// Завдання 1: Отримання даних користувача з JSONPlaceholder
// Створіть функцію, яка використовує async/await для отримання даних про конкретного користувача за id JSONPlaceholder. Виведіть ім'я та електронну адресу користувача.
// підказка: запит за іd чи іншими параметрами https://jsonplaceholder.typicode.com/users/${userId}

async function getUserData(userId) {
    try {
      // Fetch user data from JSONPlaceholder API with the specified userId
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
      
      // Check if the response is successful (status 200–299)
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`); // If not, throw an error with the status code
      }
  
      // Parse the response JSON to get the user data
      const user = await response.json();
  
      // Log the user's name and email to the console
      console.log(`Name: ${user.name}, Email: ${user.email}`);
    } catch (error) {
      // If an error occurs, log the error message
      console.error('Failed to fetch user data:', error.message);
    }
  }
  
  // Call the function with a userId
  getUserData(1);
  getUserData(4);
  getUserData(10);

// Завдання 2: Виведення інформації про фільм з SWAPI
// Використайте async/await для запиту інформації про конкретний фільм з SWAPI. Виведіть назву фільму та дату виходу.

async function fetchMovieInfo() {
    try {
      // Get the film ID entered by the user
      const filmId = document.querySelector('#filmIdInput').value;
      
      // Check if the film ID is valid
      if (!filmId || filmId < 1 || filmId > 6) {
        document.querySelector('#movieInfo').innerHTML = `
          <div class="alert alert-warning" role="alert">
            Please enter a valid film ID between 1 and 6.
          </div>
        `;
        return;
      }
      
      // Fetch movie data from SWAPI based on the specified filmId
      const response = await fetch(`https://swapi.dev/api/films/${filmId}/`);
      
      // Check if the response is successful
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      // Parse JSON data from the response
      const movie = await response.json();

      // Display movie title and release date using Bootstrap styling
      document.querySelector('#movieInfo').innerHTML = `
        <h2 class="fw-bold">${movie.title}</h2>
        <p class="text-muted">Release Date: ${movie.release_date}</p>
      `;
    } catch (error) {
      // Display an error message if the fetch fails
      document.querySelector('#movieInfo').innerHTML = `
        <div class="alert alert-danger" role="alert">
          Failed to fetch movie data: ${error.message}
        </div>
      `;
    }
  }


//  Завдання 3: Імпорт утиліти для роботи з текстом
// Створіть файл stringUtilities.js, де будуть функції для роботи з рядками, наприклад, функція для перетворення рядка в uppercase і функція для обернення рядка. Експортуйте ці функції. В index.js імпортуйте та використовуйте ці функції.

//Завдання виконане у файлах index.js та stringUtilities.js


// Завдання 4:
// Створіть канвас і за допомогою JavaScript малюйте на ньому 3 прямокутники  які пересікаються. Використовуйте метод fillRect для цього.
// https://bucephalus.org/text/CanvasHandbook/CanvasHandbook.html#fillrect-x-y-w-h

// Get the canvas element and its drawing context
const canvas = document.querySelector('#myCanvas');
const ctx = canvas.getContext('2d');

// Draw the first rectangle
ctx.fillStyle = 'rgba(255, 0, 0, 0.5)'; // Red with 50% opacity
ctx.fillRect(50, 50, 200, 150);         // x, y, width, height

// Draw the second rectangle
ctx.fillStyle = 'rgba(0, 255, 0, 0.5)'; // Green with 50% opacity
ctx.fillRect(100, 100, 200, 150);       // Offset for overlap

// Draw the third rectangle
ctx.fillStyle = 'rgba(0, 0, 255, 0.5)'; // Blue with 50% opacity
ctx.fillRect(150, 150, 200, 150);       // Offset for overlap

// Завдання 5: Динамічне створення SVG-лінії
// Створіть функцію на JavaScript, яка додає на сторінку SVG-елемент з лінією, параметри якої (початкова та кінцева точки, колір, товщина) передаються як аргументи функції.

 // Function to create and add an SVG line to the page
 function createSvgLine(x1, y1, x2, y2, color = 'black', thickness = 2) {
    
    // Get the SVG container
    const svg = document.querySelector("#svgElement");

    // Create the line element
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", x1);
    line.setAttribute("y1", y1);
    line.setAttribute("x2", x2);
    line.setAttribute("y2", y2);
    line.setAttribute("stroke", color);
    line.setAttribute("stroke-width", thickness);

    // Append the line to the SVG element
    svg.appendChild(line);
  }

  // Create SVG container
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("id", "svgElement");
  svg.setAttribute("width", "550");
  svg.setAttribute("height", "200");
  svg.setAttribute("viewBox", "0 0 550 200");
  svg.style.border = "1px solid lightgray";
  document.getElementById("svgContainer").appendChild(svg);


  // Draw the lines with specified orientations
  createSvgLine(50, 150, 150, 50, 'blue', 4);   // Blue diagonal line
  createSvgLine(200, 100, 300, 100, 'red', 4);  // Red horizontal line
  createSvgLine(400, 50, 400, 150, 'green', 4); // Green vertical line
   
// Додадткова робота:
// Перейдіть на TMDb API та зареєструйтесь, щоб отримати безкоштовний API ключ.
// API ключ буде необхідний для виконання запитів до API.
// https://developer.themoviedb.org/docs/append-to-response
// Створіть файл apiService.js, в якому реалізуйте та експортуйте функції для взаємодії з публічним API. Для цього використайте API відкритих даних про фільми: The Movie Database API (TMDb).
// Функція fetchTrendingMovies(): Використовує fetch, async, await для отримання списку трендових фільмів.
// Функція fetchMovieDetails(movieId): Приймає ID фільму та повертає детальну інформацію про нього.
// Експортуйте ці функції з файлу apiService.js.
// Створіть файл index.js, в якому імпортуйте функції з apiService.js.
// Використайте функцію fetchTrendingMovies() для отримання списку фільмів та виведіть їх назви на сторінку
// Використайте функцію fetchMovieDetails(movieId), щоб отримати детальну інформацію про певний фільм (наприклад, з ID, отриманим зі списку трендових фільмів), та виведіть їх при кліку на на список
// Додатково, обробляйте можливі помилки за допомогою try...catch та виводьте повідомлення про помилку в консоль.

// Завдання виконане у файлі apiService.js та index.js
