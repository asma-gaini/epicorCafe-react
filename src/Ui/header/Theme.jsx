import "./theme.css";
import { setTheme } from "../../store/slices/themeSlice";
import { useDispatch, useSelector } from "react-redux";

function Theme() {
  const themeValue = useSelector((store) => store.themePage.theme);

  const dispatch = useDispatch();

  function changeTheme() {
    dispatch(themeValue == "light" ? setTheme("dark") : setTheme("light"));
    // console.log(themeValue);
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
