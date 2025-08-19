import axios from 'axios';
import router from '@/router';

export const customAxios = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/v1',
});

customAxios.get('http://127.0.0.1:8000/sanctum/csrf-cookie').then(response => {
    sessionStorage.setItem('crsf-token', response.config.headers['X-XSRF-TOKEN']);
});

const token = sessionStorage.getItem('token');

customAxios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

// Add a response interceptor
customAxios.interceptors.response.use(function (response) {

    return response;

}, function (error) {

    if (error.response.status === 401) router.push({ path: '/login' });
    // if (error.response.status === 401) router.push({ path: '/' });

    return Promise.reject(error);
});

customAxios.interceptors.request.use(function (request) {

    request.headers.Authorization = `Bearer ${sessionStorage.getItem('token')}`;

    return request;

}, function (error) {

    return Promise.reject(error);
});