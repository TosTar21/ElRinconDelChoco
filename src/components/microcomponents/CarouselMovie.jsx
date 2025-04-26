import CardMovie from "./CardMovie";

const CarouselMovie = ({ items, type, onSelect }) => {
  return (
    <div className="overflow-x-auto whitespace-nowrap py-4 px-2">
      <div className="flex space-x-4">
        {items?.map((item) => (
          <CardMovie key={item.id} item={item} type={type} onSelect={onSelect} />
        ))}
      </div>
    </div>
  );
};

export default CarouselMovie;
