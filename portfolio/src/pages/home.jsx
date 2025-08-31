import Header from "../components/header";
import Footer from "../components/footer";
import {
  FaRocket,
  FaDownload,
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import Skills from "./skills";
import { useTranslation } from "react-i18next";
import About from "./about";
import { motion } from "framer-motion";
import Education from "./education";
import Experience from "./experience";
import ContactSection from "./contact";
import Projects from "./projects/projects";

export default function Home() {
  const { t } = useTranslation();
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

            {/* Enlace */}
            {/* Enlace CV + iconos sociales a la derecha */}
            <div className="mt-6 w-full flex flex-wrap sm:flex-nowrap items-center gap-4">
              {/* Botón CV */}
              <a
                href="https://drive.google.com/file/d/1YFDhfXnRlJMdt2DYowwoV8r9hw51KP79/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-accent text-white font-medium shadow hover:bg-accent/90"
              >
                <FaDownload /> {t("mycv", { defaultValue: "Mi Curriculum" })}
              </a>

              {/* Spacer flexible: empuja los iconos a la derecha */}
              <div className="flex-1" />

              {/* Iconos sociales (se envuelven si pantalla pequeña) */}
              <div className="flex items-center gap-2">
                <motion.a
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 24 }}
                  href="https://github.com/Dantell12"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub — Kevin Zuñiga"
                  title="GitHub"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-accent/10 text-secondary transition"
                >
                  <FaGithub className="w-5 h-5" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 24 }}
                  href="https://www.linkedin.com/in/joel-zuniga-223b44325"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn — Kevin Zuñiga"
                  title="LinkedIn"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-accent/10 text-secondary transition"
                >
                  <FaLinkedin className="w-5 h-5" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 24 }}
                  href="https://wa.me/+593979674382?text=Hola%20Kevin%20!%20Quisiera%20contactarte"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp — Kevin Zuñiga"
                  title="WhatsApp"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-accent/10 text-secondary transition"
                >
                  <FaWhatsapp className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </div>

          {/* Imagen a la derecha */}
          <div className="bg-surface hidden md:flex items-center rounded-2xl shadow-lg justify-center">
            <img
              src="/me.png"
              alt="Kevin Zuñiga"
              className="w-full max-w-2xl rounded-2xl  object-cover"
            />
          </div>
        </div>
      </section>
      {/*Skill */}
      <Skills />
      {/*Proyectos */}
      <Projects />
      <Experience />
      {/*Sobre mi */}
      <About />
      <Education />
      <ContactSection />
      <Footer />
    </>
  );
}
