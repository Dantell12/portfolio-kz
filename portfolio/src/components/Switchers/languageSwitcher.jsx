import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { HiChevronDown } from "react-icons/hi";

/**
 * LanguageSwitcher (responsive)
 * - md+ : botones con bandera + texto (estilo header)
 * - <md : botón compacto que abre dropdown animado
 *
 * Usa i18n.changeLanguage(lng).
 *
 * NOTE: coloca tus PNGs en /public/flags/es.png, /public/flags/en.png, /public/flags/pt.png
 */

export default function LanguageSwitcher({ className = "" }) {
  const { i18n } = useTranslation();
  const current = (i18n.resolvedLanguage || i18n.language || "es").slice(0, 2);

  const langs = {
    es: { label: "Español" },
    en: { label: "English" },
    pt: { label: "Português" },
  };

  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Close on outside click
  useEffect(() => {
    function onDoc(e) {
      if (!ref.current) return;
      if (!ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  // keyboard escape
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keyup", onKey);
    return () => document.removeEventListener("keyup", onKey);
  }, []);

  const change = async (lng) => {
    if (lng === current) return setOpen(false);
    await i18n.changeLanguage(lng);
    setOpen(false);
  };

  return (
    <div className={`relative ${className}`} overflow-visible="true" ref={ref}>
      {/* Desktop / md+ : inline buttons */}
      <div className="hidden md:flex items-center gap-3">
        {Object.entries(langs).map(([lng, { label }]) => {
          const active = current === lng;
          return (
            <motion.button
              key={lng}
              type="button"
              onClick={() => change(lng)}
              whileHover={{ scale: active ? 1 : 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 350, damping: 22 }}
              disabled={active}
              aria-pressed={active}
              className={
                "inline-flex items-center gap-3 px-3 py-2 rounded-full text-sm font-medium transition-colors " +
                (active
                  ? "bg-accent text-white shadow-md ring-1 ring-accent/30"
                  : "bg-transparent text-secondary hover:bg-accent/10 hover:text-accent") +
                " focus:outline-none focus:ring-2 focus:ring-accent/40 " +
                (active ? "cursor-default" : "cursor-pointer")
              }
            >
              {/* DESKTOP FLAG IMAGE */}
              <img
                src={`/flags/${lng}.png`} // ej: /flags/es.png (pon las imágenes en /public/flags)
                alt={`${label} flag`}
                className="w-6 h-4 object-contain"
                width={24}
                height={16}
                loading="lazy"
                decoding="async"
                draggable="false"
              />

              <span className="whitespace-nowrap">
                <span className="font-semibold mr-1">{label}</span>
                <small
                  className={"text-xs" + (
                    active
                      ? "text-secondary"
                      : "text-secondary/80 dark:text-secondary/80"
                  )}
                >
                  ({lng.toUpperCase()})
                </small>
              </span>
            </motion.button>
          );
        })}
      </div>

      {/* Mobile: compact button that opens dropdown */}
      <div className="md:hidden flex items-center">
        <button
          type="button"
          onClick={() => setOpen((s) => !s)}
          aria-haspopup="menu"
          aria-expanded={open}
          className="inline-flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium transition-colors
                     bg-transparent text-secondary hover:bg-accent/10 hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent/40"
        >
          <span className="inline-flex items-center justify-center w-6 h-4">
            {/* === FIX HERE: use `current` and langs[current] (was using undefined lng / label) === */}
            <img
              src={`/flags/${current}.png`} // <--- use current instead of lng
              alt={`${langs[current]?.label || "flag"} flag`} // <--- use langs[current].label for alt
              className="w-6 h-4 object-contain"
              width={24}
              height={16}
              loading="lazy"
              decoding="async"
              draggable="false"
            />
          </span>
          <span className="sr-only">Seleccionar idioma</span>
          <span className="uppercase text-sm font-semibold">{current}</span>
          <HiChevronDown
            className={`w-4 h-4 ml-1 ${
              open ? "rotate-180" : "rotate-0"
            } transition-transform`}
          />
        </button>

        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{ opacity: 0, y: -6, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              role="menu"
              aria-label="Languages"
              className="absolute right-0 top-full mt-2 w-44 z-50 origin-top-right rounded-xl shadow-xl bg-surface p-2"
            >
              {Object.entries(langs).map(([lng, { label }]) => {
                const active = current === lng;
                return (
                  <li key={lng} role="none">
                    <motion.button
                      role="menuitem"
                      onClick={() => change(lng)}
                      whileHover={{ x: 6 }}
                      whileTap={{ scale: 0.98 }}
                      className={
                        "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left text-sm " +
                        (active
                          ? "bg-accent text-white cursor-default"
                          : "text-secondary hover:bg-accent/10 hover:text-accent")
                      }
                      disabled={active}
                    >
                      <span className="inline-flex items-center justify-center w-6 h-4">
                        <img
                          src={`/flags/${lng}.png`}
                          alt={`${label} flag`}
                          className="w-6 h-4 object-contain"
                          width={24}
                          height={16}
                          loading="lazy"
                          decoding="async"
                          draggable="false"
                        />
                      </span>
                      <span className="flex-1">
                        <div className="font-medium">{label}</div>
                        <div className="text-xs text-muted dark:text-muted/80">
                          {lng.toUpperCase()}
                        </div>
                      </span>
                      {active && (
                        <span className="text-xs font-semibold text-white px-2 py-0.5 bg-accent/80 rounded">
                          ✓
                        </span>
                      )}
                    </motion.button>
                  </li>
                );
              })}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
