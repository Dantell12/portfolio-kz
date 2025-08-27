// src/components/Carousels/imageCarousel.jsx
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function ImageCarousel({ project }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = (e) => {
    e?.stopPropagation();
    setCurrentIndex((i) => (i + 1) % project.images.length);
  };

  const prevImage = (e) => {
    e?.stopPropagation();
    setCurrentIndex(
      (i) => (i - 1 + project.images.length) % project.images.length
    );
  };

  return (
    <div className="h-48 overflow-hidden relative">
      <img
        src={project.images[currentIndex]}
        alt={`${project.title} - Imagen ${currentIndex + 1}`}
        className="w-full h-full px-3 py-3 rounded-t-3xl object-cover transition-transform duration-500"
      />

      {/* Indicadores de imagen */}
      {project.images.length > 1 && (
        <>
          <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
            {project.images.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${
                  currentIndex === index ? "bg-accent" : "bg-white/50"
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(index);
                }}
                aria-label={`Ver imagen ${index + 1}`}
              />
            ))}
          </div>

          {/* Botones de navegación */}
          <button
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors"
            onClick={prevImage}
            aria-label="Imagen anterior"
          >
            <FaArrowLeft className="text-xs" />
          </button>

          <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors"
            onClick={nextImage}
            aria-label="Siguiente imagen"
          >
            <FaArrowRight className="text-xs" />
          </button>
        </>
      )}
    </div>
  );
}
