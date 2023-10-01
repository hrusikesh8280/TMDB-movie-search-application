import axios from 'axios';


const API_KEY = '26249278d5185e6733169125e153d872';


const BASE_URL = 'https://api.themoviedb.org/3';

const ENDPOINTS = {
  searchMovies: '/search/movie',
  getMovieDetails: '/movie',
};

// Function to search for movies based on a query
export const searchMovies = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}${ENDPOINTS.searchMovies}`, {
      params: {
        api_key: API_KEY,
        query,
      },
    });

    return response.data.results;
  } catch (error) {
    throw new Error('Failed to fetch movie data from TMDB API.');
  }
};

// Function to get details of a specific movie
export const getMovieDetails = async (movieId) => {
  try {
    const response = await axios.get(`${BASE_URL}${ENDPOINTS.getMovieDetails}/${movieId}`, {
      params: {
        api_key: API_KEY,
      },
    });

    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch movie details from TMDB API.');
  }
};
