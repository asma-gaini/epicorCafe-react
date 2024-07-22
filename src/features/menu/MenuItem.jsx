import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./menu.css";
import { generaltext } from "../../utils/constants";

function MenuItem({ menuItem }) {
  const { t, i18n } = useTranslation();

  const [numOfProduct, seNumOfProduct] = useState(0);

  function AddPurchaseNumBtn() {
    seNumOfProduct((prev) => prev + 1);
  }

  function increaseNumOfProduct() {
    seNumOfProduct((prev) => prev + 1);
  }

  function decreaseNumOfProduct() {
    seNumOfProduct((prev) => prev - 1);
  }

  return (
    <div class="menu_contant menu_contant-Backgroundlight">
      <div class="menu_contant_image">
        <img src={menuItem.ImageURL} alt={t(menuItem.Title)} />
      </div>
      <div class="menu_contant_info">
        <h4>{t(menuItem.Title)}</h4>
        <p>{t(menuItem.Description)}</p>
        <span class="posPopular glyphicon glyphicon-heart Direction-rtl"></span>
        <div class="menut_contant_info_price">
          <div class="menu_contant_info_price_contant">
            <h4 class="price">{menuItem.Price}</h4>
            <p>{t(generaltext.MonetaryUnit)}</p>
          </div>
          <div class="btn-class">
            {!numOfProduct ? (
              <button
                class="menu_contant_info_price_btn Direction-rtl"
                onClick={AddPurchaseNumBtn}
              >
                {t(generaltext.AddToNotebook)}
              </button>
            ) : null}
            {numOfProduct ? (
              <div class="Purchase-count Direction-rtl">
                <button class="btn-counter" onClick={decreaseNumOfProduct}>
                  <span>➖</span>
                </button>
                <span class="span">{numOfProduct}</span>
                <button class="btn-counter" onClick={increaseNumOfProduct}>
                  <span>➕</span>
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
