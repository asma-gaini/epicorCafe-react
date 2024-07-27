import { useTranslation } from "react-i18next";
import Menu from "./Menu";
import SliderMenu from "./SliderMenu";

function MainMenu() {
  const { t, i18n } = useTranslation();

  return (
    <div
      className={`${i18n.language === "fa" ? "persianFont" : "englishFont"}`}
    >
      <SliderMenu />
      <Menu />
    </div>
  );
}

export default MainMenu;
