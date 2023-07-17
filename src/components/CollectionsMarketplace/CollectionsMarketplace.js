import React from "react";
import "./CollectionsMarketplace.css";

function CollectionsMarketplace({
  image1,
  image2,
  image3,
  title,
  avatar,
  nickname,
}) {
  return (
    <div className="collections">
      <div className="images">
        <img className="image1" src={image1} />
        <div className="other-images">
          <img className="image2" src={image2} />
          <img className="image3" src={image3} />
          <h5>1025+</h5>
        </div>
      </div>
      <div className="info-artist">
        <h5>{title}</h5>
        <div className="artist">
          <img className="avatar" src={avatar} />
          <p>{nickname}</p>
        </div>
      </div>
    </div>
  );
}

export default CollectionsMarketplace;
