// Домашня робота:
// Перетворення тексту: Створіть функцію, яка приймає рядок і повертає promise. promise має перетворювати рядок у верхній регістр після 2 секундної затримки. Використайте setTimeout для створення затримки. Після завершення, використайте then для виведення результату і catch для обробки помилок.

// Function to transform text to uppercase with a delay
function transformTextToUppercase(text) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (text.trim() !== '') {  // Checking the string is not empty
                resolve(text.toUpperCase());
            } else {
                reject('Error: Input cannot be empty');
            }
        }, 2000); // 2-second delay
    });
}

// Event listener for the button
document.querySelector('.transform-btn').addEventListener('click', () => {
    const inputText = document.querySelector('.input-text').value;
    const resultElement = document.querySelector('.result-text');
    
    // Call the function and handle the Promise result
    transformTextToUppercase(inputText)
        .then((uppercaseText) => {
            resultElement.textContent = uppercaseText;
            resultElement.classList.replace('alert-danger', 'alert-secondary');
        })
        .catch((error) => {
            resultElement.textContent = error;
            resultElement.classList.replace('alert-secondary', 'alert-danger');
        });
});

//  Напишіть функцію, яка приймає два числа як аргументи і повертає promise. promise має вирішуватися з повідомленням про те, яке з чисел більше, або відхилятися, якщо числа рівні, з повідомленням "Числа рівні".

function compareNumbers(a, b) {
    return new Promise((resolve, reject) => {
      if (a > b) {
        resolve(`Число ${a} більше за число ${b}`);
      } else if (a < b) {
        resolve(`Число ${b} більше за число ${a}`);
      } else {
        reject("Числа рівні");
      }
    });
  }
  
  compareNumbers(5, 10)
    .then(result => console.log(result))
    .catch(error => console.log(error));
  
  compareNumbers(7, 7)
    .then(result => console.log(result))
    .catch(error => console.log(error));
  

// Використовуйте fetch для отримання списку всіх користувачів з JSONPlaceholder (/users ендпойнт).
// https://jsonplaceholder.typicode.com/users
// Виведіть імена та електронні адреси користувачів  на веб-сторінку.

document.addEventListener("DOMContentLoaded", () => {
    const userList = document.querySelector("#user-list");
  
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(users => {
        users.forEach(user => {
          const userCard = document.createElement("div");
          userCard.className = "col";
  
          userCard.innerHTML = `
            <div class="card h-100">
              <div class="card-body">
                <h5 class="card-title">${user.name}</h5>
                <p class="card-text">${user.email}</p>
              </div>
            </div>
          `;
  
          userList.appendChild(userCard);
        });
      })
      .catch(error => {
        console.error("There was a problem with the fetch operation:", error);
        userList.innerHTML = `<p class="text-danger">Failed to load users.</p>`;
      });
  });
  

// Додаткова робота:
// Зробити сторінку з кнопкою, при натиску на кнопку робиться запит до 
// http swapi.dev/api/planets/ та вивести картки з даними з запиту.
// При кліку на кратку отримайте id та виведіть додатккову інформацію про планету отримавши дані з запиту наприклад
// swapi.dev/api/planets/1/  ( замість 1 може бути будьяке id планети) 

document.addEventListener("DOMContentLoaded", () => {
    // Get elements from the HTML page that will be used in the code
    const planetList = document.querySelector("#planet-list"); // Container to display the list of planets
    const fetchPlanetsButton = document.querySelector("#fetch-planets"); // Button to fetch planets list
    const planetDetails = document.querySelector("#planet-details"); // Container to show detailed information about a planet
    const planetModal = new bootstrap.Modal(document.getElementById("planetModal")); // Bootstrap modal for displaying details

    // Add event listener to the button for fetching planets
    fetchPlanetsButton.addEventListener("click", () => {
      fetch("https://swapi.dev/api/planets/") // Make a request to the server to get the list of planets
        .then(response => response.json()) // Parse the response as JSON
        .then(data => {
          planetList.innerHTML = ""; // Clear the container before displaying new data
          
          // Iterate over each planet from the retrieved data
          data.results.forEach((planet, index) => {
            const planetCard = document.createElement("div"); // Create a new element for each planet card
            planetCard.className = "col"; // Add a class for styling the cards
            planetCard.style.cursor = "pointer"; // Add a "pointer" cursor for each card
            planetCard.innerHTML = `
              <div class="card h-100" data-id="${index + 1}">
                <div class="card-body">
                  <h5 class="card-title">${planet.name}</h5>
                  <p class="card-text">Population: ${planet.population}</p>
                  <p class="card-text">Climate: ${planet.climate}</p>
                </div>
              </div>
            `; // Insert HTML structure with planet name, population, and climate
            planetList.appendChild(planetCard); // Add the card to the planet list container

            // Add an event listener to each planet card
            planetCard.addEventListener("click", () => {
              fetchPlanetDetails(index + 1); // Fetch additional details for the planet using its ID
            });
          });
        })
        .catch(error => {
          console.error("Error fetching planets:", error); // Log if there is an error with the request
          planetList.innerHTML = `<p class="text-danger">Failed to load planets.</p>`; // Display error message
        });
    });

    // Function to fetch additional details about a planet by its ID
    function fetchPlanetDetails(id) {
        fetch(`https://swapi.dev/api/planets/${id}/`) // Request to the server to get planet details
          .then(response => response.json()) // Parse the response as JSON
          .then(planet => {
            // Generate HTML with all details of the planet
            let residents = planet.residents.map(url => `<a href="${url}" target="_blank">Resident Link</a>`).join(', '); // Create a list of links to residents
            let films = planet.films.map(url => `<a href="${url}" target="_blank">Film Link</a>`).join(', '); // Create a list of links to films

            planetDetails.innerHTML = `
              <h5>${planet.name}</h5>
              <p><strong>Rotation Period:</strong> ${planet.rotation_period} hours</p>
              <p><strong>Orbital Period:</strong> ${planet.orbital_period} days</p>
              <p><strong>Diameter:</strong> ${planet.diameter} km</p>
              <p><strong>Climate:</strong> ${planet.climate}</p>
              <p><strong>Gravity:</strong> ${planet.gravity}</p>
              <p><strong>Terrain:</strong> ${planet.terrain}</p>
              <p><strong>Surface Water:</strong> ${planet.surface_water}%</p>
              <p><strong>Population:</strong> ${planet.population}</p>
              <p><strong>Residents:</strong> ${residents}</p> <!-- Display list of residents -->
              <p><strong>Films:</strong> ${films}</p> <!-- Display list of films -->
              <p><strong>Created:</strong> ${planet.created}</p>
              <p><strong>Edited:</strong> ${planet.edited}</p>
              <p><strong>URL:</strong> <a href="${planet.url}" target="_blank">${planet.url}</a></p>
            `; // Insert HTML with planet details into the modal
            planetModal.show(); // Show the modal with planet information
          })
          .catch(error => {
            console.error("Error fetching planet details:", error); // Log if there is an error with the request
            planetDetails.innerHTML = `<p class="text-danger">Failed to load planet details.</p>`; // Display error message
          });
    }
});
