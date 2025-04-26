// src/services/bookService.js
import apiClient from './apiClient';
import { GOOGLE_BOOKS_API_KEY } from '../utils/constants';

const BASE_URL = 'https://www.googleapis.com/books/v1';

export const getPopularBooks = async () => {
  const response = await apiClient.get(`${BASE_URL}/volumes`, {
    params: {
      q: 'subject:fiction', // libros de ficción populares
      orderBy: 'relevance',
      maxResults: 20,
      key: GOOGLE_BOOKS_API_KEY,
    },
  });
  return response.data.items;
};

export const searchBooksByPreferences = async (preferences) => {
  const response = await apiClient.get(`${BASE_URL}/volumes`, {
    params: {
      q: preferences.query, // por ejemplo "Harry Potter"
      orderBy: 'relevance',
      maxResults: 20,
      key: GOOGLE_BOOKS_API_KEY,
    },
  });
  return response.data.items;
};
