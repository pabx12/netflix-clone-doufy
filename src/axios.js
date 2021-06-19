import axios from 'axios'
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const instance = axios.create({
    baseURL : `${TMDB_BASE_URL}`
});
export default instance;