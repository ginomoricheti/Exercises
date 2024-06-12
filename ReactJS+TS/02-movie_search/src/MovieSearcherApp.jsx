import { useState } from 'react';
import './styles/movieSearch.css'

export const MovieSearcherApp = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  const API_KEY = '00c5d0bce69408dfb98d6a4f2a9a76d6';

  const fetchMovies = async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`);
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchMovies();
  };

  return (
    <div className="container">
      <h1 className="title">Movie Search App</h1>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search movies"
          className="search-input"
        />
        <button type="submit" className="search-button">Search</button>
      </form>
      <div className="movie-list">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className="movie-poster" />
            <h2 className="movie-title">{movie.title}</h2>
            <p className="movie-release-date">{movie.release_date}</p>
            <p className="movie-overview">{movie.overview}</p>
          </div>
        ))}
      </div>
    </div>
  )
}