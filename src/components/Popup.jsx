import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Popup.css";

function Popup({ setIsOpen }) {
  const handleClose = () => {
    setIsOpen(false);
  };

  const navigate = useNavigate();
  const logOut = () => {
    toast.success("A bientôt 👋 ", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    navigate("/");
    setIsOpen(false);
  };

  return (
    <div className="popup_box">
      <div className="box">
        <h3>Souhaitez-vous vous déconnecter ? </h3>
        <div className="popup_div_btn">
          <button className="popup_btn yes" onClick={logOut}>
            Oui
          </button>
          <button className="popup_btn no" onClick={handleClose}>
            Non
          </button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
