import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaAngular,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { BiLogoPostgresql } from "react-icons/bi";
import {
  CPlusIcon,
  CSharpIcon,
  DockerIcon,
  MongoDBIcon,
  NetCoreIcon,
  TypeScriptIcon,
} from "../../public/icons";
import { useTranslation } from "react-i18next";
const skills = [
  { name: "React", icon: FaReact },
  { name: "Angular", icon: FaAngular },
  { name: ".Net Framework", icon: NetCoreIcon },
  { name: "Node.js", icon: FaNodeJs },
  { name: "JavaScript", icon: FaJs },
  {
    name: "TypeScript",
    icon: TypeScriptIcon, // Custom TypeScript icon
  },
  { name: "C#", icon: CSharpIcon },
  { name: "C++", icon: CPlusIcon },
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3Alt },
  { name: "PostgreSQL", icon: BiLogoPostgresql },
  { name: "MongoDB", icon: MongoDBIcon },

  { name: "Git", icon: FaGitAlt },
  { name: "Docker", icon: DockerIcon },
];

export default function Skills() {
  const { t } = useTranslation();
  return (
    <section
      aria-labelledby="skills-title"
      className="bg-gray-50 dark:bg-gray-900  min-h-[60vh] pt-15 sm:pt-20 lg:pt-25 py-12 px-4 sm:px-6 lg:px-8"
      id="skills"
    >
      <div className="max-w-6xl mx-auto text-center bg-gray-200/80 dark:bg-gray-950/20 rounded-2xl shadow-lg p-6 backdrop-blur-sm">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl lg:text-4xl inline-flex mb-4 items-center font-bold text-accent dark:text-accent"
          id="skills-title"
        >
          <span className="text-accent">Skills</span>
        </motion.h2>

        {/* IMPORTANT: slidesPerView default is 1 — breakpoints control the rest */}
        <Swiper
          modules={[Navigation, Keyboard]}
          spaceBetween={16}
          slidesPerView={1}
          centeredSlides={false}
          navigation
          keyboard={{ enabled: true }}
          loop={true}
          grabCursor={true}
          watchOverflow={true}
          observer={true}
          observeParents={true}
          breakpoints={{
            // min-width -> settings
            640: { slidesPerView: 2, spaceBetween: 16 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
            1280: { slidesPerView: 4, spaceBetween: 28 },
          }}
          className="py-4 px-2 lg:px-6"
        >
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <SwiperSlide key={i} className="py-4 px-2">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{
                    opacity: 1,
                    transition: { duration: 0.5, delay: 0.2 },
                  }}
                  viewport={{ once: true }}
                  animate={{ whileInView: { opacity: 1, y: 0 } }}
                  whileHover={{
                    scale: 1.06,
                    rotate: 1,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="w-full mx-auto flex flex-col items-center gap-4 p-5 rounded-2xl bg-white/80 dark:bg-white/5 shadow-md transition-shadow hover:shadow-xl cursor-pointer"
                  role="button"
                  tabIndex={0}
                  aria-label={`${skill.name} skill card`}
                >
                  <div className="text-5xl sm:text-6xl md:text-7xl">
                    <Icon
                      size={48}
                      className={
                        `inline-block w-20 h-20  ` +
                        (skill.name === "React"
                          ? "text-sky-400"
                          : skill.name === "Node.js"
                          ? "text-green-500"
                          : skill.name === "JavaScript"
                          ? "text-yellow-400"
                          : skill.name === "HTML"
                          ? "text-orange-500"
                          : skill.name === "CSS"
                          ? "text-blue-500"
                          : skill.name === "PostgreSQL"
                          ? "text-[#31648C]"
                          : skill.name === "Git"
                          ? "text-red-500"
                          : skill.name === "Angular"
                          ? "text-[#D93240]"
                          : "text-gray-50 dark:text-gray-900")
                      }
                    />
                  </div>

                  <div className="flex flex-col items-center">
                    <span className="text-lg sm:text-xl font-semibold text-muted dark:text-primary">
                      {skill.name}
                    </span>
                    <span className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      {skill.name === "React" ||
                      skill.name === "Angular" ||
                      skill.name === "Node.js" ||
                      skill.name === "TypeScript" ||
                      skill.name === "PostgreSQL" ||
                      skill.name === "Docker" ||
                      skill.name === "Git"
                        ? t("projectsProfessional")
                        : t("projectsAcademic")}
                    </span>
                  </div>
                </motion.div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Fallback grid for very small screens or no-js */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:hidden gap-4">
          {skills.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center gap-2 p-3 rounded-xl bg-white/80 dark:bg-white/5 shadow-sm"
              >
                <div className="flex items-center justify-center w-16 h-16 aspect-square">
                  <Icon
                    className={
                      `w-12 h-12 ` +
                      (s.name === "React"
                        ? "text-sky-400"
                        : s.name === "Node.js"
                        ? "text-green-500"
                        : s.name === "JavaScript"
                        ? "text-yellow-400"
                        : s.name === "HTML"
                        ? "text-orange-500"
                        : s.name === "CSS"
                        ? "text-blue-500"
                        : s.name === "PostgreSQL"
                        ? "text-blue-600/70"
                        : s.name === "Git"
                        ? "text-red-500"
                        : s.name === "Angular"
                        ? "text-red-600/90"
                        : "text-gray-50 dark:text-gray-900")
                    }
                  />
                </div>
                <span className="text-sm font-medium">{s.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
