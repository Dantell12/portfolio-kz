// src/components/Carousels/modalImageCarousel.jsx
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function ModalImageCarousel({ project }) {
  const [currentModalIndex, setCurrentModalIndex] = useState(0);

  const nextModalImage = () =>
    setCurrentModalIndex((i) => (i + 1) % project.images.length);
  const prevModalImage = () =>
    setCurrentModalIndex((i) => (i - 1 + project.images.length) % project.images.length);

  return (
    <div className="mb-6 h-60 sm:h-96 relative">
      <img
        src={project.images[currentModalIndex]}
        alt={`${project.title} - Imagen ${currentModalIndex + 1}`}
        className="w-full h-full object-fill rounded-lg"
      />

      {project.images.length > 1 && (
        <>
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {project.images.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${currentModalIndex === index ? "bg-accent" : "bg-white/50"}`}
                onClick={() => setCurrentModalIndex(index)}
                aria-label={`Ver imagen ${index + 1}`}
              />
            ))}
          </div>

          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 text-white p-3 rounded-full hover:bg-black/50 transition-colors"
            onClick={prevModalImage}
            aria-label="Imagen anterior"
          >
            <FaArrowLeft />
          </button>

          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 text-white p-3 rounded-full hover:bg-black/50 transition-colors"
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
