import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import {
  FaTools,
  FaNetworkWired,
  FaServer,
  FaLaptopCode,
} from "react-icons/fa";
export const useExperiences = () => {
  const { t } = useTranslation();

  return useMemo(
    () => [
      {
        id: "gadm",
        company: t("experience.gadm.company", { defaultValue: "GAD Machala" }),
        role: t("experience.gadm.role", {
          defaultValue: "Practicante — Redes y Soporte",
        }),
        location: t("experience.gadm.location", {
          defaultValue: "Machala, Ecuador",
        }),
        period: t("experience.gadm.period", {
          defaultValue: "Abr 2024 — Jun 2024",
        }),
        short: t("experience.gadm.short", {
          defaultValue:
            "Mantenimiento de equipos y despliegue de infraestructura de red en dependencias municipales.",
        }),
        bullets: [
          t("experience.gadm.bullets.0", {
            defaultValue: "Infraestructura de red para biometría.",
          }),
          t("experience.gadm.bullets.1", {
            defaultValue: "Mantenimiento y optimización de equipos.",
          }),
          t("experience.gadm.bullets.2", {
            defaultValue: "Documentación de credenciales y series.",
          }),
        ],
        allBullets: [
          t("experience.gadm.allBullets.0", {
            defaultValue: "Instalación de sistemas de red para biometría.",
          }),
          t("experience.gadm.allBullets.1", {
            defaultValue: "Soporte técnico y resolución de incidencias.",
          }),
          t("experience.gadm.allBullets.2", {
            defaultValue: "Inventario y documentación detallada.",
          }),
        ],
        icon: FaTools,
      },
      {
        id: "mae-1",
        company: t("experience.mae2.company", {
          defaultValue:
            "Dirección Zonal 7 Loja del Ministerio de Ambiente, Agua y Transición Ecológica",
        }),
        role: t("experience.mae1.role", { defaultValue: "Practicante — TI" }),
        location: t("experience.mae1.location", {
          defaultValue: "Machala, Ecuador",
        }),
        period: t("experience.mae1.period", {
          defaultValue: "Oct 2024 — Ene 2025",
        }),
        short: t("experience.mae1.short", {
          defaultValue:
            "Infraestructura de red y desarrollo de app web para mapeo de redes con MikroTik.",
        }),
        bullets: [
          t("experience.mae1.bullets.0", {
            defaultValue: "Switch en rack + cableado UTP CAT6.",
          }),
          t("experience.mae1.bullets.1", {
            defaultValue: "App web para mapeo de redes.",
          }),
          t("experience.mae1.bullets.2", {
            defaultValue: "Visualización de nodos y estados.",
          }),
        ],
        allBullets: [
          t("experience.mae1.allBullets.0", {
            defaultValue: "Instalación de switch y cableado UTP CAT6.",
          }),
          t("experience.mae1.allBullets.1", {
            defaultValue: "Aplicación web con MikroTik.",
          }),
          t("experience.mae1.allBullets.2", {
            defaultValue: "Mejora en gestión TI.",
          }),
        ],
        icon: FaNetworkWired,
      },
      {
        id: "mae-2",
        company: t("experience.mae2.company", {
          defaultValue:
            "Dirección Zonal 7 Loja del Ministerio de Ambiente, Agua y Transición Ecológica",
        }),
        role: t("experience.mae2.role", { defaultValue: "Practicante — TI" }),
        location: t("experience.mae2.location", {
          defaultValue: "Machala, Ecuador",
        }),
        period: t("experience.mae2.period", {
          defaultValue: "Abr 2025 — Jul 2025",
        }),
        short: t("experience.mae2.short", {
          defaultValue:
            "Instalación y configuración de Windows con Active Directory y despliegues de seguridad.",
        }),
        bullets: [
          t("experience.mae2.bullets.0", {
            defaultValue: "Instalación de Windows 10/11.",
          }),
          t("experience.mae2.bullets.1", {
            defaultValue: "Integración con Active Directory y VAMT.",
          }),
          t("experience.mae2.bullets.2", {
            defaultValue: "Implementación de WSUS.",
          }),
        ],
        allBullets: [
          t("experience.mae2.allBullets.0", {
            defaultValue: "Configuración de +15 equipos.",
          }),
          t("experience.mae2.allBullets.1", {
            defaultValue: "Activación de licencias con VAMT.",
          }),
          t("experience.mae2.allBullets.2", {
            defaultValue: "WSUS para seguridad.",
          }),
          t("experience.mae2.allBullets.3", {
            defaultValue: "Firma electrónica.",
          }),
          t("experience.mae2.allBullets.4", {
            defaultValue: "Comparativo Windows vs Linux.",
          }),
        ],
        icon: FaServer,
      },
      {
        id: "etyrse",
        company: "Etyrse.net",
        role: t("experience.etyrse.role", {
          defaultValue: "Desarrollador Full Stack",
        }),
        location: t("experience.etyrse.location", {
          defaultValue: "Machala, Ecuador",
        }),
        period: t("experience.etyrse.period", {
          defaultValue: "May 2024 — Aug 2024",
        }),
        short: t("experience.etyrse.short", {
          defaultValue:
            "Sistema integral para ISP: facturación electrónica, mapeo de clientes y panel administrativo.",
        }),
        bullets: [
          t("experience.etyrse.bullets.0", {
            defaultValue: "Integración con SRI para comprobantes.",
          }),
          t("experience.etyrse.bullets.1", {
            defaultValue: "Mapeo interactivo con Leaflet.",
          }),
          t("experience.etyrse.bullets.2", {
            defaultValue: "Arquitectura microservicios dockerizados.",
          }),
        ],
        allBullets: [
          t("experience.etyrse.allBullets.0", {
            defaultValue: "Integración con SRI.",
          }),
          t("experience.etyrse.allBullets.1", {
            defaultValue: "Registro de empleados con Cloudinary.",
          }),
          t("experience.etyrse.allBullets.2", {
            defaultValue: "Leaflet para geolocalización.",
          }),
          t("experience.etyrse.allBullets.3", {
            defaultValue: "Microservicios dockerizados + API Gateway.",
          }),
          t("experience.etyrse.allBullets.4", {
            defaultValue: "Autenticación JWT, PostgreSQL optimizado.",
          }),
          t("experience.etyrse.allBullets.5", {
            defaultValue: "Despliegues: Vercel, Railway, Supabase, cPanel.",
          }),
        ],
        icon: FaLaptopCode,
      },
    ],
    [t]
  );
};
