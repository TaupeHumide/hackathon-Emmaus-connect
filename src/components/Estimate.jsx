import { useNavigate } from "react-router-dom";
import "./Estimate.css";

function Estimate() {
  const navigate = useNavigate();
  const handleButtonClick = (route) => {
    navigate(route);
  };

  return (
    <div className="estimate_main_div">
      <h1 className="estimate_title">Nouvelle Estimation </h1>
      <div className="estimate_div_button">
        <button
          className="estimate_button"
          onClick={() => handleButtonClick("/laptopForm")}
        >
          <img src="/desktop_icon.jpg" alt="" />
        </button>
        <button
          className="estimate_button"
          onClick={() => handleButtonClick("/tabletForm")}
        >
          <img src="/tablet_icon.jpg" alt="" />
        </button>
        <button
          className="estimate_button"
          onClick={() => handleButtonClick("/Form")}
        >
          <img src="/phone_icon.jpg" alt="" />
        </button>
      </div>
    </div>
  );
}
export default Estimate;
