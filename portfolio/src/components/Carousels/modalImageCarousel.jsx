// src/components/Carousels/modalImageCarousel.jsx
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function ModalImageCarousel({
  project,
  heightClass = "h-56 sm:h-80 md:h-96 lg:h-[32rem]",
}) {
  const [currentModalIndex, setCurrentModalIndex] = useState(0);

  const nextModalImage = () =>
    setCurrentModalIndex((i) => (i + 1) % project.images.length);
  const prevModalImage = () =>
    setCurrentModalIndex(
      (i) => (i - 1 + project.images.length) % project.images.length
    );

  return (
    // contenedor con altura responsiva; overflow-hidden evita que la imagen "salga"
    <div
      className={`mb-6 relative ${heightClass} w-full rounded-lg overflow-hidden bg-gray-800`}
    >
      {/* Imagen usando object-cover para mantener proporción sin "aplasta" */}
      <img
        src={project.images[currentModalIndex]}
        loading="lazy"
        alt={`${project.title} - Imagen ${currentModalIndex + 1}`}
        className="w-full h-full object-cover transition-transform duration-300"
        style={{ transformOrigin: "center" }}
      />

      {/* Indicadores */}
      {project.images.length > 1 && (
        <>
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
            {project.images.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  currentModalIndex === index ? "bg-accent" : "bg-white/50"
                }`}
                onClick={() => setCurrentModalIndex(index)}
                aria-label={`Ver imagen ${index + 1}`}
              />
            ))}
          </div>

          {/* Flechas */}
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 text-white p-3 rounded-full hover:bg-black/50 transition-colors z-20"
            onClick={prevModalImage}
            aria-label="Imagen anterior"
          >
            <FaArrowLeft />
          </button>

          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 text-white p-3 rounded-full hover:bg-black/50 transition-colors z-20"
            onClick={nextModalImage}
            aria-label="Siguiente imagen"
          >
            <FaArrowRight />
          </button>
        </>
      )}
    </div>
  );
}
