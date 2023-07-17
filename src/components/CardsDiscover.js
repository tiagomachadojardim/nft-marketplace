import React from 'react';
import './CardsDiscover.css';
import { Link } from 'react-router-dom';
const CardsDiscover = () => {
  return (
    <div className="card-discover">
       
       <Link  className='card-discover-1 hidden-discover1' to='/Nftpage'>
       <img src={require("../assets/discover/card1.png")} className='img-principal-discover' alt="Imagem 1" />
        <div className='discover-conteudo'>
       
        <h4>Distant Galaxy</h4>
        <p><img src={require('../assets/discover/1.png')} alt="icon" />MoonDancer</p>
       
        <div className='discover-conteudo-value'>
          <div>
            <p className='discover-label'>Price</p>
            <p>1.63 ETH</p>
          </div>
          <div>
            <p className='discover-label'>Highest Bid</p>
            <p>0.33 wETH</p>
          </div>
        </div>
       

      </div>
      </Link>
      
      <Link className="card-discover-1 hidden-discover2"  to='/Nftpage'>
        
        
        <img src={require("../assets/discover/card2.png")}  className='img-principal-discover'  alt="Imagem 2" />
        <div className='discover-conteudo'>
       
       <h4>Life On Edena</h4>
       <p><img src={require('../assets/discover/2.png')} alt="icon" />NebulaKid</p>
      
       <div className='discover-conteudo-value'>
         <div>
           <p className='discover-label'>Price</p>
           <p>1.63 ETH</p>
         </div>
         <div>
           <p className='discover-label'>Highest Bid</p>
           <p>0.33 wETH</p>
         </div>
       </div>
      

     </div>



     
      </Link>
      <Link className="card-discover-1 hidden-discover3"  to='/Nftpage'>
    
        <img src={require("../assets/discover/card3.png")}  className='img-principal-discover'  alt="Imagem 3" />
        <div className='discover-conteudo'>
       
        <h4>AstroFiction</h4>
        <p><img src={require('../assets/discover/3.png')} alt="icon" />Spaceone</p>
       
        <div className='discover-conteudo-value'>
          <div>
            <p className='discover-label'>Price</p>
            <p>1.63 ETH</p>
          </div>
          <div>
            <p className='discover-label'>Highest Bid</p>
            <p>0.33 wETH</p>
          </div>
        </div>
       

      </div>
        
    
      </Link>      
    </div>
  );
}

export default CardsDiscover;
