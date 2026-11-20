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
      es: "Desarrollo e integración del módulo operativo de Brasil en BBVA Pivot Net, plataforma global de tesorería y pagos transfronterizos para clientes corporativos, con Java, Spring Boot y Angular sobre los frameworks corporativos ASO y APX. Optimizo flujos transaccionales y resuelvo incidencias críticas en producción bajo SLA bancarios.",
      en: "Development and integration of the Brazil operational module in BBVA Pivot Net, a global treasury and cross-border payments platform for corporate clients, using Java, Spring Boot and Angular on the corporate ASO and APX frameworks. I optimize transactional flows and resolve critical production incidents under banking SLAs.",
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
      es: "Desarrollo de aplicaciones internas de gestión de créditos con Java, Spring Boot y Angular, y participación en microservicios para mejorar su escalabilidad y mantenimiento. Implementé pipelines CI/CD en Jenkins que redujeron los tiempos de despliegue en un 80% y reduje el tiempo medio de respuesta ante incidentes críticos en producción de 2 horas a 20 minutos.",
      en: "Development of internal credit management applications with Java, Spring Boot and Angular, and contribution to microservices to improve their scalability and maintainability. I implemented CI/CD pipelines in Jenkins that cut deployment times by 80%, and reduced the mean response time to critical production incidents from 2 hours to 20 minutes.",
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
      es: "Participé en el proyecto BPM de gestión de créditos simplificando procesos y documentando las nuevas funcionalidades. Resolví tickets de causa raíz junto con Mesa de Ayuda y desarrollé una plataforma unificada para RRHH que permitía consultar a Compliance cada candidato a un puesto.",
      en: "I took part in the BPM credit management project, simplifying processes and documenting new features. I resolved root-cause tickets together with the Help Desk and built a unified HR platform that allowed Compliance to be consulted on each candidate for a position.",
    },
  },
];
