import React, { useState } from "react";
import SearchIcon from "../assets/SearchIcon.png";
import "./Marketplace.css";
import { cardsData } from "../utils/index.js";
import CardsMarketplace from "../components/CardsMarketplace/CardsMarketplace";
import { collectionsData } from "../utils/index.js";
import CollectionsMarketplace from "../components/CollectionsMarketplace/CollectionsMarketplace";

function Marketplace() {
  const [isEnable, setIsEnable] = useState(true);

  return (
    <div className="div-marketplace">
      <div className="headline-marketplace">
        <div className="text-headline">
          <h2>Browse Marketplace</h2>
          <p>Browse through more than 50k NFTs on the NFT Marketplace.</p>
        </div>
        <div className="searchbar-headline">
          <input placeholder="Search your favourite NFTs" type="text" />
          <img src={SearchIcon} alt="Search Icon" />
        </div>
      </div>
      <div className="content-marketplace">
        <div className="navigationbar-content">
          <div
            onClick={() => setIsEnable(true)}
            className={`nav-bar ${isEnable ? "enabled" : "disabled"}`}
          >
            <span>NFTs</span>
            <span className="counter-itens">302</span>
          </div>
          <div
            onClick={() => setIsEnable(false)}
            className={`nav-bar ${!isEnable ? "enabled" : "disabled"}`}
          >
            <span>Collections</span>
            <span className="counter-itens">67</span>
          </div>
        </div>
        <div className="cards-content">
          {isEnable ? (
            <>
              {cardsData.map((item, index) => (
                <CardsMarketplace
                  image={item.image}
                  title={item.title}
                  avatar={item.avatar}
                  nickname={item.nickname}
                  alt1={item.alt1}
                  alt2={item.alt2}
                  key={index}
                />
              ))}
            </>
          ) : (
            <>
              {collectionsData.map((item, index) => (
                <CollectionsMarketplace
                  image1={item.image1}
                  image2={item.image2}
                  image3={item.image3}
                  title={item.title}
                  avatar={item.avatar}
                  nickname={item.nickname}
                  key={index}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Marketplace;
