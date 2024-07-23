import { useMemo, useState } from "react";
import { menu } from "../../utils/constants";
import { changeLanguage } from "../../utils/helper";
import "./menu.css";
import "../cart/cart.css";
import Category from "./Category";
import Cart from "../cart/Cart";

function Menu() {
  const [tolatPrice, setTotalPrice] = useState(0);
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
            categryId: category.CategoryID,
          });
        }
      });
    });
    return [papularCategory, ...menu];
  }, []);
  console.log(menuWithPopular);
  // {
  //   CategoryID: 4,
  //   headerNameFA: "IceCoffee",
  //   headerNameEN: "IceCoffeeEn",
  //   headerImg:
  //     "../../public/image/main page/food & this category menu/ice cofee/ice cofee.png",
  //   Info: [
  //     {
  //       codeNumber: 23,
  //       isPopular: "false",
  //       Title: "IcedLatte",
  //       Price: 69,
  //       ImageURL:
  //         "../../public/image/main page/food & this category menu/ice cofee/1.jpg",
  //     },
  //   ],
  // },
  return (
    <div>
      {menuWithPopular.map((categoriItem) => (
        <Category
          categoriItem={categoriItem}
          key={categoriItem.CategoryID}
          tolatPrice={tolatPrice}
          setTotalPrice={setTotalPrice}
        />
      ))}
      <Cart tolatPrice={tolatPrice} setTotalPrice={setTotalPrice} />
    </div>
  );
}

export default Menu;
