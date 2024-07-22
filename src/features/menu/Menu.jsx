import { useState } from "react";
import { menu } from "../../utils/constants";
import { changeLanguage } from "../../utils/helper";
import "./menu.css";
import Category from "./Category";

function Menu() {
  return (
    <div>
      {menu.map((categoriItem) => (
        <Category categoriItem={categoriItem} key={categoriItem.CategoryID} />
      ))}
    </div>
  );
}

export default Menu;
