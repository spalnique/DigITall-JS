import axios from 'axios';

axios.defaults.baseURL = 'https://books-backend.p.goit.global/books';

export const endPoints = {
  list: '/category-list',
  topbooks: '/top-books',
  category: '/category?category=',
  id: '/{id}',
};

export async function fetchData(endPoint, selectedCategory = '') {
  try {
    const url = endPoint + selectedCategory;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}
