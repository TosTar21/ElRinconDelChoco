const CardMovie = ({ item, type, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(item)}
      className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg cursor-pointer w-48 flex-shrink-0 hover:scale-105 transition-transform"
    >
      <img
        src={
          type === 'movie'
            ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
            : item.volumeInfo?.imageLinks?.thumbnail
        }
        alt={item.title || item.volumeInfo?.title}
        className="h-64 w-full object-cover"
      />
      <div className="p-2">
        <h3 className="text-sm font-bold truncate">
          {type === 'movie' ? item.title : item.volumeInfo?.title}
        </h3>
      </div>
    </div>
  );
};

export default CardMovie;
