import { useState } from "react";
import { useTranslation } from "react-i18next";
import { menu } from "../../utils/constants";
import { changeLanguage } from "../../utils/helper";
import "./menu.css";
import MenuItem from "./MenuItem";

function Category({ categoriItem, tolatPrice, setTotalPrice }) {
  const { t, i18n } = useTranslation();

  return (
    <div categoryid={categoriItem.CategoryID} className="slider">
      <div className="hrLine">
        <p>{t(categoriItem.headerNameFA)}</p>
        <span className="hrTheme"></span>
        <p>{t(categoriItem.headerNameEN)}</p>
      </div>
      {categoriItem.Info.map((menuItem) => (
        <>
          <MenuItem
            menuItem={menuItem}
            key={menuItem.codeNumber}
            tolatPrice={tolatPrice}
            setTotalPrice={setTotalPrice}
            categoryId={categoriItem.CategoryID}
          />

          {/* {menuItem.isPopular === true && (
            <MenuItem
              menuItem={menuItem}
              key={menuItem.codeNumber}
              tolatPrice={tolatPrice}
              setTotalPrice={setTotalPrice}
            />
          )} */}
        </>
      ))}
    </div>
  );
}

export default Category;
