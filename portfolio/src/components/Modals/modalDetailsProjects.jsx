// src/components/Modals/modalDetailsProjects.jsx
import { motion, AnimatePresence } from "framer-motion";
import ModalImageCarousel from "../Carousels/modalImageCarousel";
import { FaExternalLinkAlt, FaFilePdf, FaGithub } from "react-icons/fa";

export default function ModalDetailsProjects({ showDetailModal, selectedProject, onClose }) {
  return (
    <AnimatePresence>
      {showDetailModal && selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={onClose} // <-- pasar la referencia, no ejecutarla ahora
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-surface rounded-2xl shadow-xl max-w-5xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              {/* Encabezado del modal */}
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-primary">{selectedProject.title}</h3>
                <button
                  onClick={onClose}
                  className="text-muted hover:text-primary transition-colors text-xl"
                >
                  ✕
                </button>
              </div>

              {/* Carrusel de imágenes en el modal */}
              <ModalImageCarousel project={selectedProject} />

              {/* Contenido del modal */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Izquierda */}
                <div>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-primary mb-2">Descripción</h4>
                    <p className="text-secondary">{selectedProject.fullDescription}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-primary mb-2">Tecnologías Utilizadas</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span key={index} className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Derecha */}
                <div>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-primary mb-2">Problema Resuelto</h4>
                    <p className="text-secondary">{selectedProject.problem}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-primary mb-2">Solución Implementada</h4>
                    <p className="text-secondary">{selectedProject.solution}</p>
                  </div>
                </div>
              </div>

              {/* Funcionalidades / Retos / Logros */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-2">Funcionalidades</h4>
                  <ul className="text-secondary list-disc list-inside space-y-1 text-sm">
                    {selectedProject.features?.slice(0, 4).map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-2">Retos Superados</h4>
                  <ul className="text-secondary list-disc list-inside space-y-1 text-sm">
                    {selectedProject.challenges?.slice(0, 4).map((challenge, index) => (
                      <li key={index}>{challenge}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-2">Logros</h4>
                  <ul className="text-secondary list-disc list-inside space-y-1 text-sm">
                    {selectedProject.achievements?.slice(0, 4).map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Botones de acción */}
              <div className="flex gap-3 mt-8">
                {selectedProject.demoUrl && (
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors"
                  >
                    <FaExternalLinkAlt className="text-xs" />
                    Ver Demo
                  </a>
                )}

                {selectedProject.codeUrl && (
                  <a
                    href={selectedProject.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 text-primary font-medium hover:bg-white/10 transition-colors"
                  >
                    <FaGithub />
                    Ver Código
                  </a>
                )}

                {selectedProject.document && (
                  <a
                    href={selectedProject.document}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 text-primary font-medium hover:bg-white/10 transition-colors"
                  >
                    <FaFilePdf />
                    Ver Documento
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
