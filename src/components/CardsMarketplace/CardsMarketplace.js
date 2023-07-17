import React from "react";
import "./CardsMarketplace.css";
import { Link } from "react-router-dom";

function CardsMarketplace({image, title, avatar, nickname, alt1, alt2 }) {
  return (
    <Link to="/Nftpage" className="cards">
      <img className="image" src={image} alt={alt1} />
      <div className="info">
        <h5>{title}</h5>
        <div className="avatar-info">
          <img className="avatar" src={avatar} alt={alt2} />
          <p>{nickname}</p>
        </div>
        <div className="price-info">
          <div className="price">
            <h6>Price</h6>
            <p>1.63 ETH</p>
          </div>
          <div className="price">
            <h6>Highest Bid</h6>
            <p>0.33 wETH</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CardsMarketplace;
