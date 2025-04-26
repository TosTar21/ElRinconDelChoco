// src/components/microcomponents/Card.jsx
const Card = ({ item, type, onSelect }) => {
  const isMovie = type === 'movies';

  const imageUrl = isMovie
    ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
    : item.volumeInfo?.imageLinks?.thumbnail;

  const title = isMovie ? item.title : item.volumeInfo?.title;

  return (
    <div
      onClick={() => onSelect(item)}
      className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg cursor-pointer w-48 flex-shrink-0 hover:scale-105 transition-transform"
    >
      <img
        src={imageUrl}
        alt={title}
        className="h-64 w-full object-cover"
      />
      <div className="p-2">
        <h3 className="text-sm font-bold truncate">{title}</h3>
      </div>
    </div>
  );
};

export default Card;
