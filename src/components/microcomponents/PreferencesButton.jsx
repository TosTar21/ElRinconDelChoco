// src/components/PreferencesButton.jsx
const PreferencesButton = ({ openPreferences }) => {
    return (
      <button
        onClick={openPreferences}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
      >
        Preferencias
      </button>
    );
  };
  
  export default PreferencesButton;
  