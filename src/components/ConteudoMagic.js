import React from 'react';
import { Link } from 'react-router-dom';
import "./ConteudoMagic.css";
const ConteudoMagic = () => {
  return (
    <div className='div-magic-conteudo'>

<Link to="/Artist" className="button-magic-avatar"> <img src={require("../assets/trending-collection/Avatar (2).png")} alt="user" /> Shroomie </Link>
      
      <h3 className='magic-h3'>Magic Mashrooms</h3>
<Link to="/NFTpage" className="button-magic"> <img src={require("../assets/discover/Eyebutton.png")} alt="user" /> See NFT </Link>
      
    </div>
  );
}

export default ConteudoMagic;