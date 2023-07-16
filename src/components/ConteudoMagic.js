import React from 'react';
import { Link } from 'react-router-dom';
const ConteudoMagic = () => {
  return (
    <div>

<Link to="/Marketplace" className="button-magic"> <img src={require("../assets/discover/Eyebutton.png")} alt="user" /> Shroomie </Link>
      
      <h3>Magic Mashrooms</h3>
<Link to="/Marketplace" className="button-magic"> <img src={require("../assets/discover/Eyebutton.png")} alt="user" /> See NFT </Link>
      
    </div>
  );
}

export default ConteudoMagic;