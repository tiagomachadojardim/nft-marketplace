import { Link } from 'react-router-dom';
import React from 'react';
import './ConteudoHome.css';

const ConteudoHome = () => {
    return (
        
        <div className='conteudo-home'>
        <h1>Discover Digital Art & Collect NFTs</h1>
        <p>NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</p>
        <Link  to="/Account" className='conteudo-home-button'> <img className="icone-menu" src={require('../assets/RocketLaunch.png')} alt='user'/> Get Started  </Link>
        <div className='conteudo-home-container'>
        <div className="column">
        <h4>240k+</h4>
        <p>Total Sale</p>
         </div>
         <div className="column">
        <h4>100k+</h4>
        <p>Auctions</p>
          </div>
         <div className="column">
        <h4>240k+</h4>
        <p>Artists</p>
      </div>

        </div>
      </div>


    );
  }



  export default ConteudoHome;