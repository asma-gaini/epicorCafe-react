import { useSelector } from "react-redux";
import "./aboutUs.css";

function AboutUs() {
  const themeValue = useSelector((store) => store.themePage.theme);

  return (
    <div class="introAboutUs">
      <a
        className={`aboutUsLinkt ${
          themeValue === "light"
            ? "headerBtn-Backgroundlight"
            : "headerBtn-BackgroundDark"
        }`}
        text_key="aboutUs"
      >
        درباره ما
      </a>
    </div>
  );
}

export default AboutUs;
