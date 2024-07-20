import "./theme.css";

function Theme() {
  return (
    <div className="changeTheme">
      <label className="switch">
        <input
          className="themeInput"
          type="checkbox"
          theme="light"
        //   onclick="changeTheme()"
        />
        <span className="sliderTheme round"></span>
      </label>
    </div>
  );
}

export default Theme;
