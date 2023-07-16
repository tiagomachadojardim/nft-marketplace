import React from 'react';
import './CardsHow.css'; 

const CardsHow = () => {
  return (
    <div className="cardshow-componente">
        

      <div className="cardshow-cards">
      <img src={require("../assets/how/Icon.png")} alt="icon1" />
      <h5>Setup Your wallet</h5>
      <p>Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.</p>
      </div>
      <div className="cardshow-cards">
      <img src={require("../assets/how/Icon2.png")} alt="icon2" />
      <h5>Create Collection</h5>
      <p>Upload your work and setup your collection. Add a description, social links and floor price.</p>
      </div>
      <div className="cardshow-cards">
      <img src={require("../assets/how/Icon3.png")} alt="icon3" />
      <h5>Start Earning</h5>
      <p>Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.</p>
      </div>
    </div>
  );
}

export default CardsHow;