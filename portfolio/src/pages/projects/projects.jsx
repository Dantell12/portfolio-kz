// src/pages/Projects.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaCode, FaCodeBranch, FaHammer } from "react-icons/fa";
import { useTranslation } from "react-i18next";

import TechnologyStack from "../../components/Dropdowns/techDropdown";
import ImageCarousel from "../../components/Carousels/imageCarousel";
import ModalDetailsProjects from "../../components/Modals/modalDetailsProjects";
import { useProjectsDetail } from "./projects_detail";

export default function Projects() {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState({});

  const projects = useProjectsDetail();

  // Inicializar el índice de imagen para cada proyecto (cuando projects cambie)
  useEffect(() => {
    const initialIndexes = {};
    projects.forEach((project) => {
      initialIndexes[project.id] = 0;
    });
    setCurrentImageIndex(initialIndexes);
  }, [projects]);

  const openProjectDetail = (project, e) => {
    if (e) e.stopPropagation();
    setSelectedProject(project);
    setShowDetailModal(true);
  };

  const closeProjectDetail = () => {
    setShowDetailModal(false);
    // opcional: limpiar selectedProject un poco después para animación
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <section
      id="projects"
      className="bg-bgsecondary dark:bg-bg min-h-screen pt-25 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Encabezado */}
        <div className="text-start mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl inline-flex items-center font-bold text-accent dark:text-accent"
          >
            <FaCodeBranch className="mr-1" />
            {t("projects.title", { defaultValue: "Proyectos Destacados" })}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-3 text-lg sm:text-lg lg:text-xl font-semibold text-muted dark:text-primary/80 mx-auto mb-6"
          >
            {t("projects.subtitle", {
              defaultValue:
                "Algunos de mis trabajos recientes donde aplico mis conocimientos en desarrollo web.",
            })}
          </motion.p>
        </div>

        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              onClick={() => openProjectDetail(project)}
              className="group relative z-0 hover:z-50 focus:z-50 bg-surface backdrop-blur-3xl rounded-2xl shadow-lg overflow-visible flex flex-col h-full transition-transform duration-500 hover:scale-105 hover:border-accent hover:border-2 hover:shadow-lg hover:shadow-accent"
              tabIndex={0}
            >
              {/* Carrusel de imágenes del proyecto */}
              <ImageCarousel project={project} />

              {/* Contenido de la card */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Título del proyecto */}
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {project.title}
                </h3>

                {/* Tecnologías */}
                <div className="mb-4">
                  <TechnologyStack technologies={project.technologies} />
                </div>

                {/* Descripción corta (flex-grow para empujar footer) */}
                <p className="text-secondary text-sm mb-6 flex-grow">
                  {project.shortDescription}
                </p>

                {/* Contenedor de botones para mobile / md */}
                <div className="mt-4">
                  <div
                    className="
                      overflow-visible
                      md:overflow-hidden md:max-h-0
                      md:transition-all md:duration-300 md:ease-in-out
                      md:pointer-events-none
                      md:group-hover:max-h-32 md:group-hover:pointer-events-auto
                    "
                  >
                    <div className="flex gap-3">
                      <button
                        onClick={(e) => openProjectDetail(project, e)}
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors text-sm"
                      >
                        <FaCode className="text-xs" />
                        Ver detalles
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal de detalles */}
        <ModalDetailsProjects
          showDetailModal={showDetailModal}
          selectedProject={selectedProject}
          onClose={closeProjectDetail}
        />
      </div>
    </section>
  );
}
