import React from "react";
import "./ConteudoRankings.css";
import { Link } from "react-router-dom";

const CardsRanks = () => {
  // Array de dados dos cards
  const cardsData = [
    {
      id: 1,
      image: require("../assets/top-creators/1.png"),
      title: "Keepitreal",
      description: "12.4 ETH",
      change: "+ 1.41%",
      sold: "602",
    },
    {
      id: 2,
      image: require("../assets/top-creators/2.png"),
      title: "DigiLab",
      description: "12.4 ETH",
      change: "+ 1.41%",
      sold: "602",
    },
    {
      id: 3,
      image: require("../assets/top-creators/3.png"),
      title: "GravityOne",
      description: "12.4 ETH",
      change: "+ 1.41%",
      sold: "602",
    },
    {
      id: 4,
      image: require("../assets/top-creators/4.png"),
      title: "Juanie",
      description: "12.4 ETH",
      change: "+ 1.41%",
      sold: "602",
    },
    {
      id: 5,
      image: require("../assets/top-creators/5.png"),
      title: "BlueWhale",
      description: "12.4 ETH",
      change: "+ 1.41%",
      sold: "602",
    },
    {
      id: 6,
      image: require("../assets/top-creators/6.png"),
      title: "Mr Fox",
      description: "12.4 ETH",
      change: "+ 1.41%",
      sold: "602",
    },
    {
      id: 7,
      image: require("../assets/top-creators/7.png"),
      title: "Shroomie",
      description: "12.4 ETH",
      change: "+ 1.41%",
      sold: "602",
    },
    {
      id: 8,
      image: require("../assets/top-creators/8.png"),
      title: "Robotica",
      description: "12.4 ETH",
      change: "+ 1.41%",
      sold: "602",
    },
    {
      id: 9,
      image: require("../assets/top-creators/9.png"),
      title: "RustyRobot",
      description: "12.4 ETH",
      change: "+ 1.41%",
      sold: "602",
    },
    {
      id: 10,
      image: require("../assets/top-creators/10.png"),
      title: "Animakid",
      description: "12.4 ETH",
      change: "+ 1.41%",
      sold: "602",
    },
    {
      id: 11,
      image: require("../assets/top-creators/11.png"),
      title: "Dotgu",
      description: "12.4 ETH",
      change: "+ 1.41%",
      sold: "602",
    },
    {
      id: 12,
      image: require("../assets/top-creators/12.png"),
      title: "Ghiblier",
      description: "12.4 ETH",
      change: "+ 1.41%",
      sold: "602",
    },
  ];

  return (
    <div className="cards-container-top-ranking">
      <div className="rankings-header">
        <span className="rank-header-artisttab">
          <p>#</p>
          <p>Artist</p>
        </span>
        <span>Change</span>
        <span>NTFs Sold</span>
        <span>Volume</span>
      </div>
      {cardsData.map((card, index) => (
        <Link to="/Artist" className="cards-top-ranking" key={card.id}>
          <div className="card-item-ranking">
            <div className="card-index-ranking">{index + 1}</div>
            <div className="rank-avatar-name">
              <img
                className="card-top-img-ranking"
                src={card.image}
                alt={card.title}
              />
              <h5>{card.title}</h5>
            </div>
            <div className="rank-values">
              <span className="card-item-value-ranking"> {card.change}</span>
              <span className="card-item-value-ranking"> {card.sold}</span>
              <span className="card-item-value-ranking">
                {" "}
                {card.description}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CardsRanks;
