import { menu, generaltext } from "../../utils/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "./menu.css";
import "./sliderMenu.css";
import { useTranslation } from "react-i18next";
import GatherMenu from "./GatherMenu";
import { useSelector } from "react-redux";
function SliderMenu() {
  const { t, i18n } = useTranslation();
  const themeValue = useSelector((store) => store.themePage.theme);
  const darkMoad = document.querySelector(
    ".menu-bar_section_click-BackgroundDark"
  );
  const lightMoad = document.querySelector(
    ".menu-bar_section_click-Backgroundlight"
  );

  if (themeValue === "light") {
    if (darkMoad) {
      document
        .querySelector(".menu-bar_section_click-BackgroundDark")
        .classList.add("menu-bar_section_click-Backgroundlight");
      document
        .querySelector(".menu-bar_section_click-Backgroundlight")
        .classList.remove("menu-bar_section_click-BackgroundDark");
    }
  } else if (themeValue === "dark") {
    if (lightMoad) {
      document
        .querySelector(".menu-bar_section_click-Backgroundlight")
        .classList.add("menu-bar_section_click-BackgroundDark");
      document
        .querySelector(".menu-bar_section_click-BackgroundDark")
        .classList.remove("menu-bar_section_click-Backgroundlight");
    }
  }

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
        if (themeValue === "light") {
          otherCategoryBtn[i].classList.add(
            "menu-bar_section_click-Backgroundlight"
          );
        } else {
          otherCategoryBtn[i].classList.add(
            "menu-bar_section_click-BackgroundDark"
          );
        }

        otherCategoryBtn[i].focus();
      } else {
        if (themeValue === "light") {
          otherCategoryBtn[i].classList.remove(
            "menu-bar_section_click-Backgroundlight"
          );
          otherCategoryBtn[i].classList.remove(
            "menu-bar_section_click-BackgroundDark"
          );
        } else {
          otherCategoryBtn[i].classList.remove(
            "menu-bar_section_click-BackgroundDark"
          );
          otherCategoryBtn[i].classList.remove(
            "menu-bar_section_click-Backgroundlight"
          );
        }
      }
    }
  }

  return (
    <>
      <main
        className={` ${i18n.language === "fa" ? "persianFont" : "englishFont"}`}
      >
        {/* <Swiper
          spaceBetween={10}
          slidesPerView={11}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        > */}
        <div className="items menu-bar">
          <div className="item item1">
            {/* <SwiperSlide> */}
            <button
              categoryid="0"
              className={`menu-bar_section ${
                i18n.language === "fa" ? "persianFont" : "englishFont"
              }`}
              onClick={() => linked(0)}
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
            {/* </SwiperSlide> */}

            {menu.map((categoriItem) => (
              // <SwiperSlide>
              <button
                categoryid={categoriItem.CategoryID}
                className={
                  `menu-bar_section ${
                    categoriItem.CategoryID === 1
                      ? "menu-bar_section_click-Backgroundlight"
                      : ""
                  }` +
                  `${i18n.language === "fa" ? " persianFont" : " englishFont"}`
                }
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
              // </SwiperSlide>
            ))}
          </div>
        </div>
        {/* </Swiper> */}
      </main>
      <GatherMenu linked={linked} />
    </>
  );
}

export default SliderMenu;
