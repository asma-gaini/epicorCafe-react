import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import "./menu.css";
import MenuItem from "./MenuItem";

function Category({ categoriItem, tolatPrice, setTotalPrice }) {
  const { t, i18n } = useTranslation();
  const themeValue = useSelector((store) => store.themePage.theme);

  return (
    <div
      categoryid={categoriItem.CategoryID}
      className={`slider ${
        categoriItem.CategoryID === 1 ? "showMenuItem" : "hideMenuItem"
      }`}
    >
      <div className="hrLine">
        <p>{t(categoriItem.headerNameFA)}</p>
        <span
          className={`hrTheme ${
            themeValue === "light"
              ? "hrTheme-Backgroundlight"
              : "hrTheme-BackgroundDark"
          }`}
        ></span>
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
        </>
      ))}
    </div>
  );
}

export default Category;
