// src/components/microcomponents/Carousel.jsx
import Card from './Card';

const Carousel = ({ items, type, onSelect }) => {
  return (
    <div className="overflow-x-auto whitespace-nowrap py-4 px-2">
      <div className="flex space-x-4">
        {items?.map((item) => (
          <Card key={item.id || item.id_book} item={item} type={type} onSelect={onSelect} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
