import { useState, useRef, useEffect } from "react";
import "./Navbar.css";
import {
  faCaretDown,
  faLanguage,
  faCloudArrowUp,
  faRightToBracket,
  faBars,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "./../../assets/logo.png";
import { Button, LanDropCard, AboutDropCard } from "./../../components";
import { Link, useNavigate } from "react-router-dom";
import languages from "./../../dev-data/languages";
import aboutItems from "../../dev-data/about";

const Navbar = () => {
  const [openNavMobile, setOpenNavMobile] = useState("");
  const [openLanCard, setOpenLanCard] = useState(false);
  const [openAboutCard, setOpenAboutCard] = useState(false);
  const navigator = useNavigate();

  const openNav = () => {
    setOpenNavMobile(true);
  };

  const closeNav = () => {
    setOpenNavMobile("");
  };

  const lanDropRef = useRef();
  const aboutDropRef = useRef();

  useEffect(() => {
    const closeLanDropdown = (e) => {
      if (
        !e.target.closest(".navbarLanBtn") &&
        !lanDropRef.current.contains(e.target)
      ) {
        setOpenLanCard(false);
      }

      if (
        !e.target.closest(".navbarAboutBtn") &&
        !aboutDropRef.current.contains(e.target)
      ) {
        setOpenAboutCard(false);
      }
    };

    document.addEventListener("mousedown", closeLanDropdown);

    return () => document.removeEventListener("mousedown", closeLanDropdown);
  });

  const handleRegister = () => {
    navigator("/register");
  };

  return (
    <nav className={`navbar ${openNavMobile && "active"}`}>
      <div className="container">
        <div className="navbarContent">
          <div className="navMenu" onClick={openNav}>
            <FontAwesomeIcon icon={faBars} />
          </div>
          <div className="navbarLeft">
            <div className="navbarAbout">
              <button
                className="navbarAboutBtn"
                onClick={() => {
                  setOpenLanCard(false);
                  setOpenAboutCard(!openAboutCard);
                }}
              >
                <FontAwesomeIcon icon={faCircleQuestion} />
                <span>About</span>
                <FontAwesomeIcon className="arrowdown" icon={faCaretDown} />
              </button>
              <div
                className={`aboutDropdown ${openAboutCard ? "open" : "close"}`}
                ref={aboutDropRef}
              >
                <div className="lanCard">
                  <AboutDropCard items={aboutItems} />
                </div>
              </div>
            </div>
            <div className="navbarLan">
              <button
                className="navbarLanBtn"
                onClick={() => {
                  setOpenAboutCard(false);
                  setOpenLanCard(!openLanCard);
                }}
              >
                <FontAwesomeIcon icon={faLanguage} />
                <span>EN</span>
                <FontAwesomeIcon className="arrowdown" icon={faCaretDown} />
              </button>
              <div
                className={`lanDropdown ${openLanCard ? "open" : "close"}`}
                ref={lanDropRef}
              >
                <div className="lanCard">
                  <LanDropCard items={languages} />
                </div>
              </div>
            </div>
          </div>
          <Link to="/" className="navbarLogo">
            <img src={Logo} alt="nav-logo" />
          </Link>
          <div className="navbarRight">
            <Link to="/upload" className="navbarRightItem">
              <FontAwesomeIcon className="navbarIcon" icon={faCloudArrowUp} />
              <p>Upload</p>
            </Link>

            <Link to="/signin" className="navbarRightItem">
              <FontAwesomeIcon className="navbarIcon" icon={faRightToBracket} />
              <p>Sign in</p>
            </Link>
            <div className="navbarBtn" onClick={handleRegister}>
              <Button text="Create account" type="primary" size="small" />
            </div>
          </div>
        </div>
        <div className="navMobile">
          <div className="navMobileClose" onClick={closeNav}>
            <FontAwesomeIcon icon={faClose} />
          </div>
          <div className="navMobileContent">
            <Link to="/upload" className="navMobileItem">
              <FontAwesomeIcon icon={faCloudArrowUp} />
              <p>Upload</p>
            </Link>
            <Link to="/signin" className="navMobileItem">
              <FontAwesomeIcon icon={faRightToBracket} />
              <p>Sign In</p>
            </Link>
            <div className="navMobileBtn" onClick={handleRegister}>
              <Button text="Creat account" type="primary" size="small" />
            </div>
          </div>
          <div className="navMobiletbg" onClick={closeNav}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
