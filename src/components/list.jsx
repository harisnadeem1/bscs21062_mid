import PropTypes from 'prop-types';
import MovieItem from './items';

const MovieList = ({ movies }) => (
  <div className="movie-list">
    {movies.map((movie) => (
      <MovieItem key={movie.imdbID} movie={movie} />
    ))}
  </div>
);

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      Title: PropTypes.string.isRequired,
      Year: PropTypes.string.isRequired,
      imdbID: PropTypes.string.isRequired,
      Poster: PropTypes.string,
    })
  ).isRequired,
};

export default MovieList;
