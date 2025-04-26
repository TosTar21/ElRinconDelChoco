// src/components/Navbar.jsx
import FilterDropdown from '../microcomponents/FilterDropdown';
import PreferencesButton from '../microcomponents/PreferencesButton';

const Navbar = ({ mode, setMode, openPreferences }) => {
  return (
    <nav className="flex items-center justify-between bg-gray-800 p-4 text-white">
      <div className="text-2xl font-bold">El Rincón del Choco</div>

      <div className="flex items-center space-x-4">
        <FilterDropdown mode={mode} setMode={setMode} />
        <PreferencesButton openPreferences={openPreferences} />
      </div>
    </nav>
  );
};

export default Navbar;
