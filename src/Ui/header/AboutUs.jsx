import { useState } from "react";
import { useTranslation } from "react-i18next";
import { generaltext } from "../../utils/constants";

import "./aboutUs.css";
import CustomMap from "./CustomMap";

function AboutUs() {
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
        <button className="aboutUsLink" onClick={openAbout}>
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
          <div className="titleAboutUs">
            <p>{t(generaltext.aboutUs)}</p>
          </div>

          <div className="boxAboutUs">
            <p>{t(generaltext.ContactUs)}</p>
            <p>{t(generaltext.tel)}</p>
            <p>{t(generaltext.adresse)}</p>
            <CustomMap />
            <center>
              <button className="innerAboutBtn" onClick={closeAbout}>
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

