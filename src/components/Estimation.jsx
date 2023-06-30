import { useNavigate } from "react-router-dom";
import "./Estimate.css";

function Estimation() {
  const navigate = useNavigate();

  const handleClick = (route) => {
    navigate(route);
  };
  return (
    <div className="estimate_main_div">
      <h1 className="estimate_title">Estimation</h1>
      <button className="estimate_button">
        <img
          src="/desktop_icon.jpg"
          alt=""
          onClick={() => handleClick("/laptopForm")}
        />
      </button>
      <button className="estimate_button">
        <img
          src="/tablet_icon.jpg"
          alt=""
          onClick={() => handleClick("/tabletForm")}
        />
      </button>
      <button className="estimate_button">
        <img
          src="/phone_icon.jpg"
          alt=""
          onClick={() => handleClick("/form")}
        />
      </button>
    </div>
  );
}
export default Estimation;
