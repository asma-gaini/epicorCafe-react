import { menu } from "../../utils/constants";
import "./menu.css";

function Menu() {
  console.log(menu.length);
  return (
    <div>
      {menu.map((categoriItem) => (
        <>
          <div categoryid={categoriItem.CategoryID} className="slider">
            <div className="hrLine">
              <p text_key={categoriItem.headerNameFA}>
                {categoriItem.headerNameFA}
              </p>
              <span className="hrTheme"></span>
              <p text_key={categoriItem.headerNameEN}>
                {categoriItem.headerNameEN}
              </p>
            </div>
          </div>
          {categoriItem.Info.map((menuItem) => (
            <div class="menu_contant menu_contant-Backgroundlight">
              <div class="menu_contant_image">
                <img src={menuItem.ImageURL} alt={menuItem.Title} />
              </div>
              <div class="menu_contant_info">
                <h4 text_key={menuItem.Title}>{menuItem.Title}</h4>
                <p text_key={menuItem.Description}>{menuItem.Description}</p>
                <span class="posPopular glyphicon glyphicon-heart Direction-rtl"></span>
                <div class="menut_contant_info_price">
                  <div class="menu_contant_info_price_contant">
                    <h4
                      class="price"
                      codenumber={menuItem.codeNumber}
                      categoryid={categoriItem.CategoryID}
                    >
                      {menuItem.Price}
                    </h4>
                    <p text_key="MonetaryUnit">تومان</p>
                  </div>
                  <div class="btn-class">
                    <button
                      codenumber={menuItem.codeNumber}
                      categoryid={categoriItem.CategoryID}
                      class="menu_contant_info_price_btn Direction-ltr"
                      text_key="AddToNotebook"
                      // onclick="AddPurchaseNumBtn('1','1')"
                    >
                      افزودن
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
      ))}
    </div>
  );
}

export default Menu;
{
  /* <div
class="menu_contant menu_contant-Backgroundlight"
style="direction: rtl;"
>
<div class="menu_contant_image">
  <img
    src="./img/main page/food &amp; this category menu/breakfast/61ee584723571.jpg"
    alt="PersianBreakfast"
  />
</div>
<div class="menu_contant_info">
  <h4 text_key="PersianBreakfast">صبحانه ایرانی</h4>
  <p text_key="Cucumbers-tomatoes-vegetables-butter-cheese-honey-boiled_eggs">
    خیار، گوجه فرنگی، سبزی خوردن ، کره، پنیر، عسل ، تخم مرغ آبپز{" "}
  </p>
  <span class="posPopular glyphicon glyphicon-heart Direction-rtl"></span>
  <div class="menut_contant_info_price">
    <div class="menu_contant_info_price_contant">
      <h4 class="price" codenumber="1" categoryid="1">
        175.000
      </h4>
      <p text_key="MonetaryUnit">تومان</p>
    </div>
    <div class="btn-class">
      <button
        codenumber="1"
        categoryid="1"
        class="menu_contant_info_price_btn Direction-rtl"
        text_key="AddToNotebook"
        onclick="AddPurchaseNumBtn('1','1')"
        style="display: none;"
      >
        افزودن
      </button>
      <div class="Purchase-count Direction-rtl" codenumber="1">
        <button
          class="btn-counter"
          onclick="decreaseNumOfProduct('span','1')"
        >
          <span class="glyphicon glyphicon-minus-sign"></span>
        </button>
        <span class="span" codenumber="1" categoryid="1">
          {" "}
          1{" "}
        </span>
        <button
          class="btn-counter"
          onclick="increaseNumOfProduct('span','1')"
        >
          <span class="glyphicon glyphicon-plus-sign"></span>
        </button>
      </div>
    </div>
  </div>
</div>
</div> */
}
