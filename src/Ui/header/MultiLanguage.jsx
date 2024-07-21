import { useEffect, useState } from "react";
import React from "react";
import "./multiLanguage.css";

function MultiLanguage() {
  localStorage.clear();
  const [language, setLanguage] = useState(localStorage?.getItem("lang"), "");
  useEffect(() => {
    localStorage.setItem("lang", language);
  }, [language]);

  const onchangeLanguage = (e) => {
    setLanguage(e.target.value);
    console.log("value : ", e.target.value);
  };
  console.log("lang : " + localStorage.getItem("lang"));
  return (
    <select
      className="form-select"
      // aria-label="Default select example"
      id="language"
      value={language}
      // onclick="changeDirection()"
      onchange={onchangeLanguage}
    >
      <option className="optionSelectBox" selected>
        فارسی
      </option>
      <option className="optionSelectBox">English</option>
    </select>
  );
}

export default MultiLanguage;
