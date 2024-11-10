import { API_KEY } from './API.js';
const BASE_URL = 'https://api.themoviedb.org/3';

export async function fetchTrendingMovies() {
    const url = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch trending movies: ${response.status}`);
        }
        const data = await response.json();
        return data.results; // Returns an array of trending movies
    } catch (error) {
        console.error('Error fetching trending movies:', error.message);
        return [];
    }
}

export async function fetchMovieDetails(movieId) {
    const url = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch movie details: ${response.status}`);
        }
        const data = await response.json();
        return data; // Returns detailed information about the movie
    } catch (error) {
        console.error('Error fetching movie details:', error.message);
        return null;
    }
}
