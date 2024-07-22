import { menu } from "../../utils/constants";
import "./menu.css";
import "./sliderMenu.css";
import { useTranslation } from "react-i18next";

function SliderMenu() {
  const { t, i18n } = useTranslation();

  function linked(CategoryID) {
    const otherMenu = document.querySelectorAll("div.slider[CategoryID]");
    for (let i = 0; i < otherMenu.length; i++) {
      if (otherMenu[i].getAttribute("Categoryid") != CategoryID) {
        otherMenu[i].style.display = "none";
      } else {
        otherMenu[i].style.display = "block";
      }
    }
  }

  return (
    <main className="grid-item main">
      <div className="items menu-bar">
        {menu.map((categoriItem) => (
          <button
            categoryid={categoriItem.CategoryID}
            className="menu-bar_section menu-bar_section_click-Backgroundlight"
            onClick={() => linked(categoriItem.CategoryID)}
          >
            <img
              src={categoriItem.headerImg}
              alt={categoriItem.headerNameEN}
              className="menu-bar_section_image"
            />
            <div className="menu-bar_section_info">
              <p className="menu-bar_section_name-en">
                {t(categoriItem.headerNameEN)}
              </p>
              <p className="menu-bar_section_name-fa">
                {t(categoriItem.headerNameFA)}
              </p>
            </div>
          </button>
        ))}
      </div>
    </main>
  );
}

export default SliderMenu;
