import { menu, menuFa, menuEn } from "../utils/constants";

export function changeLanguage() {
 

  const text_keys = document.querySelectorAll("[text_key]");

  for (let i = 0; i < text_keys.length; i++) {
    for (let j = 0; j < text_keys[i].attributes.length; j++) {
      if (text_keys[i].attributes[j].name == "text_key") {
        // console.log(text_keys[i].attributes[j]);
      }
    }
  }
}
// import { useTranslation } from "react-i18next";


//   const { t, i18n } = useTranslation();


//   console.log(i18n.language);