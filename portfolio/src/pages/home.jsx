import Header from "../components/header";
import Footer from "../components/footer";
import {
  FaRocket,
  FaDownload,
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { trackCVDownload, trackSocialClick } from "../analytics";
import { lazy } from "react";

const ProjectsComponent = lazy(() => import("./projects/projects"));
const SkillsComponent = lazy(() => import("./skills"));
const ExperienceComponent = lazy(() => import("./experience/experience"));
const AboutComponent = lazy(() => import("./about"));
const EducationComponent = lazy(() => import("./education"));
const ContactSectionComponent = lazy(() => import("./contact/contact"));

export default function Home() {
  const { t } = useTranslation();
  const urlCV = t("urlcv");

  // Función para manejar descarga de CV
  const handleCVDownload = () => {
    trackCVDownload();
    window.open(urlCV, "_blank");
  };

  // Función para manejar clics en redes sociales
  const handleSocialClick = (platform, url) => {
    trackSocialClick(platform);
    window.open(url, "_blank");
  };

  return (
    <>
      <Header />
      {/* Fondo general */}
      <section
        id="home"
        className="bg-bgsecondary/95 dark:bg-bg min-h-screen flex items-center justify-center px-4 "
      >
        {/* Flex principal */}
        <div className="flex items-center justify-between gap-12 max-w-6xl w-full">
          {/* Card izquierda */}
          <div
            className="grid gap-8 p-8 rounded-2xl shadow-lg text-start 
                       bg-surface backdrop-blur-3xl max-w-2xl w-full"
          >
            {/* Botón superior */}
            <div className="flex flex-col items-start gap-4">
              <button
                className="flex items-center gap-2 px-6 py-2 mb-2 rounded-full 
                           bg-accent/10 hover:bg-accent/20 text-accent font-semibold text-lg transition"
              >
                <FaRocket className="text-accent" />
                {t("welcome")}
              </button>
            </div>

            {/* Título */}
            <h1 className="text-4xl md:text-6xl font-bold text-primary">
              {t("welcome2")} <span className="text-accent">Kevin Zuñiga!</span>
            </h1>

            {/* Subtítulo */}
            <p className="text-lg md:text-2xl text-secondary">
              {t("subtitle")}
            </p>

            {/* Enlace CV + iconos sociales */}
            <div className="mt-6 w-full flex flex-wrap sm:flex-nowrap items-center gap-4">
              {/* Botón CV con tracking */}
              <button
                onClick={handleCVDownload}
                className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-accent text-white font-medium shadow hover:bg-accent/90 transition-colors"
              >
                <FaDownload /> {t("mycv", { defaultValue: "Mi Curriculum" })}
              </button>

              {/* Spacer flexible */}
              <div className="flex-1" />

              {/* Iconos sociales con tracking */}
              <div className="flex items-center gap-2">
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 24 }}
                  onClick={() =>
                    handleSocialClick("GitHub", "https://github.com/Dantell12")
                  }
                  aria-label="GitHub — Kevin Zuñiga"
                  title="GitHub"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-accent/10 text-secondary transition"
                >
                  <FaGithub className="w-5 h-5" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 24 }}
                  onClick={() =>
                    handleSocialClick(
                      "LinkedIn",
                      "https://www.linkedin.com/in/joel-zuniga-223b44325"
                    )
                  }
                  aria-label="LinkedIn — Kevin Zuñiga"
                  title="LinkedIn"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-accent/10 text-secondary transition"
                >
                  <FaLinkedin className="w-5 h-5" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 24 }}
                  onClick={() =>
                    handleSocialClick(
                      "WhatsApp",
                      "https://wa.me/+593979674382?text=Hola%20Kevin%20!%20Quisiera%20contactarte"
                    )
                  }
                  aria-label="WhatsApp — Kevin Zuñiga"
                  title="WhatsApp"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-accent/10 text-secondary transition"
                >
                  <FaWhatsapp className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </div>

          {/* Imagen a la derecha */}
          <div className="bg-surface hidden md:flex items-center rounded-2xl shadow-lg justify-center">
            <img
              src="/me.png"
              alt="Kevin Zuñiga"
              className="w-full max-w-2xl rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* Componentes con IDs para el tracking de secciones */}

      <SkillsComponent />
      <ProjectsComponent />
      <ExperienceComponent />
      <AboutComponent />
      <EducationComponent />
      <ContactSectionComponent />
      <Footer />
    </>
  );
}
