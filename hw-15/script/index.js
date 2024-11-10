// Import the functions from stringUtilities.js
import { toUpperCase, reverseString } from './stringUtilities.js';

// Use the imported functions
const originalText = "Hello, world!";
const upperText = toUpperCase(originalText);
const reversedText = reverseString(originalText);

console.log("Original text:", originalText);
console.log("Uppercase text:", upperText);
console.log("Reversed text:", reversedText);

// Import the functions from apiService.js
import { fetchTrendingMovies, fetchMovieDetails } from './apiService.js';

document.addEventListener('DOMContentLoaded', async () => {
    const moviesList = document.querySelector('#movies-list');
    const movieModalLink = document.querySelector('#movieModalLink');
    const modalPoster = document.querySelector('#modal-poster');
    const modalReleaseDate = document.querySelector('#modal-release-date');
    const modalGenres = document.querySelector('#modal-genres');
    const modalOverview = document.querySelector('#modal-overview');

    // Fetch and display trending movies
    const movies = await fetchTrendingMovies();
    movies.forEach(movie => {
        const movieItem = document.createElement('li');
        movieItem.classList.add('list-group-item', 'list-group-item-action');
        movieItem.textContent = movie.title;
        movieItem.dataset.id = movie.id;
        movieItem.style.cursor = "pointer"; // Add a "pointer" cursor for each item
        moviesList.appendChild(movieItem);

        // Event listener for each movie item
        movieItem.addEventListener('click', async () => {
            const movieId = movieItem.dataset.id;
            const details = await fetchMovieDetails(movieId);
            if (details) {
                // Display movie details in the modal
                movieModalLink.textContent = details.title;
                movieModalLink.href = `https://www.themoviedb.org/movie/${movieId}`;
                modalReleaseDate.textContent = `Release Date: ${details.release_date}`;
                modalGenres.textContent = details.genres.map(genre => genre.name).join(', ');
                modalOverview.textContent = details.overview;

                 // Display the poster image
                 if (details.poster_path) {
                    const posterUrl = `https://image.tmdb.org/t/p/w500${details.poster_path}`;
                    modalPoster.innerHTML = `<img src="${posterUrl}" alt="${details.title} poster" class="img-fluid">`;
                } else {
                    modalPoster.innerHTML = `<p>No poster available</p>`; // Fallback if no poster is available
                }
                
                // Show the modal
                const movieModal = new bootstrap.Modal(document.querySelector('#movieModal'));
                movieModal.show();
            } else {
                console.error('Error fetching movie details.');
            }
        });
    });
});
