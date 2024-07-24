import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { setCartItems } from "../../store/slices/shoppingCartSlice";

import "../cart/cart.css";

function CartPopup({
  showCartPopup,
  setShowCartPopup,
  closePopupCart,
  totalprice,
}) {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  const cartValues = useSelector((store) => store.shoppingCart.cartItems);

  function increaseNumOfProduct(product) {
    console.log(product[1][2]);
    dispatch(
      setCartItems({
        // categoryId: categoryId === 0 ? menuItem.categoryId : categoryId,
        value: 1,
        price: product[1][2],
        nameFood: product[1][4],
        imageFood: product[1][3],
      })
    );
  }

  function decreaseNumOfProduct() {
    dispatch(
      setCartItems({
        // categoryId: categoryId,
        codeNumber: product[0],
        value: -1,
        price: product[1][2],
        nameFood: product[1][4],
        imageFood: product[1][3],
      })
    );
  }
  //   const cart = useMemo(() => {
  //     // console.log("entries : " + Object.entries(cartValues));
  //   }, [cartValues]);
  //   //   console.log(Object.entries(cartValues).length);

  return (
    <div
      className={`modal fade in ${
        showCartPopup === false ? "hidePopup" : "showPopup"
      }`}
      id="myModal"
      role="dialog"
    >
      <div className="modal-dialog">
        <div
          className="modal-content menu_contant-Backgroundlight showPopup"
          //   style="display: block;"
        >
          <div className="modal-header">
            <button type="button" className="close" onClick={closePopupCart}>
              ×
            </button>
            <h4 text_key="invoice" className="modal-title">
              سبد خرید
            </h4>
          </div>
          <div className="modal-body">
            {Object.entries(cartValues).map((product) => {
              //   console.log("product:  " + product[1][3]);
              return (
                <div
                  className="menu_contant content_pay menu_contant-Backgroundlight"
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
                      <div className="button-counter Direction-rtl">
                        <button
                        // onclick="decreaseNumOfProduct('span','1')"
                        >
                          <span>➖</span>
                        </button>
                        <span className="spanPurchase"> 1 </span>
                        <button onClick={() => increaseNumOfProduct(product)}>
                          <span>➕</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div
            className="payment-modal"
            //   style="direction: rtl;
          >
            <span text_key="totalPrice">جمع کل : </span>
            <span className="payment"> {totalprice} </span>
            <span text_key="MonetaryUnit">تومان</span>
          </div>
          <div className="modal-footer modal-payButton">
            <button
              type="button"
              className="btn btn-default"
              text_key="ClosingInvoice"
              onClick={closePopupCart}
            >
              بستن
            </button>
            <button
              type="button"
              className="btn btn-default"
              text_key="viewReceipt"
              //   onclick="displayReceipt()"
            >
              مشاهده رسید
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPopup;
