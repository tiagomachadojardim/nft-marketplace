import React from "react";
import "./ArtistPageCover.css";

function ArtistPageCover() {
  return (
    <div className="div-artist-page-cover">
      <img className="img-artist-page-cover-avatar" src={require('../assets/ArtistPage/ArtistPageCoverAvatar.png')} alt="ArtistPageCoverAvatar" />
    </div>
  );
}

export default ArtistPageCover;
