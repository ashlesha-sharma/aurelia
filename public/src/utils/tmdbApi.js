const API_KEY = import.meta.env.VITE_TMDB_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async (genreId = '', regionCode = '', type = 'movie') => {
  const regionQuery = regionCode ? `&with_origin_country=${regionCode}` : '';
  const genreQuery = genreId ? `&with_genres=${genreId}` : '';
  
  const response = await fetch(
    `${BASE_URL}/discover/${type}?api_key=${API_KEY}&sort_by=popularity.desc${genreQuery}${regionQuery}`
  );
  const data = await response.json();
  return data.results;
};

export const fetchTrending = async () => {
  const response = await fetch(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const fetchGenres = async () => {
  const response = await fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
  const data = await response.json();
  return data.genres;
};

export const fetchRecommendations = async (id, type = 'movie') => {
  const response = await fetch(`${BASE_URL}/${type}/${id}/recommendations?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};
