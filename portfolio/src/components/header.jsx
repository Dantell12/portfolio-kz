import { useEffect, useState } from "react";
import DarkModeSwitcherIcon from "./Switchers/darkModeSwitcher";

import { Trans, useTranslation } from "react-i18next";
import LanguageSwitcher from "./Switchers/languageSwitcher";
import NavDropdown from "./Dropdowns/navDropdown";

export default function Header() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detecta scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const menu = [
    { name: t("home"), href: "#home" },
    { name: t("skls"), href: "#skills" },
    { name: t("about"), href: "#about" },
    { name: t("contact"), href: "#contact" },
    {
      name: "Profesional",
      children: [
        { name: t("experiences"), href: "#exp" },
        { name: t("education"), href: "#education" },
        { name: t("certif"), href: "#certifications" },
        { name: t("proy"), href: "#projects" },
      ],
    },
  ];

  return (
    <header className="sticky top-0 z-50 transition-colors duration-300">
      <nav
        className={`border-b border-muted px-4 lg:px-6 py-3 
        ${
          scrolled
            ? "bg-muted/65 backdrop-blur-md dark:bg-surface/65 shadow-md"
            : "bg-surface/90 backdrop-blur-md dark:bg-surface/90"
        } 
        transition-all duration-300`}
      >
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          {/* Logo / Nombre */}
          <a href="#home" className="flex items-center gap-2">
            <img
              src="/logo1.png"
              className="h-10 w-10 border-2 rounded-full border-surface bg-surface hover:bg-surface/60 hover:border-accent/60"
              alt="Logo"
            />
          </a>

          {/* Right side: dark switch + hamburger */}
          <div className="flex items-center lg:order-2 gap-3">
            <DarkModeSwitcherIcon />
            <div>
              <LanguageSwitcher />
            </div>
            <button
              onClick={() => setOpen((s) => !s)}
              type="button"
              className="inline-flex items-center p-2 text-secondary rounded-lg lg:hidden
             hover:bg-accent/10 hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent"
              aria-controls="mobile-menu"
              aria-expanded={open}
            >
              <span className="sr-only">
                <Trans key={"openmenu"}> Abrir menú</Trans>
              </span>

              {/* Icono hamburguesa */}
              <svg
                className={`${open ? "hidden" : "block"} w-6 h-6`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>

              {/* Icono X */}
              <svg
                className={`${open ? "block" : "hidden"} w-6 h-6`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Menu links */}
          <div
            className={`${
              open ? "block" : "hidden"
            } justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
            id="mobile-menu"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {menu.map((item) =>
                item.children ? (
                  <NavDropdown key={item.name} item={item} />
                ) : (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="block py-2 px-3 text-secondary hover:text-accent rounded transition-colors lg:p-0"
                    >
                      {item.name}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
