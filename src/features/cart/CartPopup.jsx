import { useState } from "react";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { setCartItems } from "../../store/slices/shoppingCartSlice";
import { generaltext } from "../../utils/constants";

import Receipt from "./Receipt";

import "../cart/cart.css";

function CartPopup({
  showCartPopup,
  setShowCartPopup,
  closePopupCart,
  totalprice,
  setShowCart,
  showCart,
}) {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const [showReceipt, setShowReceipt] = useState(false);

  const cartValues = useSelector((store) => store.shoppingCart.cartItems);
  const themeValue = useSelector((store) => store.themePage.theme);

  function openReceipt() {
    setShowCart(true);
    setShowReceipt(true);
    setShowCartPopup(false);
  }
  function closeReceipt() {
    setShowReceipt(false);
    setShowCart(false);
  }

  function increaseNumOfProduct(product) {
    dispatch(
      setCartItems({
        codeNumber: product[0],
        value: 1,
        categoryId: product[1][1],
        price: product[1][2],
        nameFood: product[1][3],
        imageFood: product[1][4],
      })
    );
  }

  function decreaseNumOfProduct(product) {
    dispatch(
      setCartItems({
        codeNumber: product[0],
        value: -1,
        categoryId: product[1][1],
        price: product[1][2],
        nameFood: product[1][3],
        imageFood: product[1][4],
      })
    );
  }

  return (
    <>
      <div
        className={`modal fade in ${
          showCart === false ? "hidePopup" : "showPopup"
        }`}
        id="myModal"
        role="dialog"
      >
        <div className="modal-dialog">
          <div
            className={
              `modal-content showPopup ${
                themeValue === "light"
                  ? "bodyBackgroundlight"
                  : "bodyBackgroundDark"
              }` + ` ${showCartPopup === false ? "hidePopup" : "showPopup"}`
            }
          >
            <div className="modal-header">
              <button type="button" className="close" onClick={closePopupCart}>
                ×
              </button>
              <h4 className="modal-title">{t(generaltext.invoice)}</h4>
            </div>
            <div className="modal-body">
              {Object.entries(cartValues).map((product) => {
                return (
                  <div
                    className={
                      `menu_contant content_pay ${
                        i18n.language === "fa"
                          ? "persianFont direction_rtl"
                          : "englishFont direction_ltr"
                      }` +
                      ` ${
                        themeValue === "light"
                          ? " menu_contant-Backgroundlight"
                          : " menu_contant-BackgroundDark"
                      }`
                    }
                    codenumber={product[0]}
                    //   style="direction: rtl;"
                  >
                    <div className="menu_contant_image image_pay">
                      <img src={product[1][4]} alt={t(product[1][3])} />
                    </div>
                    <div className="menu_contant_info-modal">
                      <h4 text_key="PersianBreakfast">{t(product[1][3])}</h4>
                      <div className="menu_contant_info_price">
                        <div className="menu_contant_info_price_contant">
                          <h4 className="price">{product[1][2]}</h4>
                        </div>
                        <div
                          className={`button-counter ${
                            i18n.language === "fa"
                              ? "persianFont Direction-rtl"
                              : "englishFont Direction-ltr"
                          }`}
                        >
                          <button onClick={() => decreaseNumOfProduct(product)}>
                            <span>
                              <img
                                className="marginIncreaseDecreaseBtncCart"
                                src="../../../public/image/general image/minus-circle.svg"
                                alt="minus"
                              />
                            </span>
                          </button>
                          <span className="spanPurchase">
                            {product[1][0]}
                          </span>
                          <button onClick={() => increaseNumOfProduct(product)}>
                            <span>
                              <img
                                className="marginIncreaseDecreaseBtncCart"
                                src="../../../public/image/general image/plus-circle.svg"
                                alt="plus"
                              />
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div
              className={`payment-modal ${
                i18n.language === "fa" ? "persianFont " : "englishFont "
              }`}
              //   style="direction: rtl;
            >
              <span text_key="totalPrice">{t(generaltext.totalPrice)} </span>
              <span className="payment"> {totalprice} </span>
              <span text_key="MonetaryUnit">{t(generaltext.MonetaryUnit)}</span>
            </div>
            <div className="modal-footer modal-payButton">
              <button
                type="button"
                className={`btn btn-default ${
                  i18n.language === "fa" ? "persianFont " : "englishFont "
                }`}
                onClick={closePopupCart}
              >
                {t(generaltext.ClosingInvoice)}
              </button>
              <button
                type="button"
                className={`btn btn-default ${
                  i18n.language === "fa" ? "persianFont " : "englishFont "
                }`}
                onClick={openReceipt}
              >
                {t(generaltext.viewReceipt)}
              </button>
            </div>
          </div>
          <Receipt
            closeReceipt={closeReceipt}
            showReceipt={showReceipt}
            totalprice={totalprice}
          />
        </div>
      </div>
    </>
  );
}

export default CartPopup;
