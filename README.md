# El Rincón del Choco 🎬📚

Aplicación web de recomendaciones de **Películas** y **Libros** basada en **preferencias del usuario** y potenciadas con **OpenAI**.  
Proyecto desarrollado con **React 19 + Vite + TailwindCSS + React Query + Axios**.

---

## 🚀 Tecnologías usadas

- **React 19**
- **Vite**
- **Tailwind CSS 4**
- **Axios**
- **React Query** (`@tanstack/react-query`)
- **OpenAI API** (GPT-3.5-turbo)
- **TMDb API** (The Movie Database)
- **Google Books API**

---

## 🏛️ Estructura de carpetas

/public /src ├── App.jsx # Componente principal ├── main.jsx # Punto de entrada (envuelve App con QueryClientProvider) ├── assets/ # Imágenes y recursos estáticos ├── components/ │ ├── layout/ │ │ └── Navbar.jsx # Barra de navegación │ └── microcomponents/ │ ├── Card.jsx # Componente de tarjeta (película o libro) │ ├── Carousel.jsx # Carrusel horizontal de tarjetas │ ├── FilterDropdown.jsx # Selector de películas/libros │ ├── Modal.jsx # Modal de detalle │ └── PreferencesButton.jsx # Botón para abrir preferencias ├── hooks/ │ ├── useAppLogic.js # Hook principal para manejar estados generales │ ├── useBooks.js # Hook para libros populares │ ├── useMovies.js # Hook para películas populares │ └── usePreferences.js # Hook para recomendaciones basadas en OpenAI ├── services/ │ ├── apiClient.js # Instancia base de Axios │ ├── bookService.js # Llamadas a Google Books API │ ├── movieService.js # Llamadas a TMDb API │ └── openaiService.js # Llamadas a OpenAI API ├── styles/ │ └── index.css # Estilos globales (importa Tailwind) └── utils/ └── constants.js # Constantes globales (API Keys y URLs)
