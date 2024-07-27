import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { generaltext } from "../../utils/constants";
import { menu } from "../../utils/constants";

import "./gatherMenu.css";

function GatherMenu({ linked }) {
  const { t, i18n } = useTranslation();
  const [showDropdownMenu, setShowDropdownMenu] = useState(false);
  const themeValue = useSelector((store) => store.themePage.theme);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  function openNav() {
    setShowDropdownMenu(true);
  }
  function closeNav() {
    setShowDropdownMenu(false);
  }

  function mouseEnter(categoryId) {
    const menuItem = document.querySelector(
      "button.ghterBtn[CategoryID ='" + categoryId + "']"
    );

    if (themeValue === "light") {
      menuItem.classList.add("overlay-content-hovering-light");
    } else {
      menuItem.classList.add("overlay-content-hovering-dark");
    }
  }
  function mouseLeave(categoryId) {
    const menuItem = document.querySelector(
      "button.ghterBtn[CategoryID ='" + categoryId + "']"
    );
    if (themeValue === "light") {
      menuItem.classList.remove("overlay-content-hovering-light");
    } else {
      menuItem.classList.remove("overlay-content-hovering-dark");
    }
  }

  return (
    <>
      <div
        id="myNav"
        className={`overlay ${
          showDropdownMenu === false ? "hideMenu" : "showMenu"
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
          ×
        </a>

        <div
          className="overlay-content"
        >
          <a onClick={closeNav} href="#">
            <button
              categoryid="0"
              className={`menu-bar_section ghterBtn ${
                i18n.language === "fa" ? "persianFont" : "englishFont"
              }`}
              onClick={() => linked(0)}
              onMouseEnter={() => mouseEnter("0")}
              onMouseLeave={() => mouseLeave("0")}
            >
              <img
                src="../../../public/image/main page/food & this category menu/popular/icons8-food-menu-53.png"
                alt={t(generaltext.popularEn)}
                className="menu-bar_section_image"
              />
              <div className="menu-bar_section_info">
                <p className="menu-bar_section_name-en">
                  {t(generaltext.popularEn)}
                </p>
                <p className="menu-bar_section_name-fa">
                  {t(generaltext.popular)}
                </p>
              </div>
            </button>
            {menu.map((categoriItem) => (
              <button
                categoryid={categoriItem.CategoryID}
                className={
                  `menu-bar_section ghterBtn ${
                    categoriItem.CategoryID === 1
                      ? "menu-bar_section_click-Backgroundlight"
                      : ""
                  }` +
                  `${i18n.language === "fa" ? " persianFont" : " englishFont"}`
                }
                onClick={() => linked(categoriItem.CategoryID)}
                onMouseEnter={() => mouseEnter(categoriItem.CategoryID)}
                onMouseLeave={() => mouseLeave(categoriItem.CategoryID)}
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
          </a>
        </div>
      </div>

      <div className="dropdownButton">
        <button
          className={`gatherMenu ${
            i18n.language === "fa" ? "persianFont" : "englishFont"
          }`}
          onClick={openNav}
        >
          {t(generaltext.menuGathe)}
        </button>
      </div>
    </>
  );
}

export default GatherMenu;
