import React from "react";
import "./ConteudoRankings.css";
import { Link } from "react-router-dom";

const CardsRanks = () => {
  // Array de dados dos cards
  const cardsData = [
    {
      id: 1,
      image: require("../assets/top-creators/1.png"),
      title: "Jaydon Ekstrom Bothman",
      description: "12.4 ETH",
      change: "+ 1.41%",
      sold: "602",
    },
    {
      id: 2,
      image: require("../assets/top-creators/2.png"),
      title: "Ruben Carder",
      description: "12.4 ETH",
      change: "+ 1.41%",
      sold: "602",
    },
    {
      id: 3,
      image: require("../assets/top-creators/3.png"),
      title: "Alfredo Septimus",
      description: "12.4 ETH",
      change: "+ 1.41%",
      sold: "602",
    },
    {
      id: 4,
      image: require("../assets/top-creators/4.png"),
      title: "Davis Franci",
      description: "12.4 ETH",
      change: "+ 1.41%",
      sold: "602",
    },
    {
      id: 5,
      image: require("../assets/top-creators/5.png"),
      title: "Livia Rosser",
      description: "12.4 ETH",
      change: "+ 1.41%",
      sold: "602",
    },
    {
      id: 6,
      image: require("../assets/top-creators/6.png"),
      title: "Kianna Donin",
      description: "12.4 ETH",
      change: "+ 1.41%",
      sold: "602",
    },
    {
      id: 7,
      image: require("../assets/top-creators/7.png"),
      title: "Phillip Lipshutz",
      description: "12.4 ETH",
      change: "+ 1.41%",
      sold: "602",
    },
    {
      id: 8,
      image: require("../assets/top-creators/8.png"),
      title: "Maria Rosser",
      description: "12.4 ETH",
      change: "+ 1.41%",
      sold: "602",
    },
    {
      id: 9,
      image: require("../assets/top-creators/9.png"),
      title: "Kianna Stanton",
      description: "12.4 ETH",
      change: "+ 1.41%",
      sold: "602",
    },
    {
      id: 10,
      image: require("../assets/top-creators/10-2.png"),
      title: "Angel Lubin",
      description: "12.4 ETH",
      change: "+ 1.41%",
      sold: "602",
    },
    {
      id: 11,
      image: require("../assets/top-creators/11-2.png"),
      title: "Allison Torff",
      description: "12.4 ETH",
      change: "+ 1.41%",
      sold: "602",
    },
    {
      id: 12,
      image: require("../assets/top-creators/12-2.png"),
      title: "Davis Workman",
      description: "12.4 ETH",
      change: "+ 1.41%",
      sold: "602",
    },
    {
      id: 13,
      image: require("../assets/top-creators/13-2.png"),
      title: "Lindsey Lipshutz",
      description: "12.4 ETH",
      change: "+ 1.41%",
      sold: "602",
    },
    {
      id: 14,
      image: require("../assets/top-creators/14-2.png"),
      title: "Randy Carder",
      description: "12.4 ETH",
      change: "+ 1.41%",
      sold: "602",
    },
    {
      id: 15,
      image: require("../assets/top-creators/15-2.png"),
      title: "Lydia Culhane",
      description: "12.4 ETH",
      change: "+ 1.41%",
      sold: "602",
    },
    {
      id: 16,
      image: require("../assets/top-creators/16-2.png"),
      title: "Rayna Bator",
      description: "12.4 ETH",
      change: "+ 1.41%",
      sold: "602",
    },
    {
      id: 17,
      image: require("../assets/top-creators/17-2.png"),
      title: "Jocelyn Westervelt",
      description: "12.4 ETH",
      change: "+ 1.41%",
      sold: "602",
    },
    {
      id: 18,
      image: require("../assets/top-creators/18-2.png"),
      title: "Marilyn Torff",
      description: "12.4 ETH",
      change: "+ 1.41%",
      sold: "602",
    },
    {
      id: 19,
      image: require("../assets/top-creators/19-2.png"),
      title: "Skylar Levin",
      description: "12.4 ETH",
      change: "+ 1.41%",
      sold: "602",
    },
    {
      id: 20,
      image: require("../assets/top-creators/20-2.png"),
      title: "Terry Dorwart",
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
        <p className="change">Change</p>
        <p className="nft">NTFs Sold</p>
        <span>Volume</span>
      </div>
      {cardsData.map((card, index) => (
        <Link to="/Artist" className="cards-top-ranking" key={card.id}>
          <div className="card-item-ranking">
            <div className="rank-avatar-name">
            <div className="card-index-ranking">{index + 1}</div>
              <img
                className="card-top-img-ranking"
                src={card.image}
                alt={card.title}
              />
              <h5>{card.title}</h5>
            </div>
            
              <p className="card-item-value-ranking-c"> {card.change}</p>
              <p className="card-item-value-ranking-s"> {card.sold}</p>
              <span className="card-item-value-ranking">
                {" "}
                {card.description}
              </span>
            
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CardsRanks;
