import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api', // 서버 주소
});



export default api;