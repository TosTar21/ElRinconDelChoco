import Navbar from './components/layout/Navbar';
import Carousel from './components/microcomponents/Carousel';
import Modal from './components/microcomponents/Modal';
import { useAppLogic } from './hooks/useAppLogic';

const App = () => {
  const {
    mode,setMode,showPreferences,openPreferences,showModal,openModal,
    closeModal,selectedItem,movies,loadingMovies,books,loadingBooks,
  } = useAppLogic();

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Navbar mode={mode} setMode={setMode} openPreferences={openPreferences} />

      <div className="p-4 space-y-10">

        {mode === 'movies' && !loadingMovies && movies && (
          <>
            <section>
              <h2 className="text-2xl font-bold mb-4">Más vistas</h2>
              <Carousel items={movies} type="movies" onSelect={openModal} />
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Recomendadas</h2>
              <Carousel items={movies} type="movies" onSelect={openModal} />
            </section>
          </>
        )}

        {mode === 'books' && !loadingBooks && books && (
          <>
            <section>
              <h2 className="text-2xl font-bold mb-4">Más vistas</h2>
              <Carousel items={books} type="books" onSelect={openModal} />
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Recomendadas</h2>
              <Carousel items={books} type="books" onSelect={openModal} />
            </section>
          </>
        )}

      </div>

      <Modal isOpen={showModal} closeModal={closeModal} item={selectedItem} type={mode} />
    </div>
  );
};

export default App;
