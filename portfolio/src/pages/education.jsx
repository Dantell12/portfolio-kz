import { motion } from "framer-motion";
import {
  FaAward,
  FaGraduationCap,
  FaSchool,
  FaUniversity,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useMemo } from "react";

import { useSectionTracking } from "../hooks/useSectionTracking.jsx";

export default function Education() {
  const { t } = useTranslation();
  const sectionRef = useSectionTracking("Education");

  // progreso dinámico universidad
  const progressUniversidad = useMemo(() => {
    const start = new Date(2021, 10, 1); // Nov 1, 2021
    const end = new Date(2026, 4, 31, 23, 59, 59); // May 31, 2026
    const now = new Date();
    const total = end.getTime() - start.getTime();
    const gone = now.getTime() - start.getTime();
    if (total <= 0) return 0;
    const p = Math.round(Math.max(0, Math.min(100, (gone / total) * 100)));
    return p;
  }, []);

  return (
    <section
      id="education"
      ref={sectionRef}
      className="bg-gray-50 dark:bg-gray-900  min-h-[60vh] pt-15 sm:pt-20 lg:pt-25 py-12 px-4 sm:px-6 lg:px-8"
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
            <FaUniversity className="mr-1" />
            {t("education.title", { defaultValue: "Educación" })}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-3 text-lg sm:text-lg lg:text-xl font-semibold text-muted dark:text-primary/80 mx-auto mb-6"
          >
            {t("education.lead", {
              defaultValue:
                "Mi trayectoria académica y desarrollo profesional continuo.",
            })}
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Línea del timeline */}
          <div className="absolute left-[29px] top-0 bottom-0 w-0.5 bg-muted/30"></div>

          <div className="space-y-12">
            {/* Universidad */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              viewport={{ once: true }}
              className="relative flex items-start"
            >
              {/* Icono */}
              <div className="flex-shrink-0 relative z-10 mr-6">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white shadow-md">
                  <FaGraduationCap className="w-5 h-5" />
                </div>
              </div>

              {/* Card */}
              <div className="bg-gray-200/80 dark:bg-gray-950/20 p-6 rounded-2xl shadow-lg flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <h4 className="text-lg font-semibold text-accent dark:text-accent">
                    Universidad Técnica de Machala
                  </h4>
                  <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                    {t("education.university.dates", {
                      defaultValue: "Nov 2021 — May 2026 (est.)",
                    })}
                  </span>
                </div>

                <p className="text-secondary text-sm md:text-base mb-2">
                  <span className="font-medium text-muted dark:text-primary">
                    {t("education.university.degree", {
                      defaultValue:
                        "Ingeniería en Tecnologías de la Información",
                    })}
                  </span>
                </p>

                <p className="text-muted text-sm mb-4">
                  {t("education.university.description", {
                    defaultValue:
                      "Formación universitaria orientada al desarrollo de software, bases de datos, redes, seguridad informática e IoT.",
                  })}
                </p>

                {/* Chips */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs px-2 py-1 rounded-full  bg-bg/10 text-accent dark:bg-accent/10 dark:text-secondary">
                    {t("education.skills.software", {
                      defaultValue: "Desarrollo de Software",
                    })}
                  </span>
                  <span className="text-xs px-2 py-1 rounded-full  bg-bg/10 text-accent dark:bg-accent/10 dark:text-secondary">
                    {t("education.skills.databases", {
                      defaultValue: "Bases de Datos",
                    })}
                  </span>
                  <span className="text-xs px-2 py-1 rounded-full  bg-bg/10 text-accent dark:bg-accent/10 dark:text-secondary">
                    {t("education.skills.networks", { defaultValue: "Redes" })}
                  </span>
                </div>

                {/* Progress bar dinámico */}
                <div>
                  <div className="w-full bg-muted/20 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${progressUniversidad}%` }}
                      transition={{ duration: 1 }}
                      viewport={{ once: true }}
                      className="h-3 bg-accent  dark:bg-accent rounded-full"
                    ></motion.div>
                  </div>

                  {progressUniversidad === 100 ? (
                    <p className="text-sm text-accent dark:text-accent mt-1 inline-flex items-center font-medium">
                      <FaAward className="mr-1" />{" "}
                      {t("education.progress.finished", {
                        defaultValue: "Completado",
                      })}
                    </p>
                  ) : (
                    <p className="text-sm text-muted dark:text-muted mt-1">
                      {progressUniversidad}%{" "}
                      {t("education.progress.completed", {
                        defaultValue: "completado",
                      })}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Escuela */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              viewport={{ once: true }}
              className="relative flex items-start"
            >
              {/* Icono */}
              <div className="flex-shrink-0 relative z-10 mr-6">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white shadow-md">
                  <FaSchool className="w-5 h-5" />
                </div>
              </div>

              {/* Card */}
              <div className="flex-1 bg-gray-200/80 dark:bg-gray-950/20 p-6 rounded-2xl shadow-lg backdrop-blur">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <h4 className="text-lg font-semibold text-accent dark:text-accent">
                    Colegio de Bachillerato "Juan Montalvo"
                  </h4>
                  <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                    {t("education.highschool.dates", {
                      defaultValue: "2016 — 2021",
                    })}
                  </span>
                </div>

                <p className="text-secondary text-sm md:text-base mt-3">
                  <span className="font-medium text-muted dark:text-primary">
                    {t("education.highschool.degree", {
                      defaultValue: "Bachillerato en Ciencias",
                    })}
                  </span>
                </p>

                <p className="text-muted text-sm mt-3">
                  {t("education.highschool.description", {
                    defaultValue:
                      "Formación secundaria con especialización en informática y programación básica.",
                  })}
                </p>

                {/* Progress bar completado */}
                <div>
                  <div className="w-full bg-muted/20 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 1 }}
                      viewport={{ once: true }}
                      className="h-3 bg-accent dark:bg-accent rounded-full"
                    ></motion.div>
                  </div>
                  <p className="text-sm text-green-600 mt-1 inline-flex items-center font-medium">
                    <FaAward className="mr-1" />{" "}
                    {t("education.progress.finished", {
                      defaultValue: "Completado",
                    })}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
