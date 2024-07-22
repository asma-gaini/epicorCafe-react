import { useEffect, useState } from "react";
import React from "react";
import { useTranslation } from "react-i18next";
import "./multiLanguage.css";

function MultiLanguage() {
  const { t, i18n } = useTranslation();

  const onchangeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };
  console.log(t("breakfast"));
  return (
    <select className="form-select" id="language" onChange={onchangeLanguage}>
      <option value="fa" className="optionSelectBox" selected>
        فارسی
      </option>
      <option value="en" className="optionSelectBox">
        English
      </option>
    </select>
  );
}

export default MultiLanguage;
