import "./Button.css";

const Button = ({ text, type, size }) => {
  return (
    <>
      <button className={` btn btn-${type} btn-${size} `}>{text}</button>
    </>
  );
};

export default Button;
