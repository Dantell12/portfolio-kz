import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTools,
  FaNetworkWired,
  FaServer,
  FaLaptopCode,
  FaExternalLinkAlt,
  FaDoorClosed,
  FaClosedCaptioning,
  FaWindowClose,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { FiLogOut } from "react-icons/fi";

export default function Experience() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const experiences = useMemo(
    () => [
      {
        id: "etyrse",
        company: "Etyrse.net",
        role: t("experience.etyrse.role", {
          defaultValue: "Desarrollador Full Stack",
        }),
        location: t("experience.etyrse.location", {
          defaultValue: "Machala, Ecuador",
        }),
        period: t("experience.etyrse.period", {
          defaultValue: "May 2024 — Aug 2024",
        }),
        short: t("experience.etyrse.short", {
          defaultValue:
            "Sistema integral para ISP: facturación electrónica, mapeo de clientes y panel administrativo.",
        }),
        bullets: [
          t("experience.etyrse.bullets.0", {
            defaultValue: "Integración con SRI para comprobantes.",
          }),
          t("experience.etyrse.bullets.1", {
            defaultValue: "Mapeo interactivo con Leaflet.",
          }),
          t("experience.etyrse.bullets.2", {
            defaultValue: "Arquitectura microservicios dockerizados.",
          }),
        ],
        allBullets: [
          t("experience.etyrse.allBullets.0", {
            defaultValue: "Integración con SRI.",
          }),
          t("experience.etyrse.allBullets.1", {
            defaultValue: "Registro de empleados con Cloudinary.",
          }),
          t("experience.etyrse.allBullets.2", {
            defaultValue: "Leaflet para geolocalización.",
          }),
          t("experience.etyrse.allBullets.3", {
            defaultValue: "Microservicios dockerizados + API Gateway.",
          }),
          t("experience.etyrse.allBullets.4", {
            defaultValue: "Autenticación JWT, PostgreSQL optimizado.",
          }),
          t("experience.etyrse.allBullets.5", {
            defaultValue: "Despliegues: Vercel, Railway, Supabase, cPanel.",
          }),
        ],
        demo: "https://icontrol-app-isp-lilac.vercel.app",
        icon: FaLaptopCode,
      },
      {
        id: "gadm",
        company: t("experience.gadm.company", { defaultValue: "GAD Machala" }),
        role: t("experience.gadm.role", {
          defaultValue: "Practicante — Redes y Soporte",
        }),
        location: t("experience.gadm.location", {
          defaultValue: "Machala, Ecuador",
        }),
        period: t("experience.gadm.period", {
          defaultValue: "Abr 2024 — Jun 2024",
        }),
        short: t("experience.gadm.short", {
          defaultValue:
            "Mantenimiento de equipos y despliegue de infraestructura de red en dependencias municipales.",
        }),
        bullets: [
          t("experience.gadm.bullets.0", {
            defaultValue: "Infraestructura de red para biometría.",
          }),
          t("experience.gadm.bullets.1", {
            defaultValue: "Mantenimiento y optimización de equipos.",
          }),
          t("experience.gadm.bullets.2", {
            defaultValue: "Documentación de credenciales y series.",
          }),
        ],
        allBullets: [
          t("experience.gadm.allBullets.0", {
            defaultValue: "Instalación de sistemas de red para biometría.",
          }),
          t("experience.gadm.allBullets.1", {
            defaultValue: "Soporte técnico y resolución de incidencias.",
          }),
          t("experience.gadm.allBullets.2", {
            defaultValue: "Inventario y documentación detallada.",
          }),
        ],
        icon: FaTools,
      },
      {
        id: "mae-1",
        company: t("experience.mae2.company", {
          defaultValue:
            "Dirección Zonal 7 Loja del Ministerio de Ambiente, Agua y Transición Ecológica",
        }),
        role: t("experience.mae1.role", { defaultValue: "Practicante — TI" }),
        location: t("experience.mae1.location", {
          defaultValue: "Machala, Ecuador",
        }),
        period: t("experience.mae1.period", {
          defaultValue: "Oct 2024 — Ene 2025",
        }),
        short: t("experience.mae1.short", {
          defaultValue:
            "Infraestructura de red y desarrollo de app web para mapeo de redes con MikroTik.",
        }),
        bullets: [
          t("experience.mae1.bullets.0", {
            defaultValue: "Switch en rack + cableado UTP CAT6.",
          }),
          t("experience.mae1.bullets.1", {
            defaultValue: "App web para mapeo de redes.",
          }),
          t("experience.mae1.bullets.2", {
            defaultValue: "Visualización de nodos y estados.",
          }),
        ],
        allBullets: [
          t("experience.mae1.allBullets.0", {
            defaultValue: "Instalación de switch y cableado UTP CAT6.",
          }),
          t("experience.mae1.allBullets.1", {
            defaultValue: "Aplicación web con MikroTik.",
          }),
          t("experience.mae1.allBullets.2", {
            defaultValue: "Mejora en gestión TI.",
          }),
        ],
        icon: FaNetworkWired,
      },
      {
        id: "mae-2",
        company: t("experience.mae2.company", {
          defaultValue:
            "Dirección Zonal 7 Loja del Ministerio de Ambiente, Agua y Transición Ecológica",
        }),
        role: t("experience.mae2.role", { defaultValue: "Practicante — TI" }),
        location: t("experience.mae2.location", {
          defaultValue: "Machala, Ecuador",
        }),
        period: t("experience.mae2.period", {
          defaultValue: "Abr 2025 — Jul 2025",
        }),
        short: t("experience.mae2.short", {
          defaultValue:
            "Instalación y configuración de Windows con Active Directory y despliegues de seguridad.",
        }),
        bullets: [
          t("experience.mae2.bullets.0", {
            defaultValue: "Instalación de Windows 10/11.",
          }),
          t("experience.mae2.bullets.1", {
            defaultValue: "Integración con Active Directory y VAMT.",
          }),
          t("experience.mae2.bullets.2", {
            defaultValue: "Implementación de WSUS.",
          }),
        ],
        allBullets: [
          t("experience.mae2.allBullets.0", {
            defaultValue: "Configuración de +15 equipos.",
          }),
          t("experience.mae2.allBullets.1", {
            defaultValue: "Activación de licencias con VAMT.",
          }),
          t("experience.mae2.allBullets.2", {
            defaultValue: "WSUS para seguridad.",
          }),
          t("experience.mae2.allBullets.3", {
            defaultValue: "Firma electrónica.",
          }),
          t("experience.mae2.allBullets.4", {
            defaultValue: "Comparativo Windows vs Linux.",
          }),
        ],
        icon: FaServer,
      },
    ],
    [t]
  );

  return (
    <section
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
                        onClick={() => setOpen(exp)}
                        className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-accent text-white text-sm font-medium shadow hover:bg-accent/90"
                      >
                        {t("experience.viewMore", { defaultValue: "Ver más" })}
                      </button>
                      {exp.demo && (
                        <a
                          href={exp.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 text-primary text-sm font-medium shadow hover:bg-white/10"
                        >
                          <FaExternalLinkAlt />{" "}
                          {t("experience.demo", { defaultValue: "Demo" })}
                        </a>
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
              onClick={() => {
                setShowAll(!showAll);
                if (showAll) scrollToSection("exp");
              }}
              className="px-5 py-3 bg-accent/10 hover:bg-accent/20 text-accent font-medium rounded-xl shadow"
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
            >
              <motion.div
                initial={{ scale: 0.98, y: 10 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.98, y: 10 }}
                transition={{ duration: 0.18 }}
                className="max-w-3xl w-full bg-white/90 dark:bg-white/5 rounded-2xl p-6 shadow-xl backdrop-blur-3xl"
                role="dialog"
                aria-modal="true"
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
                      <a
                        href={open.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-white font-medium shadow hover:bg-accent/90"
                      >
                        {t("experience.viewDemo", { defaultValue: "Ver demo" })}
                      </a>
                    )}
                    <button
                      onClick={() => setOpen(null)}
                      className="ml-auto gap-2 px-3 py-2 rounded-lg  font-medium shadow bg-gray-500 dark:bg-muted text-primary hover:bg-muted/50 inline-flex items-center"
                    >
                     
                       <FiLogOut  className="ml-1" />
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
