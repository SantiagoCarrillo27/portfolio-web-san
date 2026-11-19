import type { Lang } from "@i18n/ui";

type Localized = Record<Lang, string>;

export interface ExperienceEntry {
  date: Localized;
  title: Localized;
  company: string;
  description: Localized;
  link?: string;
}

export const EXPERIENCE: ExperienceEntry[] = [
  {
    date: {
      es: "Septiembre 2025 - Actualmente ",
      en: "September 2025 - Present",
    },
    title: {
      es: "Centers Developer",
      en: "Centers Developer",
    },
    company: "NTT DATA Europe",
    description: {
      es: "Actualmente apoyo al equipo de integración de BBVA, participando en el diseño y desarrollo de microservicios con Java y Spring Boot. Mi trabajo se centra en garantizar la interoperabilidad de sistemas críticos, contribuyendo a la estabilidad, seguridad y escalabilidad de las soluciones bancarias.",
      en: "I currently support BBVA's integration team, taking part in the design and development of microservices with Java and Spring Boot. My work focuses on ensuring interoperability between critical systems, contributing to the stability, security and scalability of banking solutions.",
    },
    link: "https://www.linkedin.com/in/santiagocarrillo27/",
  },
  {
    date: {
      es: "Junio 2023 - Diciembre 2024 ",
      en: "June 2023 - December 2024",
    },
    title: {
      es: "Desarrollador Junior Foundation",
      en: "Junior Foundation Developer",
    },
    company: "ExcelCredit S.A",
    description: {
      es: "Contribuí a la estabilidad y seguridad de las aplicaciones internas de la compañía, corrigiendo errores en producción y optimizando su rendimiento. Además, implementé mejoras clave que redujeron en un 45% los tickets de soporte de TI.",
      en: "I contributed to the stability and security of the company's internal applications by fixing production bugs and optimizing performance. I also implemented key improvements that reduced IT support tickets by 45%.",
    },
    link: "https://www.linkedin.com/in/santiagocarrillo27/",
  },
  {
    date: {
      es: "Noviembre 2022 - Mayo 2023",
      en: "November 2022 - May 2023",
    },
    title: {
      es: "Practicante Desarrollo de Software",
      en: "Software Development Intern",
    },
    company: "ExcelCredit S.A",
    description: {
      es: "Apoyé la implementación de un visor documental para la gestión de información de clientes y créditos solicitados. Además, brindé soporte técnico desde el área de desarrollo, contribuyendo a la estabilidad y mejora de las aplicaciones internas de la compañía.",
      en: "I supported the implementation of a document viewer for managing customer information and requested loans. I also provided technical support from the development team, contributing to the stability and improvement of the company's internal applications.",
    },
  },
];
