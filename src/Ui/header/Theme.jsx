import "./theme.css";
import { setTheme } from "../../store/slices/themeSlice";
import { useDispatch, useSelector } from "react-redux";

function Theme() {
  const themeValue = useSelector((store) => store.themePage.theme);

  const dispatch = useDispatch();

  function changeTheme() {
    dispatch(themeValue == "light" ? setTheme("dark") : setTheme("light"));

    themeValue == "light"
      ? (document.body.style.backgroundColor = "rgb(16 12 12 / 90%)")
      : (document.body.style.backgroundColor = "rgb(192, 160, 40, 0.9)");
  }

  return (
    <div className="changeTheme">
      <label className="switch">
        <input
          className="themeInput"
          type="checkbox"
          theme="light"
          onClick={changeTheme}
        />
        <span className="sliderTheme round"></span>
      </label>
    </div>
  );
}

export default Theme;
