import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `http://www.omdbapi.com/?i=${id}&apikey=8d9e4c4b`
        );
        if (response.data.Response === "True") {
          setMovie(response.data);
        } else {
          setError(response.data.Error);
        }
      } catch (err) {
        setError('Error fetching movie details.');
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) return <p>Loading...</p>;

  return movie ? (
    <div>
        <img src={movie.Poster} alt={movie.Title} />
      <h1>{movie.Title}</h1>
      <p>{movie.Plot}</p>
      <p>Released: {movie.Released}</p>
      <p>Rating: {movie.imdbRating}</p>
    </div>
  ) : (
    <p>{error || 'Movie not found'}</p>
  );
};

export default MovieDetailsPage;
