import Carousel from "../microcomponents/Carousel";

const MovieSection = ({ movies, openModal }) => {
  return (
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
  );
};

export default MovieSection;
