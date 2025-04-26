import "./styles/index.css"
import Navbar from './components/layout/Navbar';
import { useState } from "react";

const App = () => {
  const [mode, setMode] = useState('movies'); // Estado para Películas o Libros
  const [showPreferences, setShowPreferences] = useState(false); // Estado para abrir/cerrar modal

  const openPreferences = () => setShowPreferences(true);

  return (
    <>
      <Navbar mode={mode} setMode={setMode} openPreferences={openPreferences} />
    </>
  )
}

export default App
