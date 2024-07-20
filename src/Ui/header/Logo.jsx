
import "./logo.css";

function Logo() {
  return (
    <>
      <div className="logo">
        <img src="../../../public/image/general image/logo.jpg" alt="logo" />
      </div>
      <div className="info-header">
        <div className="info-header_instagram">
          <img
            src="../../../public/image/general image/socialmedia pic/instagram_01.png"
            alt="instagram"
          />
          <span>instagram</span>
        </div>
        <div className="info-header_phone">
          <img
            src="../../../public/image/general image/socialmedia pic/phone.png"
            alt="phone"
          />
          <span> 02186128863 </span>
        </div>
      </div>
    </>
  );
}

export default Logo;
