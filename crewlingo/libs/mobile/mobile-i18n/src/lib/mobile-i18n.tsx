import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as Localization from "expo-localization";

const fallback = "en";
const supportedLanguages = ["en", "ru"];

const locales = Localization.getLocales();

let languageTag = fallback;
if (locales && locales.length > 0) {
  const primary = locales[0].languageCode;
  if (primary && supportedLanguages.includes(primary)) {
    languageTag = primary;
  }
}

i18n
  .use(initReactI18next)
  .init({
    lng: languageTag,
    fallbackLng: fallback,
    resources: {
      en: { translation: require("@crewlingo/i18n/locales/en.json") },
      ru: { translation: require("@crewlingo/i18n/locales/ru.json") }
    },
    interpolation: { escapeValue: false }
  });

export default i18n;
