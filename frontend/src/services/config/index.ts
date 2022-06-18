import axios from 'axios';

export const baseUrl = axios.create({
    baseURL: 'http://localhost:3333/'
});

export const baseUrlHeroku = axios.create ({
    baseURL: 'http://parrott.herokuapp.com/'
})

// export default baseUrl;