import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import MovieDetailsPage from './pages/details';
import FavoritesPage from './pages/favorities';
import Header from './components/header';
import Footer from './components/footer';
import AppProvider from './context/appcontext';

const App = () => (
  <AppProvider>
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:id" element={<MovieDetailsPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  </AppProvider>
);

export default App;
