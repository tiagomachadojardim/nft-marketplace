
import React from 'react';
import './ConteudoDiscover.css';
import { Link } from 'react-router-dom';


const ConteudoDiscover = () => {
    return (
        
        <div className="div-discover-conteudo">
        <div className="div-discover-conteudo-text">
        <h3>Discover More NFTs</h3>
        <p>Explore new trending NFTs</p>
        </div>
        <div className='div-discover-button'>
        <Link to="/Marketplace" className="button-discover"> <img src={require("../assets/discover/Eyebutton.png")} alt="user" /> See All </Link>
        </div>
       
        
        </div> 


    );
  }



  export default ConteudoDiscover;