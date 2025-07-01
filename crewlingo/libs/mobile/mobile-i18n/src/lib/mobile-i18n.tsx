import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as Localization from "expo-localization";
import { ru, en } from "@crewlingo/i18n";

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
    lng: languageTag,             // <- язык пользователя по приоритету
    fallbackLng: fallback,        // <- если не найден, использовать "en"
    resources: {
      en: { translation: en },
      ru: { translation: ru }
    },
    interpolation: { escapeValue: false }
  });

export default i18n;
