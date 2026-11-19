import { defaultLang, ui, type Lang, type UiKey } from "./ui";

/** Idioma de la página actual (Astro i18n). */
export function getLang(astro: { currentLocale?: string }): Lang {
  const locale = astro.currentLocale;
  return locale === "en" || locale === "es" ? locale : defaultLang;
}

/** Devuelve la función de traducción para un idioma, con fallback al español. */
export function useTranslations(lang: Lang) {
  return function t(key: UiKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/** Ruta de la home para un idioma: `/` (es) o `/en/` (en). */
export function localizedPath(lang: Lang): string {
  return lang === defaultLang ? "/" : `/${lang}/`;
}
