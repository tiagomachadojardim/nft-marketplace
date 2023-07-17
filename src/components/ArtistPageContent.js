import React from "react";
import "./ArtistPageContent.css";
import { Link } from "react-router-dom";

function ArtistPageContent() {
  const ContentCards = [
    {id: 1, title: "Distant Galaxy", image: require('../assets/ArtistPage/ContentCards/1.png')},
    {id: 2, title: "Life On Edena", image: require('../assets/ArtistPage/ContentCards/2.png')},
    {id: 3, title: "AstroFiction", image: require('../assets/ArtistPage/ContentCards/3.png')},
    {id: 4, title: "CryptoCity", image: require('../assets/ArtistPage/ContentCards/4.png')},
    {id: 5, title: "Colorfuldog 0524", image: require('../assets/ArtistPage/ContentCards/5.png')},
    {id: 6, title: "Space Tales", image: require('../assets/ArtistPage/ContentCards/6.png')},
    {id: 7, title: "Cherry Blossom Girl 037", image: require('../assets/ArtistPage/ContentCards/7.png')},
    {id: 8, title: "Dancing Robots 0987", image: require('../assets/ArtistPage/ContentCards/8.png')},
    {id: 9, title: "Icecream Ape", image: require('../assets/ArtistPage/ContentCards/9.png')},
  ]; 
  
  return (
    <div className="div-artist-page-content">
      <div className="div-artist-page-content-header">
        {ContentCards.map((ContentCard) => (
          <Link to='/Nftpage' className="div-artist-page-content-card" key={ContentCard.id}>
            <img src={ContentCard.image} alt="content_card img"/>
            <div className="card-header">  
              <h3>{ContentCard.title}</h3>
              <div className="avatar-and-name">
                <img src={require('../assets/Avatar.png')} alt="avatar img"/>
                <h4>Animakid</h4>
              </div>
            </div>
            <div className="card-footer">
              <div className="price">
                <h6>Price</h6>
                <p>1.63 ETH</p>
              </div>
              <div className="highest-bid">
                <h6>Highest Bid</h6>
                <p>0.33 wETH</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ArtistPageContent;