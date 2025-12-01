import React from "react";
import PropTypes from "prop-types";
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
        <img className="image1" src={image1} alt={title || "Collection image"} />
        <div className="other-images">
          <img className="image2" src={image2} alt={`${title} preview 1`} />
          <img className="image3" src={image3} alt={`${title} preview 2`} />
          <h5>1025+</h5>
        </div>
      </div>
      <div className="info-artist">
        <h5>{title}</h5>
        <div className="artist">
          <img className="avatar" src={avatar} alt={`${nickname} avatar`} />
          <p>{nickname}</p>
        </div>
      </div>
    </div>
  );
}

CollectionsMarketplace.propTypes = {
  image1: PropTypes.string.isRequired,
  image2: PropTypes.string.isRequired,
  image3: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired
};

export default CollectionsMarketplace;
