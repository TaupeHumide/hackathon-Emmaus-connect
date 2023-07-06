import { useNavigate } from "react-router-dom";
import "./Estimate.css";

function Estimate() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/form");
  };

  return (
    <div className="estimate_main_div">
      <h1 className="estimate_title">Nouvelle Estimation </h1>
      <div className="estimate_div_button">
        <button className="estimate_button" onClick={handleButtonClick}>
          <img src="/desktop_icon.jpg" alt="" />
        </button>
        <button className="estimate_button" onClick={handleButtonClick}>
          <img src="/tablet_icon.jpg" alt="" />
        </button>
        <button className="estimate_button" onClick={handleButtonClick}>
          <img src="/phone_icon.jpg" alt="" />
        </button>
      </div>
    </div>
  );
}
export default Estimate;
