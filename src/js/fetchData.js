import axios from 'axios';

 async function fetchData(url) {
  try {
    const response = async () => await axios.get(url);
    const data = await response();
    return data.data;
  } catch {
    console.log(error);
  }
}
export default fetchData