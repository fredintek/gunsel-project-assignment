import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./AboutDropCard.css";

const AboutDropCard = ({ items }) => {
  return (
    <ul className="aboutCard">
      {items.map((item) => (
        <li>
          <FontAwesomeIcon icon={item.icon} />
          <span>{item.name}</span>
        </li>
      ))}
    </ul>
  );
};

export default AboutDropCard;
