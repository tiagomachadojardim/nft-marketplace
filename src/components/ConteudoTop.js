
import React from 'react';
import './ConteudoTop.css';
import { Link } from "react-router-dom";


const ConteudoTop = () => {
    return (
        
        <div className="conteudotop-conteudo" >
        <div className="conteudotop-conteudo-div">
        <h3> Top Creators</h3>
        <p>Checkout Top Rated Creators on the NFT Marketplace</p>
        </div>
       
        <Link to="/Account" className="conteudotop-conteudo-button">
                 <img src={require("../assets/RocketLaunch (blue).png")} alt="user"/>View Rankings
     </Link>
        
     

     </div>


    );
  }



  export default ConteudoTop;