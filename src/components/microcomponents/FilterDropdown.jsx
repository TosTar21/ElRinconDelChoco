// src/components/FilterDropdown.jsx
const FilterDropdown = ({ mode, setMode }) => {
    return (
      <select
        value={mode}
        onChange={(e) => setMode(e.target.value)}
        className="bg-gray-700 text-white p-2 rounded-md"
      >
        <option value="movies">Películas</option>
        <option value="books">Libros</option>
      </select>
    );
  };
  
  export default FilterDropdown;
  