import axios from 'axios';

export const BASE_URL = 'https://books-backend.p.goit.global/books';

export const endPoints = {
  list: '/category-list',
  topbooks: '/top-books',
  category: '/category?category=',
  id: '/{id}',
};

export async function fetchData(endpoint, selectedCategory = '') {
  try {
    const url = BASE_URL + endpoint + selectedCategory;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}
