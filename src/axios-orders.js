import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-webapp-98de8.firebaseio.com/'
});

export default instance;