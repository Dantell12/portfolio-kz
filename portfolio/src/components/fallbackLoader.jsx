// src/components/FallbackLoader.jsx
import { motion } from "framer-motion";
import { FaRocket } from "react-icons/fa";

export default function FallbackLoader() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-bg dark:bg-bg">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="flex flex-col items-center gap-6 p-8 rounded-2xl shadow-lg bg-surface backdrop-blur-2xl"
      >
        {/* Ícono animado */}
        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
          }}
          className="flex items-center justify-center w-16 h-16 rounded-full bg-accent/10"
        >
          <FaRocket className="text-accent text-3xl" />
        </motion.div>

        {/* Texto con animación suave */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <h2 className="text-xl font-bold text-primary">Cargando página 🚀</h2>
          <p className="text-secondary text-sm mt-2">
            Preparando todo para mostrar mi portafolio...
          </p>
        </motion.div>

        {/* Loader "barra" mejorado */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="w-40 h-1.5 rounded-full bg-muted/30 overflow-hidden"
        >
          <motion.div
            className="h-full bg-gradient-to-r from-accent to-accent/70 rounded-full"
            initial={{ x: "-100%" }}
            animate={{ x: ["−100%", "100%"] }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut",
              repeatType: "loop",
            }}
          />
        </motion.div>

        {/* Puntos de carga animados */}
        <motion.div
          className="flex gap-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-2 h-2 rounded-full bg-accent/60"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.2,
                delay: index * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
