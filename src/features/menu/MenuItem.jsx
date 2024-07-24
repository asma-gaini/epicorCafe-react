import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./menu.css";
import { generaltext } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { setCartItems } from "../../store/slices/shoppingCartSlice";

function MenuItem({ menuItem, tolatPrice, setTotalPrice, categoryId }) {
  const { t, i18n } = useTranslation();
  const [numOfProduct, seNumOfProduct] = useState(0);
  const cartValue = useSelector(
    (store) => store.shoppingCart.cartItems?.[menuItem.codeNumber] || 0
  );

  const dispatch = useDispatch();
  // function AddPurchaseNumBtn() {
  //   seNumOfProduct((prev) => prev + 1);
  //   setTotalPrice((prev) => prev + menuItem.Price);
  // }

  function increaseNumOfProduct() {
    dispatch(
      setCartItems({
        categoryId: categoryId === 0 ? menuItem.categoryId : categoryId,
        codeNumber: menuItem.codeNumber,
        value: 1,
        price: menuItem.Price,
        nameFood: menuItem.Title,
        imageFood: menuItem.ImageURL,
      })
    );
  }

  function decreaseNumOfProduct() {
    dispatch(
      setCartItems({
        categoryId: categoryId,
        codeNumber: menuItem.codeNumber,
        value: -1,
        price: menuItem.Price,
        nameFood: menuItem.Title,
        imageFood: menuItem.ImageURL,
      })
    );
  }

  return (
    <div
      className={`menu_contant menu_contant-Backgroundlight ${
        i18n.language === "fa" ? "directionCss-rtl" : "directionCss-ltr"
      }`}
    >
      <div className="menu_contant_image">
        <img src={menuItem.ImageURL} alt={t(menuItem.Title)} />
      </div>
      <div className="menu_contant_info">
        <h4>{t(menuItem.Title)}</h4>
        <p>{t(menuItem.Description)}</p>
        {menuItem.isPopular && (
          <img
            src="../../../public/image/general image/heart-full.svg"
            className={`posPopular ${
              i18n.language === "fa" ? "Direction-rtl" : "Direction-ltr"
            }`}
          ></img>
        )}
        <div className="menut_contant_info_price">
          <div className="menu_contant_info_price_contant">
            <h4 className="price">{menuItem.Price}</h4>
            <p>{t(generaltext.MonetaryUnit)}</p>
          </div>
          <div className="btn-class">
            {!cartValue ? (
              <button
                className={`menu_contant_info_price_btn ${
                  i18n.language === "fa" ? "Direction-rtl" : "Direction-ltr"
                }`}
                onClick={increaseNumOfProduct}
              >
                {t(generaltext.AddToNotebook)}
              </button>
            ) : null}
            {cartValue ? (
              <div
                className={`Purchase-count ${
                  i18n.language === "fa" ? "Direction-rtl" : "Direction-ltr"
                }`}
              >
                <button className="btn-counter" onClick={decreaseNumOfProduct}>
                  <span>➖</span>
                </button>
                <span className="span">{cartValue[0]}</span>
                <button className="btn-counter" onClick={increaseNumOfProduct}>
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
