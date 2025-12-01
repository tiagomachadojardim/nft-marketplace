import React, { useState, useEffect } from "react";
import "./Menu.css";
import { Link } from "react-router-dom";

function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
        setIsMenuOpen(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className={`menu ${isMobile && isMenuOpen ? "menu-open" : ""}`} role="navigation" aria-label="Menu principal">
      <div className="menu-container">
        <div className="left-section">
          <Link to="/Home" aria-label="Ir para página inicial">
            <img src={require("../assets/logo.png")} alt="NFT Marketplace Logo" />
          </Link>
        </div>
        <div
          className={`right-section ${isMobile ? "mobile" : ""} ${
            isMenuOpen ? "open" : ""
          }`}
        >
          {isMobile && (
            <button 
              className="menu-toggle" 
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isMenuOpen}
              aria-controls="menu-items"
            >
              <div className={`menu-icon ${isMenuOpen ? "open" : ""}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          )}
          <ul className={`menu-items ${isMenuOpen ? "open" : ""}`} id="menu-items">
            <li>
              <div className="scale-link-container" >
                <Link to="/Marketplace" onClick={toggleMenu}>
                Marketplace
              </Link>
              </div>
              
            </li>
            <li>
              <div className="scale-link-container">
                <Link to="/Rankings"  onClick={toggleMenu}>
                Rankings
              </Link></div>
              
            </li>
            <li>
            <div className="scale-link-container">
              <Link to="/Connect" onClick={toggleMenu}>
                Connect a wallet
              </Link></div>
              
            </li>
            {!isMobile && ( // Adiciona esta verificação para ocultar o botão em dispositivos móveis
              <li>
                <Link to="/Account" className="button-menu">
                  <img
                    className="icone-menu"
                    src={require("../assets/User.png")}
                    alt="user"
                  />
                  Sign Up
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
