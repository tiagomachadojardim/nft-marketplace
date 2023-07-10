import React from "react";
import './Menu.css';

function Menu() {
    return (
      <nav className="menu">
        <ul>
        <li>
          <a href="/">Marketplace</a>
        </li>
        <li>
          <a href="/about">Rankings</a>
        </li>
        <li>
          <a href="/services">Connect a wallet</a>
        </li>
       
      </ul>
      <button className="button-menu"> <img className="icone-menu" src= {require('./assets/User.png')} alt='user'/> Sign Up</button>
      </nav>

    
    );
  }

  export default Menu;