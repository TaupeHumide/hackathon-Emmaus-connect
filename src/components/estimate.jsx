import { useNavigate } from "react-router-dom";
import "./Estimate.css";

function Estimate() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/form");
  };
  return (
    <div className="estimate_main_div">
      <h1 className="estimate_title" onClick={handleClick}>
        Estimation
      </h1>
      <button className="estimate_button">
        <img src="../../public/desktop_icon.jpg" alt="" />
      </button>
      <button className="estimate_button">
        <img src="../../public/tablet_icon.jpg" alt="" />
      </button>
      <button className="estimate_button">
        <img src="../../public/phone_icon.jpg" alt="" />
      </button>
    </div>
  );
}
export default Estimate;
