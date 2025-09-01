import ReactGA from "react-ga4";

const TRACKING_ID = import.meta.env.VITE_TRACKING_ID;
const isDevelopment = import.meta.env.MODE === "development";
const isProduction = import.meta.env.MODE === "production";

// Inicializar GA4
export const initGA = () => {
  if (TRACKING_ID) {
    ReactGA.initialize(TRACKING_ID, {
      debug: isDevelopment,
    });
  }
};

// Vista de página
export const logPageView = () => {
  if (TRACKING_ID) {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname + window.location.search,
    });
  }
};

// Función helper para verificar si debe trackear
const shouldTrack = () => Boolean(TRACKING_ID && isProduction);

// Rastrear navegación entre secciones
export const trackSectionView = (sectionName) => {
  if (shouldTrack()) {
    ReactGA.event({
      category: "Navigation",
      action: "View Section",
      label: sectionName,
    });
  }
};

// === EVENTOS DE HOME/HERO ===
export const trackCVDownload = () => {
  if (shouldTrack()) {
    ReactGA.event({
      category: "CV",
      action: "Download",
      label: "Portfolio CV Download",
    });
  }
};

export const trackSocialClick = (platform) => {
  if (shouldTrack()) {
    ReactGA.event({
      category: "Social Media",
      action: "Click",
      label: platform,
    });
  }
};

// === EVENTOS DE EXPERIENCIA ===
export const trackExperienceView = (companyName) => {
  if (shouldTrack()) {
    ReactGA.event({
      category: "Experience",
      action: "View Details",
      label: companyName,
    });
  }
};

export const trackExperienceDemo = (companyName) => {
  if (shouldTrack()) {
    ReactGA.event({
      category: "Experience",
      action: "Click Demo",
      label: companyName,
    });
  }
};

export const trackExperienceExpand = (action) => {
  if (shouldTrack()) {
    ReactGA.event({
      category: "Experience",
      action: "Toggle List",
      label: action, // 'expand' or 'collapse'
    });
  }
};

// === EVENTOS DE PROYECTOS ===
export const trackProjectView = (projectName) => {
  if (shouldTrack()) {
    ReactGA.event({
      category: "Projects",
      action: "View Details",
      label: projectName,
    });
  }
};

export const trackProjectDemo = (projectName) => {
  if (shouldTrack()) {
    ReactGA.event({
      category: "Projects",
      action: "Visit Demo",
      label: projectName,
    });
  }
};

export const trackProjectCode = (projectName) => {
  if (shouldTrack()) {
    ReactGA.event({
      category: "Projects",
      action: "View Code",
      label: projectName,
    });
  }
};

export const trackProjectDocument = (projectName) => {
  if (shouldTrack()) {
    ReactGA.event({
      category: "Projects",
      action: "View Document",
      label: projectName,
    });
  }
};

// === EVENTOS DE CONTACTO ===
export const trackContactClick = (contactType) => {
  if (shouldTrack()) {
    ReactGA.event({
      category: "Contact",
      action: "Click Contact Method",
      label: contactType,
    });
  }
};

export const trackContactFormSubmit = () => {
  if (shouldTrack()) {
    ReactGA.event({
      category: "Contact",
      action: "Submit Form",
      label: "Contact Form Submission",
    });
  }
};

// === EVENTOS DE SKILLS/EDUCACIÓN ===
export const trackSkillInteraction = (skillName) => {
  if (shouldTrack()) {
    ReactGA.event({
      category: "Skills",
      action: "View Skill",
      label: skillName,
    });
  }
};

// === EVENTOS DE TECNOLOGÍAS ===
export const trackTechnologyClick = (technologyName) => {
  if (shouldTrack()) {
    ReactGA.event({
      category: "Technology",
      action: "Click Technology",
      label: technologyName,
    });
  }
};

// === EVENTOS DE TIEMPO EN PÁGINA ===
export const trackTimeOnSection = (sectionName, timeInSeconds) => {
  if (shouldTrack()) {
    ReactGA.event({
      category: "Engagement",
      action: "Time on Section",
      label: sectionName,
      value: timeInSeconds,
    });
  }
};
