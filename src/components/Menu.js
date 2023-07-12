import React from "react";
import './Menu.css';
import { Link } from 'react-router-dom';


function Menu() {
  

    return (
      
      <nav className="menu">
        <div className="menu-container">
        <div className="left-section">
        <Link to="/Home" > <img  src={require('../assets/logo.png')} alt='Logo'/></Link>
        </div>
        
        <ul className="right-section">
        <li>
          <div className="scale-link-container">
          <Link to="/Marketplace">Marketplace</Link>
          </div>
           
          
        </li>
          <li>
            <div className="scale-link-container">
            <Link to="/Rankings" >Rankings</Link>
            </div>
       
        
        </li>
        <li>
          <div className="scale-link-container">
          <Link to="/Connect" >Connect a wallet</Link>
          </div>
        
        </li>
        <Link to="/Account" className="button-menu"><img className="icone-menu" src={require('../assets/User.png')} alt='user'/> Sign Up </Link>
       
      </ul>
      

      </div>
     
      </nav>

    
    );
  }

  export default Menu;