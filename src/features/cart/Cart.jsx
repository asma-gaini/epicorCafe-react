import "../cart/cart.css";
import { generaltext } from "../../utils/constants";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useMemo, useState } from "react";
import CartPopup from "./CartPopup";

function Cart() {
  const { t, i18n } = useTranslation();
  const [showCartPopup, setShowCartPopup] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const themeValue = useSelector((store) => store.themePage.theme);
  const cartValues = useSelector((store) => store.shoppingCart.cartItems);
  const totalprice = useMemo(() => {
    return Object.values(cartValues).reduce(
      (acc, curr) => acc + curr[0] * curr[2],
      0
    );
  }, [cartValues]);

  function openPopupCart() {
    setShowCart(true);
    setShowCartPopup(true);
  }
  function closePopupCart() {
    setShowCart(false);

    setShowCartPopup(false);
  }
  function mouseEnter() {
    if (themeValue === "light") {
      document
        .querySelector(".btn-info")
        .classList.add("btn-info-Hovering-light");
    } else {
      document
        .querySelector(".btn-info")
        .classList.add("btn-info-Hovering-dark");
    }
  }
  function mouseLeave() {
    if (themeValue === "light") {
      document
        .querySelector(".btn-info")
        .classList.remove("btn-info-Hovering-light");
    } else {
      document
        .querySelector(".btn-info")
        .classList.remove("btn-info-Hovering-dark");
    }
  }

  return (
    <>
      {totalprice !== 0 && (
        <button
          type="button"
          className={
            `btn btn-info btn-lg pay-off cartColor ${
              themeValue === "light"
                ? "pay-off-Backgroundlight"
                : "pay-off-BackgroundDark"
            }` + `${i18n.language === "fa" ? " persianFont" : " englishFont"}`
          }
          onClick={openPopupCart}
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
        >
          <span>{t(generaltext.bill)}</span>
          <span className="bill"> {totalprice} </span>
          <span>{t(generaltext.MonetaryUnit)}</span>
        </button>
      )}

      <CartPopup
        showCartPopup={showCartPopup}
        setShowCartPopup={setShowCartPopup}
        closePopupCart={closePopupCart}
        totalprice={totalprice}
        setShowCart={setShowCart}
        showCart={showCart}
      />
    </>
  );
}

export default Cart;
