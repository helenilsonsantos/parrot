import axios from 'axios';

const baseUrl = axios.create({
    baseURL: 'https://parrott.herokuapp.com/'
});

export default baseUrl;