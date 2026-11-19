export const languages = {
  es: "Español",
  en: "English",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "es";

export const ui = {
  es: {
    "meta.title":
      "Porfolio de Santiago CS - Desarrollador y Programador Web con +2 años de experiencia",
    "meta.description":
      "Contrata a Santiago Carrillo para crear tu aplicación o página web. Programador Web y Desarrollador de Software. Experto en la creación de experiencias web innovadoras y funcionales.",

    "section.experience": "Experiencia Laboral",
    "section.projects": "Proyectos",
    "section.about": "Sobre Mí",

    "main.available": "Disponible ahora",

    "experience.current": "Actualmente",
    "experience.more": "Saber mas...",

    "cta.title": "¿Tienes algún proyecto?",
    "cta.subtitle": "¡Trabajemos Juntos!",
    "cta.mail": "Correo",

    "projects.imageAlt": "Imagen proyecto personal realizado",
    "projects.code": "Código",
    "projects.preview": "Vista previa",

    "about.imageAlt":
      "Imagen de Santiago carrillo, desarrollador web de aplicaciones únicas",
    "about.cardTitle": "Ingeniero de Sistemas",
    "about.cardStatus": "En línea",
    "about.cardContact": "Contáctame",

    "footer.linkedin": "Perfil de LinkedIn de Santiago Carrillo",
    "footer.mail": "Enviar un correo a Santiago Carrillo",
    "footer.github": "Perfil de GitHub de Santiago Carrillo",

    "lang.label": "Cambiar idioma",
  },
  en: {
    "meta.title":
      "Santiago CS Portfolio - Web Developer & Programmer with 2+ years of experience",
    "meta.description":
      "Hire Santiago Carrillo to build your application or website. Web Developer and Software Engineer. Expert in creating innovative and functional web experiences.",

    "section.experience": "Work Experience",
    "section.projects": "Projects",
    "section.about": "About Me",

    "main.available": "Available now",

    "experience.current": "Current",
    "experience.more": "Learn more...",

    "cta.title": "Have a project in mind?",
    "cta.subtitle": "Let's work together!",
    "cta.mail": "Mail",

    "projects.imageAlt": "Screenshot of a personal project",
    "projects.code": "Code",
    "projects.preview": "Preview",

    "about.imageAlt":
      "Picture of Santiago Carrillo, web developer building unique applications",
    "about.cardTitle": "Software Engineer",
    "about.cardStatus": "Online",
    "about.cardContact": "Contact Me",

    "footer.linkedin": "Santiago Carrillo's LinkedIn profile",
    "footer.mail": "Send an email to Santiago Carrillo",
    "footer.github": "Santiago Carrillo's GitHub profile",

    "lang.label": "Change language",
  },
} as const;

export type UiKey = keyof (typeof ui)["es"];
