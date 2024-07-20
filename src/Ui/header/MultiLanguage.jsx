import "./multiLanguage.css";

function MultiLanguage() {
  return (
    <select
      className="form-select"
      aria-label="Default select example"
      id="language"
      //   onclick="changeDirection()"
      //   onchange="changeLanguage()"
    >
      <option className="optionSelectBox" selected="" value="Fa">
        فارسی
      </option>
      <option className="optionSelectBox" value="En">
        English
      </option>
    </select>
  );
}

export default MultiLanguage;
