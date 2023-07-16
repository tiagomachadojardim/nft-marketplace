import React from "react";
import "./ConteudoFooter.css";
import { Link, useNavigate  } from "react-router-dom";




const ConteudoFooter = () => {

    const navigate = useNavigate();

  const handleLinkClick = () => {
    navigate('/');
  };

  const handleSubscribe = () => {
    const emailInput = document.querySelector('.div-footer-email-imput');
    const email = emailInput.value;

    if (email.includes('@') || email.includes(' ') ) {
      alert('E-mail enviado: ' + email);
     
    }
     else {
      alert('E-mail inválido');
    }
  };


  return (
    <div className="container-footer">
      <div className="elemento-footer" onClick={handleLinkClick}>
      <Link to="/Home" className="img-footer" > <img src={require("../assets/logo.png")} alt="LogoFooter" /></Link>
      <p>NFT marketplace UI created with Anima for Figma.</p>
      <p>Join our community</p>
      <div className="elemento-footer-icon">
      <Link to="https://discord.com" > <img src={require("../assets/DiscordLogo.png")} alt="Disc" /></Link>
      <Link to="https://www.youtube.com" > <img src={require("../assets/YoutubeLogo.png")} alt="You" /></Link>
      <Link to="https://twitter.com" > <img src={require("../assets/TwitterLogo.png")} alt="Twt" /></Link>
      <Link to="https://www.instagram.com" > <img src={require("../assets/InstagramLogo.png")} alt="Inst" /></Link>
      </div>

      </div>
      <div className="elemento-footer2" >
        <h5>Explore</h5>
        <div className="div-footer-nav">
        <Link to="/Marketplace" > <p>Marketplace</p> </Link>
        <Link to="/Rankings" > <p>Rankings</p></Link>
        <Link to="/Connect" > <p>Connect a wallet</p> </Link>
        </div>
       
      
      </div>
      <div className="elemento-footer3">

      <h5>Join Our Weekly Digest</h5>
      <p>Get exclusive promotions & updates straight to your inbox.</p>
      <div className="div-footer-email">
        <input type="email" placeholder="Enter your email here" className="div-footer-email-imput"/>
        <button onClick={handleSubscribe} className="div-footer-email-button">Subscribe</button>
      </div>

      </div>
    </div>
  );
};

export default ConteudoFooter;
