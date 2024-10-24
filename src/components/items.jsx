import { useContext } from 'react';
import { AppContext } from '../context/appcontext';
import PropTypes from 'prop-types';

const MovieItem = ({ movie }) => {
  const { addToFavorites } = useContext(AppContext);

  return (
    <div className="movie-item">
      <img src={movie.Poster} alt={movie.Title} />
      <h3>{movie.Title}</h3>
      <p>Released: {movie.Year}</p>
      <a href={`/movie/${movie.imdbID}`}>View Details</a>
      <button onClick={() => addToFavorites(movie)}>Add to Favorites</button>
    </div>
  );
};

MovieItem.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Year: PropTypes.string.isRequired,
    imdbID: PropTypes.string.isRequired,
    Poster: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieItem;
