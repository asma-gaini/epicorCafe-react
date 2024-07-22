import "../cart/cart.css";
import { generaltext } from "../../utils/constants";
import { useTranslation } from "react-i18next";

function Cart({ tolatPrice, setTotalPrice }) {
  const { t, i18n } = useTranslation();

  return (
    <button
      type="button"
      className="btn btn-info btn-lg pay-off "
      // data-toggle="modal"
      // data-target="#myModal"
      // onclick="show_Hide()"
    >
      <span>{t(generaltext.bill)}</span>
      <span className="bill"> {tolatPrice} </span>
      <span>{t(generaltext.MonetaryUnit)}</span>
    </button>
  );
}

export default Cart;
