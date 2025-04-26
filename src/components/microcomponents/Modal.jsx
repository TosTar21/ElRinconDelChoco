// src/components/microcomponents/Modal.jsx
const Modal = ({ isOpen, closeModal, item, type }) => {
    if (!isOpen || !item) return null;
  
    const isMovie = type === 'movies';
  
    const imageUrl = isMovie
      ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
      : item.volumeInfo?.imageLinks?.thumbnail;
  
    const title = isMovie ? item.title : item.volumeInfo?.title;
    const description = isMovie
      ? item.overview || 'Sin descripción disponible.'
      : item.volumeInfo?.description || 'Sin descripción disponible.';
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
        <div className="bg-white text-black rounded-lg p-6 w-11/12 max-w-md relative">
          <button
            onClick={closeModal}
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
          >
            ✕
          </button>
  
          <img
            src={imageUrl}
            alt={title}
            className="rounded-lg mb-4 w-full h-64 object-cover"
          />
  
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
  
          {isMovie ? (
            <>
              <p><strong>Fecha de lanzamiento:</strong> {item.release_date || 'No disponible'}</p>
              <p><strong>Rating:</strong> {item.vote_average || 'N/A'}</p>
            </>
          ) : (
            <>
              <p><strong>Autores:</strong> {item.volumeInfo?.authors?.join(', ') || 'No disponible'}</p>
              <p><strong>Publicado:</strong> {item.volumeInfo?.publishedDate || 'No disponible'}</p>
            </>
          )}
  
          <p className="mt-4">{description}</p>
        </div>
      </div>
    );
  };
  
  export default Modal;
  