import Button from "../button/Button";
import "./AccountCard.css";

const AccountCard = ({ year, fprice, sprice, color, offer }) => {
  return (
    <div className={`accountCard ${color}`}>
      {offer ? <div className="ribbonBox"></div> : <></>}
      <p className="cardYear">{year}</p>
      <div className="cardPriceDesc">
        <p className="cardPriceLarge">
          <small>$</small>
          <span>{fprice}</span>
        </p>
        {sprice ? <p className="cardPriceSmall">Billed ${sprice}</p> : <></>}
      </div>
      <div className="cardBtn">
        <Button text="upgrade" type={color} size="big" />
      </div>

      <ul className="cardLists">
        <li>No Ads</li>
        <li>Direct Linking</li>
        <li>Unlimited Space</li>
        <li>Replace Image Feature</li>
        <li>64MB File Size Per Image</li>
        <li>API Access</li>
      </ul>
    </div>
  );
};

export default AccountCard;
