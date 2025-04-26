// src/App.jsx
import Navbar from './components/layout/Navbar';
import CarouselMovie from './components/microcomponents/CarouselMovie';
import ModalMovie from './components/microcomponents/ModalMovie';
import { useAppLogic } from './hooks/useAppLogic';

const App = () => {
  const {
    mode, setMode, showPreferences, openPreferences,
    showModal, openModal, closeModal, selectedItem,  movies, loadingMovies,
  } = useAppLogic();

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Navbar mode={mode} setMode={setMode} openPreferences={openPreferences} />

      <div className="p-4">
      <h1 className='text-lg font-bold text-white'>
          Recomendadas
        </h1>
        {mode === 'movies' && !loadingMovies && movies && (
          <CarouselMovie items={movies} type="movie" onSelect={openModal} />
        )}
      </div>

      <div className="p-4">
        <h1 className='text-lg font-bold text-white'>
          Mas Vistas
        </h1>
        {mode === 'movies' && !loadingMovies && movies && (
          <CarouselMovie items={movies} type="movie" onSelect={openModal} />
        )}
      </div>

      <ModalMovie isOpen={showModal} closeModal={closeModal} item={selectedItem} type={mode} />
    </div>
  );
};

export default App;
