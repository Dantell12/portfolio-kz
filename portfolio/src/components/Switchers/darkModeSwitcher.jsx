import { useEffect, useState } from "react";
import { HiMoon, HiSun } from "react-icons/hi2";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import useColorMode from "../../hooks/useColorMode";
export default function DarkModeSwitcherIcon() {
  const [mode, setMode] = useColorMode();
  const [prefersDark, setPrefersDark] = useState(false);
  
  useEffect(() => {
    // Verificar la preferencia del sistema
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setPrefersDark(mediaQuery.matches);
    
    // Listener para cambios en la preferencia del sistema
    const handleChange = () => setPrefersDark(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);
    
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);
  
  const isDark = mode === "dark";
  
  const prefersReduced = useReducedMotion();
  
  const toggle = () => {
    if (typeof setMode === "function") {
      setMode(isDark ? "light" : "dark");
    }
  };
  // Animaciones para el icono (entrar / salir)
  const iconVariants = {
    initial: { y: -6, opacity: 0, rotate: -10, scale: 0.85 },
    animate: { y: 0, opacity: 1, rotate: 0, scale: 1 },
    exit: { y: 6, opacity: 0, rotate: 10, scale: 0.85 },
  };

  const commonTransition = prefersReduced
    ? { duration: 0 }
    : { type: "spring", stiffness: 400, damping: 28 };

  return (
    <motion.button
      onClick={toggle}
      aria-label="Toggle dark mode"
      aria-pressed={isDark}
      title={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      initial={false}
      whileHover={prefersReduced ? {} : { scale: 1.06 }}
      whileTap={prefersReduced ? {} : { scale: 0.95, rotate: -6 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className="flex items-center justify-center w-10 h-10 rounded-full  transition-colors duration-300
         text-yellow-500 hover:bg-accent/10 hover:text-accent dark:text-blue-200 focus:outline-none focus:ring-2 focus:ring-accent/40"
    >
      {/* AnimatePresence para intercambiar iconos con animación */}
      <AnimatePresence mode="wait">
        {isDark ? (
          <motion.span
            key="moon"
            variants={iconVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={commonTransition}
            className="flex items-center justify-center"
          >
            <HiMoon className="w-5 h-5 text-yellow-400" aria-hidden />
          </motion.span>
        ) : (
          <motion.span
            key="sun"
            variants={iconVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={commonTransition}
            className="flex items-center justify-center"
          >
            <HiSun className="w-5 h-5 text-yellow-500" aria-hidden />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
