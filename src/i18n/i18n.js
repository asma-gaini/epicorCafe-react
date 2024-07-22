import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { menuEn, menuFa } from "../utils/constants";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: { ...menuEn } },
    fa: { translation: { ...menuFa } },
  },
  lng: "fa",
});

export default i18n;
