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
      multi language / theme / logo / about Us
    </div>
  );
}

export default Header;
