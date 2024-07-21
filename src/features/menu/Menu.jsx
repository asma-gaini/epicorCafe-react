import { menu } from "../../utils/constants";
import { changeLanguage } from "../../utils/helper";
import "./menu.css";

function Menu() {
  function AddPurchaseNumBtn(codeNumber, CategoryID) {
    const selectMenuItem = document.querySelector(
      "button.menu_contant_info_price_btn[codeNumber='" + codeNumber + "']"
    );
    selectMenuItem.classList.remove("show");
    selectMenuItem.classList.add("hide");

    const selectMenuItemPurchase = document.querySelector(
      "div.Purchase-count[codeNumber='" + codeNumber + "']"
    );
    selectMenuItemPurchase.classList.remove("hide");
    selectMenuItemPurchase.classList.add("show");
  }

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
                        class="menu_contant_info_price_btn Direction-rtl"
                        text_key="AddToNotebook"
                        onClick={() =>
                          AddPurchaseNumBtn(
                            menuItem.codeNumber,
                            categoriItem.CategoryID
                          )
                        }
                      >
                        افزودن
                      </button>
                      <div
                        class="Purchase-count Direction-rtl hide"
                        codenumber={menuItem.codeNumber}
                      >
                        <button
                          class="btn-counter"
                          // onclick="decreaseNumOfProduct('span','1')"
                        >
                          <span>➖</span>
                        </button>
                        <span
                          class="span"
                          codenumber={menuItem.codeNumber}
                          categoryid={categoriItem.CategoryID}
                        >
                          1
                        </span>
                        <button
                          class="btn-counter"
                          // onclick="increaseNumOfProduct('span','1')"
                        >
                          <span>➕</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ))}
      {changeLanguage()}
    </div>
  );
}

export default Menu;
