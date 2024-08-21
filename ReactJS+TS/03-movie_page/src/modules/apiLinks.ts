// src/services/apiLinks.ts

export const API_BASE_URL = 'https://api.themoviedb.org/3/';
export const APIKEY = 'c5ec679073bf03ee76cb44fc08abbc7b';

// Movies Endpoints
export const movieEndpoints = {
  trending: `${API_BASE_URL}trending/movie/week?api_key=${APIKEY}`,
  upcoming: `${API_BASE_URL}movie/upcoming?api_key=${APIKEY}`,
  popular: `${API_BASE_URL}movie/popular?api_key=${APIKEY}`,
  topRated: `${API_BASE_URL}movie/top_rated?api_key=${APIKEY}`,
  nowPlaying: `${API_BASE_URL}movie/now_playing?api_key=${APIKEY}`,
};

// TV Shows Endpoints
export const tvEndpoints = {
  trending: `${API_BASE_URL}trending/tv/week?api_key=${APIKEY}`,
  popular: `${API_BASE_URL}tv/popular?api_key=${APIKEY}`,
  topRated: `${API_BASE_URL}tv/top_rated?api_key=${APIKEY}`,
  airingToday: `${API_BASE_URL}tv/airing_today?api_key=${APIKEY}`,
};
