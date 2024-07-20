import "./theme.css";

function Theme() {
  return (
    <div class="changeTheme">
      <label class="switch">
        <input
          class="themeInput"
          type="checkbox"
          theme="light"
        //   onclick="changeTheme()"
        />
        <span class="sliderTheme round"></span>
      </label>
    </div>
  );
}

export default Theme;
