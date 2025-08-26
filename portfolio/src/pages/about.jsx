import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaUserAlt,
  FaDownload,
  FaLightbulb,
  FaCogs,
  FaStar,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

function TimelineItem({ date, title, children, highlight }) {
  return (
    <div className="relative pl-6">
      <div className="absolute left-0 top-1">
        <span
          className={
            "flex items-center justify-center w-3 h-3 rounded-full " +
            (highlight ? "bg-accent dark:bg-accent" : "bg-muted")
          }
          aria-hidden
        />
      </div>
      <div className="text-sm text-accent dark:text-accent font-semibold">
        {date}
      </div>
      <div className="mt-1 text-sm text-secondary dark:text-gray-300">
        {title}
      </div>
      {children && (
        <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          {children}
        </div>
      )}
    </div>
  );
}

function StatCard({ title, value, icon: Icon }) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-2xl bg-bg dark:bg-white/5 shadow-sm">
      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10">
        <Icon className="w-5 h-5 text-accent" />
      </div>
      <div>
        <div className="text-lg font-semibold text-primary">{value}</div>
        <div className="text-sm text-muted dark:text-muted/80">{title}</div>
      </div>
    </div>
  );
}

export default function About() {
  const { t } = useTranslation();
  const [openLong, setOpenLong] = useState(false);

  return (
    <>
      <section
        className="bg-bgsecondary dark:bg-bg min-h-screen pt-25 py-12 px-4 sm:px-6 lg:px-8"
        id="about"
      >
        <div className="relative block max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl inline-flex items-center font-bold text-accent dark:text-accent"
          >
            <FaStar className="mr-1" /> Conóceme
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-3 text-lg sm:text-lg lg:text-xl font-semibold text-muted dark:text-primary/80 mx-auto mb-6"
          >
            ¿Quieres saber más sobre mi?
          </motion.p>
        </div>
        <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-3">
          {/* LEFT: HERO CARD */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-1 flex flex-col gap-6"
          >
            <div className="bg-surface backdrop-blur-3xl rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-4">
                <img
                  src="src/assets/me.png"
                  alt={t("about.imageAlt", { defaultValue: "Foto de Kevin" })}
                  className="w-20 h-20 rounded-xl object-cover shadow-sm"
                />
                <div>
                  <h3 className="text-xl font-bold text-primary">
                    Kevin Zuñiga
                  </h3>
                  <p className="text-sm text-secondary">
                    {t("aboutrole", {
                      defaultValue: "Desarrollador Full Stack",
                    })}
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm text-secondary leading-relaxed">
                {t("aboutshort", {
                  defaultValue:
                    "Desarrollador apasionado por transformar problemas en soluciones con código. Experiencia full-stack y despliegues en producción.",
                })}
              </p>

              <div className="mt-6 grid grid-cols-1 gap-3">
                <StatCard
                  title={t("about.stat1title", {
                    defaultValue: "Proyectos en producción",
                  })}
                  value={t("about.stat1value", { defaultValue: "1 (ISP)" })}
                  icon={FaCogs}
                />
                <StatCard
                  title={t("about.stat2title", {
                    defaultValue: "Stack preferido",
                  })}
                  value={t("about.stat2value", {
                    defaultValue: "React • Node.js",
                  })}
                  icon={FaLightbulb}
                />
              </div>
            </div>

            {/* small callout */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-surface backdrop-blur-3xl rounded-2xl p-6 shadow-lg"
            >
              <div className="flex items-start gap-3">
                <div className="text-2xl text-accent">
                  <FaUserAlt />
                </div>
                <div>
                  <div className="text-sm text-primary dark:text-primary/80">
                    {t("about.philosophyTitle", {
                      defaultValue: "Mi filosofía",
                    })}
                  </div>
                  <div className="mt-1 text-sm text-secondary">
                    {t("about.philosophy", {
                      defaultValue:
                        "Programar es resolver problemas con lógica, escribir código claro y mejorar procesos continuamente.",
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.aside>

          {/* RIGHT: Timeline + Details */}
          <motion.section
             initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            className="lg:col-span-2 bg-surface backdrop-blur-3xl rounded-2xl p-6 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-primary mb-2">
              {t("about.title", { defaultValue: "Mi Historia Profesional" })}
            </h2>
            <p className="text-sm text-secondary mb-6">
              {t("about.leadin", {
                defaultValue:
                  "Desde Java de escritorio hasta despliegues web en producción — un camino de aprendizaje y práctica.",
              })}
            </p>

            <div className="grid gap-6 lg:grid-cols-2">
              {/* TIMELINE */}
              <div>
                <div className="relative pl-6 before:content-[''] before:absolute before:left-1.5 before:top-3 before:bottom-3 before:w-[2px] before:bg-muted/40 dark:before:bg-muted/20">
                  <TimelineItem
                    date={t("about.t1date", { defaultValue: "Universidad" })}
                    title={t("about.t1title", {
                      defaultValue: "Inicio — Java / Eclipse",
                    })}
                    highlight
                  >
                    {t("about.t1desc", {
                      defaultValue:
                        "Primeros semestres aprendiendo Java en Eclipse; bases de programación y paradigmas OOP.",
                    })}
                  </TimelineItem>

                  <div className="mt-6">
                    <TimelineItem
                      date={t("about.t2date", { defaultValue: "Proyectos" })}
                      title={t("about.t2title", {
                        defaultValue: "Desktop → C# / Visual Studio",
                      })}
                      highlight
                    >
                      {t("about.t2desc", {
                        defaultValue:
                          "Desarrollo de aplicaciones de escritorio, control de versiones y buenas prácticas.",
                      })}
                    </TimelineItem>
                  </div>

                  <div className="mt-6">
                    <TimelineItem
                      date={t("about.t3date", { defaultValue: "Web" })}
                      title={t("about.t3title", {
                        defaultValue: "Web — Angular, Node.js, React",
                      })}
                      highlight
                    >
                      {t("about.t3desc", {
                        defaultValue:
                          "Me especialicé en desarrollo web, APIs y despliegues en servidor.",
                      })}
                    </TimelineItem>
                  </div>

                  <div className="mt-6">
                    <TimelineItem
                      date={t("about.t4date", { defaultValue: "Producción" })}
                      title={t("about.t4title", {
                        defaultValue: "Sistema ISP — Facturación y Deploy",
                      })}
                      highlight
                    >
                      {t("about.t4desc", {
                        defaultValue:
                          "Participé en un sistema de gestión para ISP: facturación electrónica, mapeo de servicios y despliegue en producción.",
                      })}
                    </TimelineItem>
                  </div>
                </div>
              </div>

              {/* DIFFERENTIATORS + ACCORDION */}
              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="p-4 rounded-2xl bg-bg dark:bg-white/5 shadow-sm"
                  >
                    <h4 className="text-sm font-semibold text-primary">
                      {t("about.diffTitle1", {
                        defaultValue: "Aprendizaje rápido",
                      })}
                    </h4>
                    <p className="text-sm text-secondary mt-2">
                      {t("about.diff1", {
                        defaultValue:
                          "Autodidacta: investigo y domino nuevas librerías en poco tiempo.",
                      })}
                    </p>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -4 }}
                    className="p-4 rounded-2xl bg-bg dark:bg-white/5 shadow-sm"
                  >
                    <h4 className="text-sm font-semibold text-primary">
                      {t("about.diffTitle2", {
                        defaultValue: "Visión full-stack",
                      })}
                    </h4>
                    <p className="text-sm text-secondary mt-2">
                      {t("about.diff2", {
                        defaultValue:
                          "Comprendo desde la infra hasta la interfaz: redes, hardware y software conectados.",
                      })}
                    </p>
                  </motion.div>
                </div>

                {/* Accordion: versión larga */}
                <div className="mt-2">
                  <button
                    onClick={() => setOpenLong((s) => !s)}
                    className="w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-accent/10 hover:bg-accent/20 text-accent font-medium"
                    aria-expanded={openLong}
                  >
                    <span>
                      {t("about.longTitle", {
                        defaultValue: "Versión completa",
                      })}
                    </span>
                    <span className="text-sm text-secondary/50">
                      {openLong
                        ? t("about.collapse", { defaultValue: "Cerrar" })
                        : t("about.expand", { defaultValue: "Leer más" })}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {openLong && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="overflow-hidden mt-3"
                      >
                        <div className="p-4 rounded-xl bg-bg dark:bg-white/5 shadow-inner text-sm text-secondary leading-relaxed">
                          <p className="mb-3">
                            {t("about.long1", {
                              defaultValue:
                                "Soy estudiante de Ingeniería en Tecnologías de la Información especializado en desarrollo de software. Mi trayectoria comenzó con Java y desarrollo de escritorio (Eclipse, NetBeans, Visual Studio/C#) y evolucionó hacia el desarrollo web (Angular, Node.js, React).",
                            })}
                          </p>
                          <p className="mb-3">
                            {t("about.long2", {
                              defaultValue:
                                "Me apasiona resolver problemas mediante programación: diseño soluciones claras, optimizo procesos y automatizo tareas que mejoran la operativa. Me destaco por aprender rápidamente tecnologías nuevas, por mi atención al detalle y por combinar conocimientos de software y redes para entregar soluciones completas.",
                            })}
                          </p>
                          <p>
                            {t("about.long3", {
                              defaultValue:
                                "Fuera del trabajo me considero una persona tranquila y colaborativa; disfruto compartir con amigos y seguir formándome en programación mediante proyectos personales y tutoriales.",
                            })}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </section>
    </>
  );
}
