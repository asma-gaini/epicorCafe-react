import { useState } from "react";
import { menu } from "../../utils/constants";
import { changeLanguage } from "../../utils/helper";
import "./menu.css";
import "../cart/cart.css";
import Category from "./Category";
import Cart from "../cart/Cart";

function Menu() {
  const [tolatPrice, setTotalPrice] = useState(0);
  return (
    <div>
      {menu.map((categoriItem) => (
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
