import { HiOutlineMail } from "react-icons/hi";
import {
  FaGithub,
  FaGlobe,
  FaWhatsapp,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

// Datos estáticos movidos fuera del componente para evitar recreación
const STATIC_CONTACTS_DATA = [
  {
    id: "github",
    name: "GitHub",
    href: "https://github.com/Dantell12",
    copyText: "https://github.com/Dantell12",
    translationKey: "contacts.github",
    Icon: FaGithub,
    bgClass: "bg-[#2F3C50]",
  },
  {
    id: "email",
    name: "Email",
    href: "mailto:joelkevin387@gmail.com",
    copyText: "joelkevin387@gmail.com", // Corregido: faltaba .com
    translationKey: "contacts.email",
    Icon: HiOutlineMail,
    bgClass: "bg-[#D62331]",
  },
  {
    id: "website",
    name: "Website",
    href: "https://portfolio-kevin-zuniga.vercel.app",
    copyText: "https://portfolio-kevin-zuniga.vercel.app",
    translationKey: "contacts.portfolio",
    Icon: FaGlobe,
    bgClass: "bg-[#069269]",
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    href: "https://wa.me/+593979674382?text=Hola%20Kevin%20!%20Quisiera%20contactarte",
    copyText:
      "https://wa.me/+593979674382?text=Hola%20Kevin%20!%20Quisiera%20contactarte",
    translationKey: "contacts.whats",
    Icon: FaWhatsapp,
    bgClass: "bg-[#21BE5B]",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/joel-zuniga-223b44325/",
    copyText: "https://www.linkedin.com/in/joel-zuniga-223b44325/",
    translationKey: "contacts.linkedin",
    Icon: FaLinkedin,
    bgClass: "bg-[#245CDF]",
  },
  {
    id: "instagram",
    name: "Instagram",
    href: "https://instagram.com/joel_gsx",
    copyText: "https://instagram.com/joel_gsx",
    translationKey: "contacts.ig",
    Icon: FaInstagram,
    bgClass:
      "bg-gradient-to-tr from-[#F8CE02] via-[#F87502] via-[#F92301] via-[#E11438] via-[#BF2E7B] via-[#934AC7] via-[#8842BC] to-[#7C3AAD]",
  },
];

export const useContacts = () => {
  const { t } = useTranslation();

  return useMemo(
    () =>
      STATIC_CONTACTS_DATA.map((contact) => ({
        id: contact.id,
        name: contact.name,
        href: contact.href,
        copyText: contact.copyText,
        description: t(contact.translationKey),
        Icon: contact.Icon,
        bgClass: contact.bgClass,
      })),
    [t]
  );
};
