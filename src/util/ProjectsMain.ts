
// SE IMPORTAN LOS ICONOS DE LAS TECNOLOGÍAS
import {TAGS} from "@util/TagsIcons";
import type { Lang } from "@i18n/ui";

type Localized = Record<Lang, string>;

export const PROJECTS = [
    {
      title: "BeautyBook",
      description: {
        es: "App web para el agendamiento de citas. Autenticación y confirmación via Email, gestión de servicios, roles de cliente y admin, manejo de horarios y más.  ",
        en: "Web app for booking appointments. Email authentication and confirmation, service management, client and admin roles, schedule handling and more.",
      } as Localized,
      link: "https://beautybookdev.alwaysdata.net/",
      image: "/projects/image.webp",
      tags: [TAGS.PHP, TAGS.SASS, TAGS.JAVASCRIPT,TAGS.MYSQL],
    },
    {
      title: "GifsApp",
      description: {
        es: "Plataforma didáctica para la búsqueda de GIFS divertidos y modernos, con filtrado integrado, manejo de sesión, guardado de búsquedas anteriores y más.",
        en: "Educational platform to search for fun, modern GIFs, with built-in filtering, session handling, saved previous searches and more.",
      } as Localized,
      link: "https://santiagocarrillo27.github.io/gifsApp/",
      github:"https://github.com/SantiagoCarrillo27/gifsApp",
      image: "/projects/appGifs.webp",
      tags: [TAGS.ANGULAR, TAGS.BOOTSTRAP, TAGS.TYPESCRIPT],
    },
  ];


  export const OTHER_PROJECTS = [
    {
      title: "CountryApp",
      description: {
        es: "Permite ver la cantidad de población de un país y sus capitales, además de sus banderas y demás información de países.",
        en: "Lets you see a country's population and capitals, along with its flag and other country information.",
      } as Localized,
      link: "https://santiagocarrillo27.github.io/CountryApp/",
      tags: [TAGS.ANGULAR, TAGS.BOOTSTRAP, TAGS.TYPESCRIPT],
    },
    {
        title: "BlackJack",
        description: {
          es: "Juego web interactivo de cartas, donde te enfrentas a la computadora, con una baraja que lanza valores de cartas al azar y gana quién este más cerca de los 21 puntos.",
          en: "Interactive web card game where you play against the computer, with a deck that deals random card values; whoever gets closest to 21 points wins.",
        } as Localized,
        link: "https://santiagocarrillo27.github.io/BlackJack/",
        tags: [TAGS.JAVASCRIPT, TAGS.BOOTSTRAP, TAGS.HTML],
      },
      {
        title: "Clon Udemy",
        description: {
          es: "Plataforma didáctica para la búsqueda de GIFS divertidos y modernos, con filtrado integrado, manejo de sesión, guardado de búsquedas anteriores y más.",
          en: "Educational platform to search for fun, modern GIFs, with built-in filtering, session handling, saved previous searches and more.",
        } as Localized,
        link: "https://santiagocarrillo27.github.io/pagina-principal-udemy/",
        tags: [TAGS.SASS, TAGS.JAVASCRIPT, TAGS.CSS, TAGS.HTML],
      },
      {
        title: "Muebles Twiligth",
        description: {
          es: "Página web de tienda de muebles, moderna y exclusiva, con multipágina y adaptada a dispositivos móviles.",
          en: "Modern, exclusive furniture store website, multi-page and optimized for mobile devices.",
        } as Localized,
        link: "https://santiagocarrillo27.github.io/tienda-mueble/",
        tags: [TAGS.CSS, TAGS.JAVASCRIPT, TAGS.HTML, TAGS.SASS],
      }

  ]
