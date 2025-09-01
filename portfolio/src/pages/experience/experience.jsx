import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaHammer } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { FiLogOut } from "react-icons/fi";
import { useExperiences } from "./experiences";
import { useSectionTracking } from "../../hooks/useSectionTracking";
import { trackExperienceDemo, trackExperienceExpand, trackExperienceView } from "../../analytics";

export default function Experience() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useSectionTracking("Experience");

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const experiences = useExperiences();

  // Función para abrir modal de experiencia con tracking
  const handleViewMore = (exp) => {
    trackExperienceView(exp.company);
    setOpen(exp);
  };

  // Función para manejar demo con tracking
  const handleDemoClick = (exp, e) => {
    e.preventDefault();
    e.stopPropagation();
    trackExperienceDemo(exp.company);
    window.open(exp.demo, '_blank', 'noopener,noreferrer');
  };

  // Función para mostrar más/menos experiencias
  const handleShowAllToggle = () => {
    const newShowAll = !showAll;
    trackExperienceExpand(newShowAll ? 'expand' : 'collapse');
    setShowAll(newShowAll);
    if (newShowAll === false) {
      scrollToSection("exp");
    }
  };

  return (
    <section
      ref={sectionRef}
      id="exp"
      className="bg-gray-50 dark:bg-gray-900 min-h-[60vh] pt-15 sm:pt-20 lg:pt-25 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <div className="text-start mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl inline-flex items-center font-bold text-accent dark:text-accent"
          >
            <FaHammer className="mr-1" />
            {t("experience.title", { defaultValue: "Experiencia Laboral" })}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-3 text-lg sm:text-lg lg:text-xl font-semibold text-muted dark:text-primary/80 mx-auto mb-6"
          >
            {t("experience.lead", {
              defaultValue:
                "Trayectoria profesional en proyectos reales, soporte y despliegues.",
            })}
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* línea vertical */}
          <div className="absolute left-[29px] top-0 bottom-0 w-0.5 bg-muted/30" />

          <div className="space-y-12 relative z-10">
            {experiences
              .slice(0, showAll ? experiences.length : 2)
              .map((exp) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45 }}
                  viewport={{ once: true }}
                  className="relative flex items-start"
                >
                  {/* Icono redondo */}
                  <div className="flex-shrink-0 relative z-10 mr-6">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white shadow-md">
                      <exp.icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Card */}
                  <div className="flex-1 bg-gray-200/80 dark:bg-gray-950/20 p-6 rounded-2xl shadow-lg backdrop-blur">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <h3 className="text-lg font-semibold text-accent dark:text-accent">
                        {exp.role}
                      </h3>
                      <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-sm font-medium md:text-base text-muted dark:text-primary">
                      {exp.company} • {exp.location}
                    </p>

                    <p className="mt-3 text-sm text-muted">{exp.short}</p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {exp.bullets.map((b, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 rounded-full bg-bg/10 text-accent dark:bg-accent/10 dark:text-secondary"
                        >
                          {b}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 flex items-center gap-3">
                      <button
                        onClick={() => handleViewMore(exp)}
                        className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-accent text-white text-sm font-medium shadow hover:bg-accent/90 transition-colors"
                        aria-label={`Ver más detalles de ${exp.company}`}
                      >
                        {t("experience.viewMore", { defaultValue: "Ver más" })}
                      </button>
                      {exp.demo && (
                        <button
                          onClick={(e) => handleDemoClick(exp, e)}
                          className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 text-primary text-sm font-medium shadow hover:bg-white/10 transition-colors"
                          aria-label={`Ver demo de ${exp.company}`}
                        >
                          <FaExternalLinkAlt />{" "}
                          {t("experience.demo", { defaultValue: "Demo" })}
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>

        {/* Botón mostrar más / menos */}
        {experiences.length > 2 && (
          <div className="mt-10 text-center">
            <button
              onClick={handleShowAllToggle}
              className="px-5 py-3 bg-accent/10 hover:bg-accent/20 text-accent font-medium rounded-xl shadow transition-colors"
              aria-label={showAll ? "Mostrar menos experiencias" : "Mostrar más experiencias"}
            >
              {showAll
                ? t("experience.viewLess", { defaultValue: "Ver menos" })
                : t("experience.viewMoreExperiences", {
                    defaultValue: "Ver más experiencias",
                  })}
            </button>
          </div>
        )}

        {/* Modal detalles */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={() => setOpen(null)}
            >
              <motion.div
                initial={{ scale: 0.98, y: 10 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.98, y: 10 }}
                transition={{ duration: 0.18 }}
                className="max-w-3xl w-full bg-white/90 dark:bg-white/5 rounded-2xl p-6 shadow-xl backdrop-blur-3xl"
                role="dialog"
                aria-modal="true"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-accent dark:text-accent">
                    {open.company}
                  </h3>
                  <div className="text-sm font-semibold text-surface dark:text-primary mt-1">
                    {open.role} — {open.period}
                  </div>
                  <ul className="mt-4 list-disc list-inside text-sm text-muted dark:text-muted space-y-2">
                    {open.allBullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>

                  <div className="mt-6 flex items-center gap-3">
                    {open.demo && (
                      <button
                        onClick={(e) => handleDemoClick(open, e)}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-white font-medium shadow hover:bg-accent/90 transition-colors"
                      >
                        {t("experience.viewDemo", { defaultValue: "Ver demo" })}
                      </button>
                    )}
                    <button
                      onClick={() => setOpen(null)}
                      className="ml-auto gap-2 px-3 py-2 rounded-lg font-medium shadow bg-gray-500 dark:bg-muted text-primary hover:bg-muted/50 inline-flex items-center transition-colors"
                      aria-label="Cerrar modal"
                    >
                      <FiLogOut className="ml-1" />
                    </button>
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