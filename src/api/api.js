import axios from 'axios';

export const BASE_API = axios.create({ baseURL: "https://api.themoviedb.org/3/" });
const BASE_AXIOS = axios.create({ baseURL: "https://api.themoviedb.org/3%22%7D" });
const API_KEY = '71fefe808542d2d09fda20d1ee6a8161';
const MOVIE_API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
const MOVIE_NOW_PLAYING = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;
const MOVIE_TOP_RATED = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;

export const fetchMoviesList = () => (
    fetch(MOVIE_API_URL)
        .then(response => response.json())
);

export const fetchNowPlaying = () => (
    fetch(MOVIE_NOW_PLAYING)
        .then(response => response.json())
);

export const fetchTopRated = () => (
    fetch(MOVIE_TOP_RATED)
        .then(response => response.json())
);


export const fetchMovieDetail = (movieId) => {
    return BASE_AXIOS.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`);
}

export const fetchSearchResults = async (query) => {
    if (query && query.length > 0) {
        const parsedQuery = query.replaceAll(' ', '+');
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${parsedQuery}`;
        const res = await fetch(url);
        const resJson = res.json();
        return resJson;
    } else {
        return [];
    }
};