import { useContext } from 'react';
import { AppContext } from '../context/appcontext';
import MovieList from '../components/list';

const FavoritesPage = () => {
  const { favorites } = useContext(AppContext);

  return (
    <div className="favorites">
      <h2>Favorite</h2>
      {favorites.length > 0 ? (
        <MovieList movies={favorites} />
      ) : (
        <p>No favorite movies.</p>
      )}
    </div>
  );
};

export default FavoritesPage;
