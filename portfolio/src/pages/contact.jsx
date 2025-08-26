import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaEnvelope,
  FaGlobe,
  FaWhatsapp,
  FaLinkedin,
  FaInstagram,
  FaRegCopy,
  FaCheck,
  FaStar,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

// ContactSection - actualizado: botón copiar y color en el ícono (no en el fondo)
export default function ContactSection() {
  const [copied, setCopied] = useState(null);

  const contacts = [
    {
      id: "github",
      name: "GitHub",
      href: "https://github.com/Dantell12",
      copyText: "https://github.com/Dantell12",
      description: "Proyectos Open Source.",
      Icon: FaGithub,
      // color para el icono (no background)
      bgClass: "bg-[#2F3C50]",
    },
    {
      id: "email",
      name: "Email",
      href: "mailto:joelkevin387@gmail.com",
      copyText: "joelkevin387@gmail",
      description: "Comunicación Directa.",
      Icon: HiOutlineMail,
      bgClass: "bg-[#D62331]",
    },
    {
      id: "website",
      name: "Website",
      href: "https://portfolio-kevin-zuniga.vercel.app",
      copyText: "https://portfolio-kevin-zuniga.vercel.app",
      description: "Portafolio y Blog.",
      Icon: FaGlobe,
      bgClass: "bg-[#069269]",
    },
    {
      id: "whatsapp",
      name: "WhatsApp",
      href: "https://wa.me/+593979674382?text=Hola%20Kevin%20!%20Quisiera%20contactarte",
      copyText:
        "https://wa.me/+593979674382?text=Hola%20Kevin%20!%20Quisiera%20contactarte",
      description: "Chatea conmigo",
      Icon: FaWhatsapp,
      bgClass: "bg-[#21BE5B]",
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/joel-zuniga-223b44325/",
      copyText: "https://www.linkedin.com/in/joel-zuniga-223b44325/",
      description: "Red Profesional",
      Icon: FaLinkedin,
      bgClass: "bg-[#245CDF]",
    },
    {
      id: "instagram",
      name: "Instagram",
      href: "https://instagram.com/joel_gsx",
      copyText: "https://instagram.com/joel_gsx",
      description: "Conóceme",
      Icon: FaInstagram,
      bgClass:
        "bg-gradient-to-tr from-[#F8CE02] via-[#F87502] via-[#F92301] via-[#E11438] via-[#BF2E7B] via-[#934AC7] via-[#8842BC] to-[#7C3AAD]", // para instagram usamos gradiente en el ícono
    },
  ];

  const handleCopy = async (text, id) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(id);
      setTimeout(() => setCopied(null), 2000);
    } catch (e) {
      console.error("Copy failed", e);
    }
  };

  return (
    <section
      id="contact"
      className="bg-bgsecondary dark:bg-bg min-h-[60vh] pt-15 sm:pt-20 lg:pt-25 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
        <div className="relative block">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl inline-flex items-center font-bold text-accent dark:text-accent"
          >
            <FaStar className="mr-1" /> Conectemonos
          </motion.h2>{" "}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-muted dark:text-primary/80 mb-6"
          >
            ¿Listo para construir algo grandioso?
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg sm:text-lg lg:text-xl text-muted mt-2 mb-6"
          >
            Busco activamente nuevas oportunidades donde pueda contribuir,
            crecer y generar un impacto. Conectémonos y creemos algo
            extraordinario juntos.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-7">
          {contacts.map((c) => (
            <motion.article
              key={c.id}
              className={`relative block rounded-2xl  p-5 shadow-lg ${c.bgClass} backdrop-blur-3xl  border border-gray-800/10 hover:shadow-md transition-shadow`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              animate={{ whileInView: { opacity: 1, y: 0 } }}
              whileHover={{
                whileInView: { opacity: 1 },
                translateY: -6,
                transition: { duration: 0.2, delay: 0 },
              }}
            >
              {/* botón copiar */}
              <div className="absolute right-4 top-4 flex items-center gap-2">
                <button
                  onClick={() => handleCopy(c.copyText, c.id)}
                  className="flex items-center gap-2 px-2 py-2 rounded-lg text-sm bg-accent/10 hover:bg-accent/20"
                  aria-label={`Copiar ${c.name}`}
                >
                  {copied === c.id ? (
                    <>
                      <FaCheck className="w-4 h-4 text-accent/80" />
                    </>
                  ) : (
                    <>
                      <FaRegCopy className="w-4 h-4 text-primary/70" />
                    </>
                  )}
                </button>
              </div>

              <a
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4"
                aria-label={c.name}
              >
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <c.Icon className={`${c.iconClass} w-8 h-8 text-primary`} />
                  </div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-primary">
                      {c.name}
                    </h3>
                  </div>
                  <p className="mt-2 text-sm text-primary/90">
                    {c.description}
                  </p>
                </div>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
