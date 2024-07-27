import { useTranslation } from "react-i18next";
import AboutUs from "./AboutUs";
import "./header.css";
import Logo from "./Logo";
import MultiLanguage from "./MultiLanguage";
import Theme from "./Theme";

function Header() {
  const { t, i18n } = useTranslation();

  return (
    <div
      className={`${i18n.language === "fa" ? "persianFont" : "englishFont"}`}
    >
      <MultiLanguage />
      <Theme />
      <Logo />
      <AboutUs />
    </div>
  );
}

export default Header;
