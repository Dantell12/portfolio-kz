import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaChevronDown,
  FaArrowLeft,
  FaArrowRight,
  FaCode,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [hoveredTechIndex, setHoveredTechIndex] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const techTooltipRef = useRef(null);

  // Ajustar posición del tooltip
  useEffect(() => {
    if (hoveredTechIndex !== null && techTooltipRef.current) {
      const tooltip = techTooltipRef.current;
      const rect = tooltip.getBoundingClientRect();

      if (rect.right > window.innerWidth) {
        tooltip.style.left = "auto";
        tooltip.style.right = "0";
      }
    }
  }, [hoveredTechIndex]);

  // Datos del proyecto iControl System
  const projects = [
    {
      id: 1,
      title: "iControl System",
      shortDescription:
        "Sistema integral de gestión para ISP con mapeo de servicios, facturación electrónica y administración de empleados.",
      fullDescription:
        "Sistema completo para proveedores de internet que incluye mapeo de servicios, gestión de clientes, facturación electrónica compatible con el SRI de Ecuador y administración de empleados con control de roles. Desarrollado con arquitectura de microservicios y desplegado en producción.",
      images: [
        "/projects/icontrol1.png",
        "/projects/icontrol2.png",
        "/projects/icontrol3.png",
        "/projects/icontrol4.png",
        "/projects/icontrol5.png",
        "/projects/icontrol6.png",
        "/projects/icontrol7.png",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "Docker",
        "Microservicios",
        "Leaflet",
        "Cloudinary",
        "JWT",
        "BullMQ",
        "Redis",
        "Tailwind CSS",
      ],
      problem:
        "Los ISP necesitaban una solución integral para mapear servicios de clientes, gestionar cajas de fibra óptica, administrar empleados con diferentes roles y realizar facturación electrónica compatible con el SRI de Ecuador.",
      solution:
        "Desarrollo de un sistema modular con arquitectura de microservicios que permite la gestión completa de todos los aspectos operativos de un ISP, desde el mapeo geográfico hasta la emisión de comprobantes electrónicos.",
      features: [
        "Mapa interactivo con Leaflet para visualización de servicios",
        "Módulo de empleados con roles y permisos",
        "Gestión de clientes y servicios múltiples",
        "Facturación electrónica compatible con SRI",
        "Generación automática de deudas con BullMQ",
        "Envío de comprobantes por correo con Nodemailer",
        "API Gateway para unificar microservicios",
        "Autenticación JWT con control de acceso",
      ],
      challenges: [
        "Integración compleja con API del SRI para comprobantes electrónicos",
        "Manejo de grandes volúmenes de datos geográficos",
        "Implementación de sistema de colas para procesos asíncronos",
        "Diseño de base de datos con 28 tablas optimizadas",
        "Coordinación de múltiples microservicios dockerizados",
      ],
      achievements: [
        "Sistema en producción con más de 100 usuarios activos",
        "Reducción del 60% en tiempo de procesos manuales",
        "Implementación exitosa de facturación electrónica",
        "Arquitectura escalable con microservicios",
        "Interfaz responsive y intuitiva",
      ],
      demoUrl: "https://icontrol-app-isp-lilac.vercel.app",
      codeUrl: "https://github.com/tu-usuario/icontrol-system",
      type: "fullstack",
    },

    {
      id: 2,
      title: "Veterinary Clinic System",
      shortDescription:
        "Aplicación de escritorio para gestión de clínicas veterinarias: pacientes, citas, inventario, tratamientos y facturación.",
      fullDescription:
        "Sistema de escritorio desarrollado en Visual Studio 2022 (.NET Framework) como proyecto para la asignatura de Programación Avanzada. Arquitectura en 4 capas (Datos, Lógica, Entidades, Presentación) con base de datos en SQL Server y más de 70 procedimientos almacenados para CRUD y lógica de negocio.",
      images: [
        "/projects/vet1.png",
        "/projects/vet2.png",
        "/projects/vet3.png",
        "/projects/vet4.png",
        "/projects/vet5.png",
        "/projects/vet6.png",
        "/projects/vet7.png",
        "/projects/vet8.png",
      ],
      technologies: [
        "C#",
        ".NET Framework",
        "WinForms",
        "SQL Server",
        "T-SQL (Stored Procedures)",
        "LINQ",
        "ADO.NET / dbmi",
        "POO",
      ],
      problem:
        "Las clínicas veterinarias necesitaban un sistema de escritorio para registrar clientes y mascotas, controlar citas, inventario de medicamentos, llevar historial clínico y generar facturas por servicios y tratamientos.",
      solution:
        "Desarrollé una aplicación de escritorio en Visual Studio 2022 con una arquitectura en 4 capas que permite registrar clientes y mascotas, agendar citas, llevar historial clínico/bitácoras, controlar inventario de medicamentos y generar facturación automatizada.",
      features: [
        "Registro de pacientes y dueños con historial clínico",
        "Agenda y control de citas (creación de bitácora tras la atención)",
        "Gestión de inventario de medicamentos",
        "Módulo de tratamientos/servicios por clínica",
        "Facturación automática según servicios y medicación",
        "Arquitectura en 4 capas (Datos, Lógica, Entidades, Presentación)",
        "Más de 70 procedimientos almacenados para operaciones CRUD y cálculos",
      ],
      challenges: [
        "Diseño del diagrama ER y normalización para soportar historial clínico",
        "Implementación de lógica de negocio distribuida en 4 capas",
        "Gran cantidad de procedimientos almacenados y vistas personalizadas",
        "Integración de facturación automática con precios de servicios y medicinas",
        "Manejo de transacciones y consistencia en SQL Server",
      ],
      achievements: [
        "Solución completa entregada como proyecto de Programación Avanzada",
        "Base de datos robusta con más de 70 SP, vistas y cálculos",
        "Implementación de arquitectura en capas aplicando POO y LINQ",
        "Interfaz de escritorio funcional y preparada para entornos productivos",
        "Código publicado en GitHub como evidencia del proyecto",
      ],
      demoUrl: "", // si no tienes demo online déjalo vacío o '#'
      codeUrl: "https://github.com/Dantell12/Veterinary-Clinic-Sys.git",
      type: "desktop",
    },
    {
      id: 3,
      title: "Bibliographic Management System - UTMACH",
      shortDescription:
        "Sistema para organizar y gestionar referencias académicas de investigadores en la Universidad Técnica de Machala.",
      fullDescription:
        "Un sistema de gestión bibliográfica que permite organizar, registrar y consultar publicaciones académicas. Facilita la administración de investigadores, artículos científicos y su vinculación con distintos tipos de publicaciones como revistas, informes técnicos o actas de congreso. Incluye CRUDs completos y uso de procedimientos almacenados en SQL Server.",
      images: [
        "/projects/biblio1.png",
        "/projects/biblio2.png",
        "/projects/biblio3.png",
        "/projects/biblio4.png",
        "/projects/biblio5.png",
        "/projects/biblio6.png",
      ],
      technologies: [
        "C#",
        "Visual Studio",
        "SQL Server",
        "Stored Procedures",
        "ER Modeling",
      ],
      problem:
        "La gestión manual de referencias académicas era ineficiente, dificultando la organización de investigadores y sus publicaciones en diferentes medios.",
      solution:
        "Se implementó un sistema de gestión bibliográfica que centraliza el manejo de investigadores, artículos científicos y publicaciones, con consultas optimizadas y procedimientos almacenados en SQL Server.",
      features: [
        "Gestión de investigadores y sus publicaciones",
        "CRUD completo de artículos científicos",
        "Soporte para revistas, informes técnicos y actas de congreso",
        "Modelo entidad-relación para la organización de datos",
      ],
      challenges: [
        "Diseño de un modelo ER escalable",
        "Optimización de procedimientos almacenados",
        "Garantizar consistencia en las relaciones entre investigadores y publicaciones",
      ],
      achievements: [
        "Estandarización del registro de publicaciones académicas",
        "Acceso más ágil a las referencias",
        "Base sólida para proyectos de investigación futuros en la universidad",
      ],
      codeUrl: "https://github.com/Dantell12/System-Bibliografy-Utmach.git",
      demo: null,
    },
    {
      id: 4,
      title: "Email Classifier - Spam & Phishing Detection",
      shortDescription:
        "Modelo predictivo basado en Machine Learning para identificar automáticamente correos electrónicos maliciosos (spam y phishing).",
      fullDescription:
        "Proyecto desarrollado en la materia de Inteligencia de Negocios con el objetivo de aplicar técnicas de Machine Learning para la detección de correos maliciosos. Se trabajó con un dataset de más de 16,000 correos electrónicos, aplicando preprocesamiento de texto (CountVectorizer con Bag of Words) y entrenando múltiples clasificadores: Multinomial y Bernoulli Naive Bayes, SVC, Random Forest, MLP Classifier, Logistic Regression, XGBoost y K-Nearest Neighbors. Los modelos fueron evaluados con métricas clave como Accuracy, Precision, Recall, F1-score, ROC-AUC y curvas Precision-Recall. Los mejores resultados se obtuvieron con XGBoost y Random Forest, destacando la efectividad de los métodos de ensamble. El proyecto demostró la aplicabilidad de ML en la ciberseguridad para fortalecer la detección de spam y phishing.",
      images: [
        "/projects/email1.png",
        "/projects/email2.png",
        "/projects/email3.png",
        "/projects/email4.png",
        "/projects/email5.png",
      ],
      technologies: [
        "Python",
        "Scikit-learn",
        "XGBoost",
        "Random Forest",
        "Logistic Regression",
        "Naive Bayes",
        "KNN",
        "SVC",
        "MLP",
        "Pandas",
        "Matplotlib",
      ],
      problem:
        "El incremento de correos electrónicos fraudulentos como spam y phishing representa una amenaza significativa para usuarios y empresas, dificultando su detección manual.",
      solution:
        "Construcción de un sistema de clasificación automática utilizando múltiples modelos de Machine Learning, evaluados con métricas avanzadas para garantizar precisión en la detección de correos maliciosos.",
      features: [
        "Preprocesamiento de datos con CountVectorizer (Bag of Words)",
        "Entrenamiento con múltiples clasificadores (Naive Bayes, Random Forest, XGBoost, SVC, entre otros)",
        "Evaluación con métricas Accuracy, Precision, Recall, F1-score, ROC-AUC",
        "Visualización de resultados con heatmaps y curvas de rendimiento",
      ],
      challenges: [
        "Manejo del desbalance de clases en el dataset",
        "Optimización de hiperparámetros para múltiples modelos",
        "Comparación objetiva entre distintos clasificadores",
      ],
      achievements: [
        "Modelos XGBoost y Random Forest alcanzaron la mayor precisión",
        "Implementación de un pipeline completo de preprocesamiento y evaluación",
        "Demostración exitosa de la utilidad del ML en ciberseguridad",
      ],
      codeUrl: "https://github.com/Dantell12/Email-Classifier.git",
      demo: null,
      document: "https://drive.google.com/file/d/1CVo8hzMosBMQeSn3fMZL6yDPH6o2b0bL/view?usp=sharing"
    },
    {
      id: 5,
      title: "iControl System",
      shortDescription:
        "Sistema integral de gestión para ISP con mapeo de servicios, facturación electrónica y administración de empleados.",
      fullDescription:
        "Sistema completo para proveedores de internet que incluye mapeo de servicios, gestión de clientes, facturación electrónica compatible con el SRI de Ecuador y administración de empleados con control de roles. Desarrollado con arquitectura de microservicios y desplegado en producción.",
      images: [
        "/projects/icontrol1.png",
        "/projects/icontrol2.png",
        "/projects/icontrol3.png",
        "/projects/icontrol4.png",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "Docker",
        "Microservicios",
        "Leaflet",
        "Cloudinary",
        "JWT",
        "BullMQ",
        "Redis",
        "Tailwind CSS",
      ],
      problem:
        "Los ISP necesitaban una solución integral para mapear servicios de clientes, gestionar cajas de fibra óptica, administrar empleados con diferentes roles y realizar facturación electrónica compatible con el SRI de Ecuador.",
      solution:
        "Desarrollo de un sistema modular con arquitectura de microservicios que permite la gestión completa de todos los aspectos operativos de un ISP, desde el mapeo geográfico hasta la emisión de comprobantes electrónicos.",
      features: [
        "Mapa interactivo con Leaflet para visualización de servicios",
        "Módulo de empleados con roles y permisos",
        "Gestión de clientes y servicios múltiples",
        "Facturación electrónica compatible con SRI",
        "Generación automática de deudas con BullMQ",
        "Envío de comprobantes por correo con Nodemailer",
        "API Gateway para unificar microservicios",
        "Autenticación JWT con control de acceso",
      ],
      challenges: [
        "Integración compleja con API del SRI para comprobantes electrónicos",
        "Manejo de grandes volúmenes de datos geográficos",
        "Implementación de sistema de colas para procesos asíncronos",
        "Diseño de base de datos con 28 tablas optimizadas",
        "Coordinación de múltiples microservicios dockerizados",
      ],
      achievements: [
        "Sistema en producción con más de 100 usuarios activos",
        "Reducción del 60% en tiempo de procesos manuales",
        "Implementación exitosa de facturación electrónica",
        "Arquitectura escalable con microservicios",
        "Interfaz responsive y intuitiva",
      ],
      demoUrl: "https://icontrol-app-isp-lilac.vercel.app",
      codeUrl: "https://github.com/tu-usuario/icontrol-system",
      type: "fullstack",
    },
    // Puedes agregar más proyectos aquí
  ];

  // Inicializar el índice de imagen para cada proyecto
  useEffect(() => {
    const initialIndexes = {};
    projects.forEach((project) => {
      initialIndexes[project.id] = 0;
    });
    setCurrentImageIndex(initialIndexes);
  }, []);

  const openProjectDetail = (project) => {
    setSelectedProject(project);
    setShowDetailModal(true);
  };

  const closeProjectDetail = () => {
    setShowDetailModal(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  const nextImage = (projectId, e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => {
      const currentIndex = prev[projectId];
      const project = projects.find((p) => p.id === projectId);
      const nextIndex = (currentIndex + 1) % project.images.length;
      return { ...prev, [projectId]: nextIndex };
    });
  };

  const prevImage = (projectId, e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => {
      const currentIndex = prev[projectId];
      const project = projects.find((p) => p.id === projectId);
      const prevIndex =
        (currentIndex - 1 + project.images.length) % project.images.length;
      return { ...prev, [projectId]: prevIndex };
    });
  };

  // Componente para mostrar las tecnologías con tooltip
  const TechnologyStack = ({ technologies }) => {
    const [showAll, setShowAll] = useState(false);

    return (
      <div className="flex flex-wrap items-center gap-2 relative">
        {technologies.slice(0, 3).map((tech, index) => (
          <span
            key={index}
            className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent"
          >
            {tech}
          </span>
        ))}

        {technologies.length > 3 && (
          <div className="relative">
            <button
              className="text-xs px-2 py-1 rounded-full bg-muted/20 text-muted flex items-center"
              onMouseEnter={() => setShowAll(true)}
              onMouseLeave={() => setShowAll(false)}
            >
              +{technologies.length - 3}
              <FaChevronDown className="ml-1 text-xs" />
            </button>

            {showAll && (
              <div
                ref={techTooltipRef}
                className="absolute top-full right-0 mt-2 p-3 bg-surface rounded-lg shadow-lg z-10 min-w-max"
                onMouseEnter={() => setShowAll(true)}
                onMouseLeave={() => setShowAll(false)}
              >
                <div className="flex flex-wrap gap-2">
                  {technologies.slice(3).map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  // Componente para el carrusel de imágenes
  const ImageCarousel = ({ project }) => {
    const currentIndex = currentImageIndex[project.id] || 0;

    return (
      <div className="h-48 overflow-hidden relative">
        <img
          src={project.images[currentIndex]}
          alt={`${project.title} - Imagen ${currentIndex + 1}`}
          className="w-full h-full px-3 py-3 rounded-t-3xl object-fill transition-transform duration-500 "
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
                    setCurrentImageIndex((prev) => ({
                      ...prev,
                      [project.id]: index,
                    }));
                  }}
                  aria-label={`Ver imagen ${index + 1}`}
                />
              ))}
            </div>

            {/* Botones de navegación */}
            <button
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors"
              onClick={(e) => prevImage(project.id, e)}
              aria-label="Imagen anterior"
            >
              <FaArrowLeft className="text-xs" />
            </button>

            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors"
              onClick={(e) => nextImage(project.id, e)}
              aria-label="Siguiente imagen"
            >
              <FaArrowRight className="text-xs" />
            </button>
          </>
        )}
      </div>
    );
  };

  // Componente para el carrusel en el modal
  const ModalImageCarousel = ({ project }) => {
    const [currentModalIndex, setCurrentModalIndex] = useState(0);

    const nextModalImage = () => {
      setCurrentModalIndex((currentModalIndex + 1) % project.images.length);
    };

    const prevModalImage = () => {
      setCurrentModalIndex(
        (currentModalIndex - 1 + project.images.length) % project.images.length
      );
    };

    return (
      <div className="mb-6 h-60 sm:h-96 lg:h-111 xl:h-129 relative">
        <img
          src={project.images[currentModalIndex]}
          alt={`${project.title} - Imagen ${currentModalIndex + 1}`}
          className="w-full h-full object-cover rounded-lg"
        />

        {project.images.length > 1 && (
          <>
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
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
  };

  return (
    <section
      id="projects"
      className="bg-bgsecondary dark:bg-bg py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-primary"
          >
            {t("projects.title", { defaultValue: "Proyectos Destacados" })}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-3 text-secondary max-w-2xl mx-auto text-sm md:text-base"
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
              className="group relative bg-surface backdrop-blur-3xl rounded-2xl shadow-lg overflow-hidden flex flex-col h-full transition-transform duration-500 hover:scale-105 hover:border-accent hover:border-2 hover:shadow-lg hover:shadow-accent"
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

                {/* Contenedor de botones: 
            - EN MOBILE: visible por defecto (overflow-visible)
            - EN MD+: colapsado con max-height:0 y se expande en group-hover (empuja contenido, no overlay)
        */}
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
                        onClick={() => openProjectDetail(project)}
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

        {/* Modal de detalles del proyecto */}
        <AnimatePresence>
          {showDetailModal && selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
              onClick={closeProjectDetail}
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
                    <h3 className="text-2xl font-bold text-primary">
                      {selectedProject.title}
                    </h3>
                    <button
                      onClick={closeProjectDetail}
                      className="text-muted hover:text-primary transition-colors text-xl"
                    >
                      ✕
                    </button>
                  </div>

                  {/* Carrusel de imágenes en el modal */}
                  <ModalImageCarousel project={selectedProject} />

                  {/* Contenido del modal */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Columna izquierda */}
                    <div>
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-primary mb-2">
                          Descripción
                        </h4>
                        <p className="text-secondary">
                          {selectedProject.fullDescription}
                        </p>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-primary mb-2">
                          Tecnologías Utilizadas
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Columna derecha */}
                    <div>
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-primary mb-2">
                          Problema Resuelto
                        </h4>
                        <p className="text-secondary">
                          {selectedProject.problem}
                        </p>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-primary mb-2">
                          Solución Implementada
                        </h4>
                        <p className="text-secondary">
                          {selectedProject.solution}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Funcionalidades, retos y logros */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    <div>
                      <h4 className="text-lg font-semibold text-primary mb-2">
                        Funcionalidades
                      </h4>
                      <ul className="text-secondary list-disc list-inside space-y-1 text-sm">
                        {selectedProject.features
                          .slice(0, 4)
                          .map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-primary mb-2">
                        Retos Superados
                      </h4>
                      <ul className="text-secondary list-disc list-inside space-y-1 text-sm">
                        {selectedProject.challenges
                          .slice(0, 4)
                          .map((challenge, index) => (
                            <li key={index}>{challenge}</li>
                          ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-primary mb-2">
                        Logros
                      </h4>
                      <ul className="text-secondary list-disc list-inside space-y-1 text-sm">
                        {selectedProject.achievements
                          .slice(0, 4)
                          .map((achievement, index) => (
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

                    {selectedProject.document && (
                      <a
                        href={selectedProject.document}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 text-primary font-medium hover:bg-white/10 transition-colors"
                      >
                        <FaGithub />
                        Ver Documento
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
