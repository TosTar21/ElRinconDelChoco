// src/services/movieService.js
import apiClient from './apiClient';
import { TMDB_API_KEY } from '../utils/constants';

const BASE_URL = 'https://api.themoviedb.org/3';

export const getPopularMovies = async () => {
  const response = await apiClient.get(`${BASE_URL}/movie/popular`, {
    params: {
      api_key: TMDB_API_KEY,
      language: 'es-ES', // Puedes cambiar el idioma
    },
  });
  return response.data.results; // Solo devolvemos la lista de películas
};

export const searchMoviesByPreferences = async (preferences) => {
  const response = await apiClient.get(`${BASE_URL}/search/movie`, {
    params: {
      api_key: TMDB_API_KEY,
      query: preferences.query, // Por ejemplo "Avengers"
      language: 'es-ES',
    },
  });
  return response.data.results;
};
