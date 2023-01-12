import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SignInOption.css";

const SignInOption = ({ icon, color, name }) => {
  return (
    <div className={`opt ${color}`}>
      <FontAwesomeIcon icon={icon} />
      <span>{name}</span>
    </div>
  );
};

export default SignInOption;
