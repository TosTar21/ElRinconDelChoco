const HeroSection = () => {
    return (
      <section className="bg-gray-900 text-white px-6 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold mb-4">EL RINCÓN DEL CHOCO</h1>
          <p className="text-lg text-gray-300">
            Sumérgete en un universo de historias: aquí reunimos películas que te harán vibrar y libros que encenderán tu imaginación.
            Explora nuestras recomendaciones diarias y encuentra tu próxima gran aventura, ya sea en la pantalla o entre las páginas.
          </p>
        </div>
  
        <div className="flex items-center gap-4">
          <img
            src="/Book1.jpeg"
            alt="Libro destacado"
            className="w-32 md:w-40 shadow-xl rounded-md"
          />
          <img
            src="/Movie1.jpeg"
            alt="Película destacada"
            className="w-40 md:w-52 shadow-xl rounded-md"
          />
        </div>
      </section>
    );
  };
  export default HeroSection;
  