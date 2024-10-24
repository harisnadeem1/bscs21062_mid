import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (movie) => {
    setFavorites((prevFavorites) => {
      const alreadyFavorited = prevFavorites.find(
        (fav) => fav.imdbID === movie.imdbID
      );
      if (!alreadyFavorited) {
        return [...prevFavorites, movie];
      }
      return prevFavorites; 
    });
  };

  return (
    <AppContext.Provider value={{ favorites, addToFavorites }}>
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
