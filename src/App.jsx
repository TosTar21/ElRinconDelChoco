import Navbar from './components/layout/Navbar';
import Modal from './components/microcomponents/Modal';
import { useAppLogic } from './hooks/useAppLogic';
import HeroSection from './components/sections/HeroSection';
import MovieSection from './components/sections/MovieSection';
import BookSection from './components/sections/BookSection';

const App = () => {
  const {
    mode, setMode, showPreferences, openPreferences,
    showModal, openModal, closeModal, selectedItem,
    movies, loadingMovies, books, loadingBooks,
  } = useAppLogic();

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Navbar mode={mode} setMode={setMode} openPreferences={openPreferences} />
      
      <HeroSection />

      <div className="p-4 space-y-10">
        {mode === 'movies' && !loadingMovies && movies && (
          <MovieSection movies={movies} openModal={openModal} />
        )}

        {mode === 'books' && !loadingBooks && books && (
          <BookSection books={books} openModal={openModal} />
        )}
      </div>

      <Modal isOpen={showModal} closeModal={closeModal} item={selectedItem} type={mode} />
    </div>
  );
};

export default App;
