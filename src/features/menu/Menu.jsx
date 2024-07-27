import { useMemo, useState } from "react";
import { menu } from "../../utils/constants";
import { changeLanguage } from "../../utils/helper";
import "./menu.css";
import "../cart/cart.css";
import Category from "./Category";
import Cart from "../cart/Cart";

function Menu() {
  const menuWithPopular = useMemo(() => {
    const papularCategory = {
      CategoryID: 0,
      headerNameFA: "popular",
      headerNameEN: "popularEn",
      headerImg:
        "../../../public/image/main page/food & this category menu/popular/icons8-food-menu-53.png",
      Info: [],
    };
    menu.forEach((category) => {
      category.Info.forEach((item) => {
        if (item.isPopular) {
          papularCategory.Info.push({
            ...item,
            categoryId: category.CategoryID,
          });
        }
      });
    });
    return [papularCategory, ...menu];
  }, []);
  console.log(menuWithPopular);
  return (
    <div className="height">
      {menuWithPopular.map((categoriItem) => (
        <Category categoriItem={categoriItem} key={categoriItem.CategoryID} />
      ))}
      <Cart />
    </div>
  );
}

export default Menu;
