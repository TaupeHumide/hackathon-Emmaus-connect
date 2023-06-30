import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import logo from "/Logo_emmaus_connect.png";
import home_img from "/home_img.jpg";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const homeImgRef = useRef(null);
  useEffect(() => {
    const handleResize = () => {
      if (homeImgRef.current) {
        const screenElement =
          homeImgRef.current.parentElement.querySelector(".screen");
        if (screenElement) {
          const screenRect = screenElement.getBoundingClientRect();
          homeImgRef.current.style.width = `${screenRect.width}px`;
          homeImgRef.current.style.height = `${screenRect.height}px`;
        }
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const backgroundStyle = {
    backgroundImage: `url(${home_img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/estimate");
  };

  return (
    <div className="login_container">
      <div className="screen">
        <div className="screen-content">
          <form className="login" onSubmit={handleSubmit}>
            <img className="logo" src={logo} alt="logo emmaus" />
            <div className="login-field">
              <i className="login-icon fas fa-user" />
              <input
                type="text"
                className="login-input"
                value={username}
                placeholder="Nom d'utilisateur"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="login-field">
              <i className="login-icon fas fa-lock" />
              <input
                type="password"
                className="login-input"
                value={password}
                placeholder="Mot de passe"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="button login-submit"
              data-hover="Let's Go!!"
            >
              <div className="button-text">Se connecter</div>
            </button>
          </form>
        </div>
      </div>
      <div className="home_img" ref={homeImgRef} style={backgroundStyle}></div>
    </div>
  );
}
