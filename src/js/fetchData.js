import axios from 'axios';

export async function fetchData(baseUrl, endPoint, selectedCategory = '') {
  try {
    const url = baseUrl + endPoint + selectedCategory;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

