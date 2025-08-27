import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronDown } from "react-icons/hi";

export default function NavDropdown({ item }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Cerrar si hago click fuera
  useEffect(() => {
    function onDoc(e) {
      if (!ref.current) return;
      if (!ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  return (
    <li key={item.name} className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((s) => !s)}
        className="flex items-center gap-1 py-2 px-3 text-secondary hover:text-accent lg:p-0"
      >
        {item.name}
        <HiChevronDown
          className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown animado */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="absolute left-0 mt-2 w-52 z-50 origin-top rounded-xl shadow-xl bg-surface dark:bg-gray-800 p-2 px-3"
          >
            {item.children.map((child) => (
              <li key={child.name}>
                <motion.a
                  href={child.href}
                  whileHover={{ x: 6 }}
                  whileTap={{ scale: 0.97 }}
                  className="block px-4 py-2 text-sm rounded-lg text-secondary hover:bg-accent/10 hover:text-accent"
                >
                  {child.name}
                </motion.a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
}
