import React from "react";
import SearchIcon from "../assets/SearchIcon.png"
import "./Marketplace.css";

function Marketplace() {
  return (
    <div className="div-marketplace">
      <div className="headline-marketplace">
        <div className="text-headline">
          <h2>Browse Marketplace</h2>
          <p>Browse through more than 50k NFTs on the NFT Marketplace.</p>
        </div>
        <div className="searchbar-headline">
          <input placeholder="Search your favourite NFTs" type="text"/>
          <img src={SearchIcon} alt="Search Icon"/>
        </div>
      </div>
      <div className="content-marketplace"></div>
    </div>
  );
}

export default Marketplace;
