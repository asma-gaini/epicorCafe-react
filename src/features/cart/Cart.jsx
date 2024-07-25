import "../cart/cart.css";
import { generaltext } from "../../utils/constants";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useMemo, useState } from "react";
import CartPopup from "./CartPopup";

function Cart() {
  const { t, i18n } = useTranslation();
  const [showCartPopup, setShowCartPopup] = useState(false);

  const themeValue = useSelector((store) => store.themePage.theme);
  console.log("theme" + themeValue);
  const cartValues = useSelector((store) => store.shoppingCart.cartItems);
  const totalprice = useMemo(() => {
    console.log(Object.values(cartValues));
    return Object.values(cartValues).reduce(
      (acc, curr) => acc + curr[0] * curr[2],
      0
    );
  }, [cartValues]);

  function openPopupCart() {
    setShowCartPopup(true);
  }
  function closePopupCart() {
    setShowCartPopup(false);
  }

  return (
    <>
      {totalprice !== 0 && (
        <button
          type="button"
          className={`btn btn-info btn-lg pay-off ${
            themeValue === "light"
              ? "pay-off-Backgroundlight"
              : "pay-off-BackgroundDark"
          }`}
          onClick={openPopupCart}
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
      />
    </>
  );
}

export default Cart;
