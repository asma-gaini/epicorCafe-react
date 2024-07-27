import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";
import Header from "./header/Header";

function AppLayout() {
  const { t, i18n } = useTranslation();

  return (
    <div
      className={`${i18n.language === "fa" ? "persianFont" : "englishFont"}`}
    >
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
