import "./LanDropCard.css";

const LanDropCard = ({ items }) => {
  return (
    <ul className="card">
      {items.map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
};

export default LanDropCard;
