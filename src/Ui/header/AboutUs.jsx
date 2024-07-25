import { useState } from "react";
import { useTranslation } from "react-i18next";
import { generaltext } from "../../utils/constants";
import { useSelector } from "react-redux";

import "./aboutUs.css";
import CustomMap from "./CustomMap";

function AboutUs() {
  const themeValue = useSelector((store) => store.themePage.theme);

  const [showAbout, setShowAbout] = useState(false);
  const { t, i18n } = useTranslation();

  function openAbout() {
    setShowAbout(true);
  }
  function closeAbout() {
    setShowAbout(false);
  }

  return (
    <div className="wrapAboutUs">
      <div className="introAboutUs">
        <button
          className={`${
            themeValue === "light"
              ? "headerBtn-Backgroundlight"
              : "headerBtn-BackgroundDark"
          }`}
          onClick={openAbout}
        >
          {t(generaltext.aboutUs)}
        </button>
      </div>
      <div
        id="wrap_aboutUs"
        className={`wrapAboutUs_popup ${
          showAbout === false ? "hideAbout" : "showAbout"
        }`}
      >
        <div className="popupContainAboutUs">
          <div
            className={`boxAboutUs ${
              themeValue === "light"
                ? "box-Backgroundlight"
                : "box-BackgroundDark"
            }`}
          >
            <p>{t(generaltext.aboutUs)}</p>
          </div>

          <div
            className={`boxAboutUs ${
              themeValue === "light"
                ? "title-Backgroundlight"
                : "title-BackgroundDark"
            }`}
          >
            <p>{t(generaltext.ContactUs)}</p>
            <p>{t(generaltext.tel)}</p>
            <p>{t(generaltext.adresse)}</p>
            <CustomMap />
            <center>
              <button className={`innerAboutBtn ${
              themeValue === "light"
                ? "innerAboutBtn-Backgroundlight"
                : "innerAboutBtn-BackgroundDark"
            }`} onClick={closeAbout}>
                {t(generaltext.closeAboutUsBtn)}
              </button>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
