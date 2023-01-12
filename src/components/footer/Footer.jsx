import { faAt, faCode, faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footerTop">
        <li>
          <FontAwesomeIcon icon={faCode} />
          <span>Plugin</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faGear} />
          <span>API</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faAt} />
          <span>Contact</span>
        </li>
      </ul>
      <p className="footerBottom">
        Use of ImgBB constitutes acceptance of our <span>Terms of Service</span>{" "}
        and <span>Privacy Policy</span>.
      </p>
    </footer>
  );
};

export default Footer;
