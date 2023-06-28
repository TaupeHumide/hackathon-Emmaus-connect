import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/Logo_emmaus_connect.png";
import "./Navbar.css";

function Navbar() {
  const links = [
    { path: "/", text: "Nouvelle estimation" },
    { path: "/home", text: "Mes estimations" },
    { path: "/espace", text: "Stock" },
    { path: "/contact", text: "FAQ" },
  ];

  const [openMenu, setOpenMenu] = useState("false");
  const openMenuMobile = () => {
    setOpenMenu((value) => !value);
  };

  return (
    <div>
      <div
        className={
          openMenu ? "overlay_menu_mobile" : "overlay_menu_mobile open"
        }
        onClick={openMenuMobile}
      >
        {/* {" "} Intentionally left empty {" "} */}
      </div>
      <nav className="navbar_nav">
        <div
          className="navbar_burger"
          onClick={openMenuMobile}
          onKeyDown={(event) => {
            if (event.key === "'Enter' || event.key === ' '") {
              openMenuMobile();
            }
          }}
          role="button"
          tabIndex={0}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        <Link to="/">
          <img className="logoEmmaus" src={logo} alt="logo emmaus connect" />
        </Link>
        <div className={openMenu ? "navbar" : "navbar open"}>
          <div className="links">
            <div
              className="navbar_burger_close"
              onClick={openMenuMobile}
              onKeyDown={(event) => {
                if (event.key === "'Enter' || event.key === ' '") {
                  openMenuMobile();
                }
              }}
              role="button"
              tabIndex={0}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            {links.map((link) => (
              <div key={link.text}>
                <Link
                  to={link.path}
                  className="navbar_link"
                  onClick={openMenuMobile}
                >
                  {link.text}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="links_connexion">
          <Link to="/connexion" className="connexion">
            <div className="navbar_login_icon">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg> */}
              <button className="logOut_button">
                <img src="/logOut_icon.png" alt="logo to logout" />
              </button>
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
