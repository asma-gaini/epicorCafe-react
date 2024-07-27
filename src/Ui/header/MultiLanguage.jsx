import { useEffect, useState } from "react";
import React from "react";
import { useTranslation } from "react-i18next";
import "./multiLanguage.css";
import { useSelector } from "react-redux";

function MultiLanguage() {
  const { t, i18n } = useTranslation();

  const themeValue = useSelector((store) => store.themePage.theme);

  const onchangeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };
  // console.log(t("breakfast"));
  return (
    <select
      className={`form-select ${
        themeValue === "light"
          ? "headerBtn-Backgroundlight"
          : "headerBtn-BackgroundDark"
      }`+`${i18n.language === "fa" ? " persianFont" : " englishFont"}` }
      id="language"
      onChange={onchangeLanguage}
    >
      <option value="fa" className="optionSelectBox persianFont" selected>
        فارسی
      </option>
      <option value="en" className="optionSelectBox englishFont">
        English
      </option>
    </select>
  );
}

export default MultiLanguage;
