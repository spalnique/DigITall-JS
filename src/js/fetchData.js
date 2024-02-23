import axios from 'axios';

const btn = document.querySelector('.test-btn');

btn.addEventListener('click', () => {
  const selectedCategory = 'Trade Fiction Paperback';
  // fetchData('category', selectedCategory);
  // fetchData('topbooks');
  // fetchData('id', '');
  fetchData('list');
});

const BASE_URL = 'https://books-backend.p.goit.global/books';

const endPoints = {
  list: '/category-list',
  topbooks: '/top-books',
  category: '/category?category=',
  id: '/{id}',
};

async function fetchData(endpoint, selectedCategory = '') {
  try {
    const url = BASE_URL + endPoints[endpoint] + selectedCategory;
    const response = await axios.get(url);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}
export default fetchData