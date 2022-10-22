import axios from 'axios';

const request = axios.create({
    baseUrl: 'https://tiktok.fullstack.edu.vn/api/',
});

export default request;
