import axios from 'axios';
const BASE_URL = 'http://localhost:9090/api';

const instance = axios.create({
    baseURL: BASE_URL,
    withCredentials: false,
    headers: {
        accept: 'application/json'
    }
});

export default instance;