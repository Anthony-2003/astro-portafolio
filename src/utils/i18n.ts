// src/utils/i18n.ts
import en from "../i18n/en.json";
import es from "../i18n/es.json";

export type Locale = "en" | "es";

type Dictionary = typeof en;

const dictionaries: Record<Locale, Dictionary> = {
  en,
  es,
};

function getDeepValue(obj: any, path: string): string | undefined {
  return path.split(".").reduce((acc, key) => acc?.[key], obj);
}

export default function useTranslations(locale: string) {
  const selectedLocale: Locale = (
    ["en", "es"].includes(locale) ? locale : "en"
  ) as Locale;

  const dict = dictionaries[selectedLocale];

  return function t(key: string): string {
    return getDeepValue(dict, key) ?? key;
  };
}
