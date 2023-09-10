import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.headers.common['Authorization'] =
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDJiM2Y5ZGYzNjk3NjQxNDJjMWVlOGNlNzI4YTk5NCIsInN1YiI6IjY0ZmM0ZGEyZmZjOWRlMGVkZWQyNWMyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZVBL8BvyYjrAqfSx9YL4WvKIz75NHwciNqAnzydHWUI';

export const fetchMovies = async query => {
    return await axios.get('/search/movie', {
        params: {
            query,
            language: 'en-US',
            include_adult: false,
        },
    });
};

export const fetchTrendingMovies = async() =>
    await axios.get('/trending/movie/day', {
        params: {
            language: 'en-US',
            include_adult: false,
        },
    });

export const fetchMovieById = async movieId =>
    await axios.get(`movie/${movieId}`);

export const fetchMovieCredits = async movieId =>
    await axios.get(`/movie/${movieId}/credits`);

export const fetchMovieReviews = async movieId =>
    await axios.get(`/movie/${movieId}/reviews`);