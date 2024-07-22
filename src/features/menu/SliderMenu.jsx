import { menu } from "../../utils/constants";
import "./menu.css";
import "./sliderMenu.css";
import { useTranslation } from "react-i18next";

function SliderMenu() {
  const { t, i18n } = useTranslation();

  function linked(CategoryID) {
    const otherMenu = document.querySelectorAll("div.slider[CategoryID]");
    const otherCategoryBtn = document.querySelectorAll(
      "button.menu-bar_section[CategoryID]"
    );

    for (let i = 0; i < otherMenu.length; i++) {
      if (otherMenu[i].getAttribute("Categoryid") != CategoryID) {
        otherMenu[i].style.display = "none";
      } else {
        otherMenu[i].style.display = "flex";
      }
    }
    for (let i = 0; i < otherCategoryBtn.length; i++) {
      if (otherCategoryBtn[i].getAttribute("Categoryid") == CategoryID) {
        otherCategoryBtn[i].classList.add(
          "menu-bar_section_click-Backgroundlight"
        );
      } else {
        otherCategoryBtn[i].classList.remove(
          "menu-bar_section_click-Backgroundlight"
        );
      }
    }
  }

  return (
    <main className="grid-item main">
      <div className="items menu-bar">
        {menu.map((categoriItem) => (
          <button
            categoryid={categoriItem.CategoryID}
            className="menu-bar_section"
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
