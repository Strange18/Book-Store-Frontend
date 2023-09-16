// import { img } from "./logo192.png";
import logo192 from "./logo192.png";

function AdvertismentComponent() {
  return (
    <>
      <div className="advertisment">
        <div className="ad-slider">
          <div className="slider__content">
            <img src={logo192} alt="logo" />
          </div>
        </div>
      </div>
    </>
  );
}

export default AdvertismentComponent;
