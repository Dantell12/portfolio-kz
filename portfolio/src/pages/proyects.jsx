// src/components/Projects.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useTranslation } from "react-i18next";

const PROJECTS = [
  {
    id: "icontrol-isp",
    title: "iControl - Sistema para ISP",
    tag: "Producción",
    short:
      "Sistema integral de gestión para ISP: facturación electrónica (SRI), mapeo de clientes, pagos y panel administrativo.",
    features: [
      "Facturación SRI",
      "Mapeo con Leaflet",
      "Microservicios con Docker",
      "JWT Auth",
    ],
    demo: "https://icontrol-app-isp-lilac.vercel.app",
    repo: "https://github.com/Dantell12/icontrol-app-isp",
    images: [
      "src/assets/projects/icontrol-1.png",
      "src/assets/projects/icontrol-2.png",
      "src/assets/projects/icontrol-3.png",
    ],
    accent: "bg-accent/10",
  },
  {
    id: "network-mapper",
    title: "Network Mapper — Proyecto de redes",
    tag: "Proyecto TI",
    short:
      "Aplicación para mapear redes corporativas usando MikroTik y visualización como nodos; incluye estado y métricas de enlace.",
    features: [
      "Visualización de nodos",
      "Integración MikroTik",
      "Reporte de estado",
    ],
    demo: "#",
    repo: "#",
    images: [
      "src/assets/projects/network-mapper-1.png",
      "src/assets/projects/network-mapper-2.png",
    ],
    accent: "bg-accent/10",
  },
];

function ProjectCard({ p, onOpen }) {
  return (
    <motion.article
      layout
      whileHover={{ y: -6 }}
      className="bg-white/80 dark:bg-white/5 rounded-2xl p-5 shadow-md backdrop-blur-3xl cursor-pointer"
      onClick={() => onOpen(p)}
      role="button"
      tabIndex={0}
      aria-label={`Abrir proyecto ${p.title}`}
    >
      <div className="flex items-start gap-4">
        <div
          className={`flex-shrink-0 w-14 h-14 rounded-lg flex items-center justify-center ${p.accent}`}
        >
          {/* Show first image as thumbnail (fallback if not available) */}
          <img
            src={p.images?.[0] ?? "src/assets/default-project.png"}
            alt={p.title}
            className="w-12 h-12 object-cover rounded-md shadow-sm"
            onError={(e) => {
              e.currentTarget.src = "src/assets/default-project.png";
            }}
          />
        </div>

        <div className="flex-1">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-lg font-semibold text-primary">{p.title}</h3>
            <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full">
              {p.tag}
            </span>
          </div>

          <p className="mt-2 text-sm text-secondary line-clamp-3">{p.short}</p>

          <div className="mt-3 flex flex-wrap gap-2">
            {p.features.map((f) => (
              <span
                key={f}
                className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent"
              >
                {f}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm text-muted">Ver detalles</div>
        <div className="flex items-center gap-3">
          <FaExternalLinkAlt className="w-4 h-4 text-muted" />
          <FaGithub className="w-4 h-4 text-muted" />
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(null);

  return (
    <section
      id="projects"
      className="bg-bgsecondary dark:bg-bg min-h-[60vh] pt-15 sm:pt-20 lg:pt-25 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-start mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl inline-flex items-center font-bold text-accent dark:text-accent"
          >
            {t("projects.title", { defaultValue: "Proyectos" })}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-3 text-lg sm:text-lg lg:text-xl font-semibold text-muted dark:text-primary/80 mx-auto mb-6"
          >
            {t("projects.lead", {
              defaultValue: "Algunos proyectos destacados y demos.",
            })}
          </motion.p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.id} p={p} onOpen={(proj) => setOpen(proj)} />
          ))}
        </div>

        {/* Modal / detail */}
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Left: carousel of images (autoplay, no arrows) */}
                  <div className="col-span-1">
                    <Swiper
                      modules={[Autoplay, Pagination]}
                      autoplay={{ delay: 3000, disableOnInteraction: false }}
                      loop={true}
                      pagination={{ clickable: true }}
                      className="rounded-md overflow-hidden"
                    >
                      {(open.images || [open.image]).map((img, idx) => (
                        <SwiperSlide key={idx}>
                          <img
                            src={img}
                            alt={`${open.title} screenshot ${idx + 1}`}
                            className="w-full h-56 md:h-72 object-cover rounded-md"
                            onError={(e) =>
                              (e.currentTarget.src =
                                "src/assets/default-project.png")
                            }
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>

                    {/* thumbnails (optional) could go here */}
                  </div>

                  {/* Right: project info */}
                  <div className="col-span-1">
                    <h3 className="text-xl font-bold text-primary">
                      {open.title}
                    </h3>
                    <p className="text-sm text-secondary mt-1">{open.tag}</p>

                    <p className="mt-3 text-sm text-muted leading-relaxed">
                      {open.short}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {open.features.map((f) => (
                        <span
                          key={f}
                          className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent"
                        >
                          {f}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex items-center gap-3">
                      <a
                        href={open.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-white font-medium shadow hover:bg-accent/90"
                      >
                        <FaExternalLinkAlt /> Demo
                      </a>

                      <a
                        href={open.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 text-primary font-medium shadow hover:bg-white/10"
                      >
                        <FaGithub /> Repo
                      </a>

                      <button
                        onClick={() => setOpen(null)}
                        className="ml-auto inline-flex items-center gap-2 text-sm text-muted"
                      >
                        Cerrar <FaChevronRight className="rotate-180" />
                      </button>
                    </div>
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
