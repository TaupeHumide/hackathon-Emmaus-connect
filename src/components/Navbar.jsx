import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "/Logo_emmaus_connect2.png";
import "./Navbar.css";

function Navbar({ setIsOpen }) {
  const links = [
    { path: "/estimate", text: "Nouvelle estimation" },
    { path: "/myEstimates", text: "Mes estimations" },
    { path: "/stock", text: "Stock" },
    { path: "/faq", text: "FAQ" },
  ];

  const location = useLocation();
  const currentUrl = location.pathname;

  const [openMenu, setOpenMenu] = useState("false");
  const openMenuMobile = () => {
    setOpenMenu((value) => !value);
  };

  const confirmLogout = () => {
    setIsOpen(true);
  };

  return (
    <div className={currentUrl === "/" ? "display_none" : ""}>
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
          <Link to="/" className="connexion">
            <button className="logOut_button" onClick={confirmLogout}>
              <img src="/logOut_icon.png" alt="logo to logout" />
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
