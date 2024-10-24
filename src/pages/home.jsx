import { useState, useEffect } from 'react';
import axios from 'axios';
import MovieList from '../components/list';
import SearchBar from '../components/searchBar';


const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovies = async (searchTerm) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?s=${searchTerm}&apikey=8d9e4c4b`
      );
      if (response.data.Response === "True") {
        setMovies(response.data.Search);
      } else {
        setError(response.data.Error);
      }
    } catch (err) {
      setError('Error fetching movies. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies('Popular');
  }, []);

  return (
    <div>
      <SearchBar onSearch={fetchMovies} />
      {loading && <p>Loading movies...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && movies.length === 0 && <p>No movies found.</p>}
      {!loading && !error && <MovieList movies={movies} />}
    </div>
  );
};

export default HomePage;
