import { menu, menuFa, menuEn } from "../utils/constants";

export function changeLanguage() {
  var menuFaJsonString = JSON.stringify(menuFa);
  var menuFaJson = JSON.parse(menuFaJsonString);

  var menuEnJsonString = JSON.stringify(menuEn);
  var menuEnJson = JSON.parse(menuEnJsonString);

  const text_keys = document.querySelectorAll("[text_key]");

  for (let i = 0; i < text_keys.length; i++) {
    for (let j = 0; j < text_keys[i].attributes.length; j++) {
      if (text_keys[i].attributes[j].name == "text_key") {
        // console.log(text_keys[i].attributes[j]);
      }
    }
  }
}
