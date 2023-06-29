import { useNavigate } from "react-router-dom";
import "./Estimate.css";

function Estimate() {
  const navigate = useNavigate();

  const handleClick = (route) => {
    navigate(route);
  };
  return (
    <div className="estimate_main_div">
      <h1 className="estimate_title">Estimation</h1>
      <button
        className="estimate_button"
        onClick={() => handleClick("/laptopForm")}
      >
        <img
          src="../../public/desktop_icon.jpg"
          alt="icone ordinateur portable"
        />
      </button>
      <button
        className="estimate_button"
        onClick={() => handleClick("/tabletForm")}
      >
        <img src="../../public/tablet_icon.jpg" alt="icone tablette" />
      </button>
      <button className="estimate_button" onClick={() => handleClick("/form")}>
        <img src="../../public/phone_icon.jpg" alt="icone smartphone" />
      </button>
    </div>
  );
}
export default Estimate;
