import "./theme.css";
import { setTheme, theme } from "../../store/slices/themeSlice";
import { useDispatch } from "react-redux";

function Theme() {
  // const changeTheme = useSelector((store) => store.Theme.setTheme);
  // const theme = useSelector((store) => store.Theme.theme);

  // const dispatch = useDispatch();

  // function changeTheme() {
  //   dispatch(setTheme("dark"));
  // }

  return (
    <div className="changeTheme">
      <label className="switch">
        <input
          className="themeInput"
          type="checkbox"
          theme="light"
          // onclick={changeTheme}
        />
        <span className="sliderTheme round"></span>
      </label>
    </div>
  );
}

export default Theme;
