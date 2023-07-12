import React from "react";
import './Menu.css';
import { Link } from 'react-router-dom';


function Menu() {
  

    return (
      
      <nav className="menu">
        <div className="menu-container">
        <div className="left-section">
        <Link to="/Home"> <img src={require('../assets/logo.png')} alt='Logo'/></Link>
        </div>
        
        <ul className="right-section">
        <li>
            <Link to="/Marketplace">Marketplace</Link>
          
        </li>
          <li>
        <Link to="/Rankings">Rankings</Link>
        
        </li>
        <li>
        <Link to="/Connect">Connect a wallet</Link>
         
        </li>
        <Link to="/Account" className="button-menu"><img className="icone-menu" src={require('../assets/User.png')} alt='user'/> Sign Up </Link>
       
      </ul>
      

      </div>
     
      </nav>

    
    );
  }

  export default Menu;