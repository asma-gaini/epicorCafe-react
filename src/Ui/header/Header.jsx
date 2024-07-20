import AboutUs from "./AboutUs";
import "./header.css";
import Logo from "./Logo";
import MultiLanguage from "./MultiLanguage";
import Theme from "./Theme";

function Header() {
  return (
    <div>
      <MultiLanguage />
      <Theme />
      <Logo />
      <AboutUs />
    </div>
  );
}

export default Header;
