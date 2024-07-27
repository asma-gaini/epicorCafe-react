import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { receipt_key } from "../../utils/constants";

import "../cart/cart.css";
import "../cart/receipt.css";

function Receipt({ closeReceipt, showReceipt, totalprice }) {
  const { t, i18n } = useTranslation();
  const cartValues = useSelector((store) => store.shoppingCart.cartItems);
  const date = new Date();
  const showTime =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  let today = new Date().toLocaleDateString("fa-IR");

  return (
    <div>
      <div
        id="receipt"
        className={`${showReceipt === false ? "hidePopup" : "showPopup"}`}
      >
        <button
          type="button"
          className="close receiptCloser"
          onClick={closeReceipt}
        >
          ×
        </button>
        <div className="receipt">
          <div className="receiptHeader">
            <h2 className="brandNameReceipt">
              {t(receipt_key.InformationBrand.recieptBerandName)}
            </h2>
            <img
              className="receipLogo"
              src={receipt_key.InformationBrand.recieptLogoImg}
              alt={t(receipt_key.InformationBrand.recieptBerandName)}
            />
            <p className="addressReceipt">
              {t(receipt_key.InformationBrand.recieptAddress)}
            </p>
            <p className="telephoneReceipt">
              {t(receipt_key.InformationBrand.recieptPhone)}
            </p>
          </div>
          <div className="receiptDetails">
            <p className="numberReceipt">
              {t(receipt_key.InformationReceipt.receiptNumber)}
            </p>
            <p className="dateReceipt">
              {t(receipt_key.InformationReceipt.resiptDate)}
              {today}
            </p>
            <p className="timeReceipt">
              {t(receipt_key.InformationReceipt.receiptTime)}
              {showTime}
            </p>
          </div>
          <div className="receiptCustomerDetails">
            <p className="customerName">
              {t(receipt_key.InformationCustomer.receiptCustomerName)}
            </p>
            <p class="customerPhone">
              {t(receipt_key.InformationCustomer.receiptCustomerPhone)}
            </p>
          </div>
          <div class="receiptTable">
            <div className="overflow">
              <table>
                <tr>
                  {receipt_key.InformationTable.map((receittHeader) => (
                    <th>{t(receittHeader.hederTable)}</th>
                  ))}
                </tr>

                {Object.entries(cartValues).map((product) => {
                  return (
                    <tr>
                      <th> {t(product[1][3])}</th>
                      <th> {product[1][0]} </th>
                      <th>{product[1][1]}.000</th>
                      <th>{product[1][1] * product[1][0]}.000</th>
                    </tr>
                  );
                })}
                <tr>
                  <th></th>
                  <th></th>
                  <th>
                    {t(receipt_key.InformationPaymentTable.paymentTableTotal)}
                  </th>
                  <th peyment="totalAmountamount">{totalprice}</th>
                </tr>
                <tr>
                  <th></th>
                  <th></th>
                  <th>
                    {t(receipt_key.InformationPaymentTable.paymentTableVat)}
                  </th>
                  <th peyment="vatamount">{(totalprice * 9) / 100}</th>
                </tr>
                <tr>
                  <th></th>
                  <th></th>
                  <th>
                    {t(receipt_key.InformationPaymentTable.paymentTableAmount)}
                  </th>
                  <th peyment="NetAmountamount">
                    {totalprice + (totalprice * 9) / 100}
                  </th>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Receipt;
