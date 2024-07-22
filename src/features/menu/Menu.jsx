import { useState } from "react";
import { menu } from "../../utils/constants";
import { changeLanguage } from "../../utils/helper";
import "./menu.css";
import "../cart/cart.css";
import Category from "./Category";
import Cart from "../cart/Cart";

function Menu() {
  return (
    <div>
      {menu.map((categoriItem) => (
        <Category categoriItem={categoriItem} key={categoriItem.CategoryID} />
      ))}
      <Cart />
    </div>
  );
}

export default Menu;
