import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaChevronUp,
  FaCode,
} from "react-icons/fa";

export default function Footer() {
  const { t } = useTranslation();

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-surface/10 dark:bg-blue-950 border-t border-gray-200 dark:border-blue-900">
      {/* Botón flotante derecho */}
      <motion.div
        initial={{ opacity: 0, }}
        whileInView={{ opacity: 1, }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <button
          onClick={scrollTop}
          aria-label={t("backToTop", { defaultValue: "Volver arriba" })}
          title={t("backToTop", { defaultValue: "Volver arriba" })}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 z-50 inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent text-white shadow-lg hover:scale-105 transition-transform ring-1 ring-accent/30"
        >
          <FaChevronUp className="w-4 h-4" />
        </button>
      </motion.div>

      <div className="max-w-screen-xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Nombre + frase (con iconos sociales debajo) */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold text-accent dark:text-accent">
            Kevin Zuñiga
          </h2>
          <p className="text-sm text-surface/80 inline-flex items-center dark:text-primary mt-1">
            {t("footerdesc")}{" "}
            <FaCode className="text-amber-500 dark:text-amber-400 ml-1" />
          </p>

          {/* Iconos sociales debajo (izquierda) */}
          <div className="mt-4 flex items-center justify-center md:justify-start gap-3">
            <a
              href="https://github.com/Dantell12"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              aria-label="GitHub — Kevin Zuñiga"
              className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-accent/30 dark:bg-accent dark:hover:bg-accent/50 hover:bg-accent/50 text-secondary transition"
            >
              <FaGithub className="w-4 h-4 text-surface" />
            </a>

            <a
              href="https://www.linkedin.com/in/joel-zuniga-223b44325"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              aria-label="LinkedIn — Kevin Zuñiga"
              className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-accent/30 dark:bg-accent dark:hover:bg-accent/50 hover:bg-accent/50 text-secondary transition"
            >
              <FaLinkedin className="w-4 h-4 text-surface" />
            </a>

            <a
              href="https://wa.me/+593979674382?text=Hola%20Kevin%20!%20Quisiera%20contactarte"
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp"
              aria-label="WhatsApp — Kevin Zuñiga"
              className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-accent/30 dark:bg-accent dark:hover:bg-accent/50 hover:bg-accent/50 text-secondary transition"
            >
              <FaWhatsapp className="w-4 h-4 text-surface" />
            </a>
          </div>
        </div>

        {/* Estado */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
            </span>
            <span className="text-sm font-medium text-yellow-600 dark:text-yellow-400">
              {t("footerprogr")}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </span>
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
              {t("footerwork")}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            <span className="text-sm font-medium text-red-600 dark:text-red-400">
              {t("footerlocation")}
            </span>
          </div>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="border-t border-gray-100 dark:border-blue-900 py-4">
        <p className="text-center text-xs text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} Kevin Zuñiga. {t("footercopyr")}
        </p>
      </div>
    </footer>
  );
}
