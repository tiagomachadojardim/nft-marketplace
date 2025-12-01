import React, { useState } from "react";
import "./ConteudoFooter.css";
import { Link, useNavigate } from "react-router-dom";
import { SOCIAL_LINKS, VALIDATION, ROUTES } from "../utils/constants";

const ConteudoFooter = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleLinkClick = () => {
    navigate(ROUTES.home);
  };

  const validateEmail = (email) => {
    return VALIDATION.emailRegex.test(email);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setEmailError('Por favor, insira um e-mail');
      return;
    }

    if (!validateEmail(email)) {
      setEmailError('E-mail inválido');
      return;
    }

    // Simulação de sucesso
    alert(`E-mail inscrito com sucesso: ${email}`);
    setEmail("");
    setEmailError("");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (emailError) setEmailError("");
  };


  return (
    <div className="container-footer">
      <div className="elemento-footer" onClick={handleLinkClick}>
      <Link to={ROUTES.home} className="img-footer" > <img src={require("../assets/logo.png")} alt="LogoFooter" /></Link>
      <p>NFT marketplace UI created with Anima for Figma.</p>
      <p>Join our community</p>
      <div className="elemento-footer-icon">
      <a href={SOCIAL_LINKS.discord} target="_blank" rel="noopener noreferrer"> <img src={require("../assets/DiscordLogo.png")} alt="Discord" /></a>
      <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer"> <img src={require("../assets/YoutubeLogo.png")} alt="YouTube" /></a>
      <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer"> <img src={require("../assets/TwitterLogo.png")} alt="Twitter" /></a>
      <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer"> <img src={require("../assets/InstagramLogo.png")} alt="Instagram" /></a>
      </div>

      </div>
      <div className="elemento-footer2" >
        <h5>Explore</h5>
        <div className="div-footer-nav">
        <Link to={ROUTES.marketplace}> <p>Marketplace</p> </Link>
        <Link to={ROUTES.rankings}> <p>Rankings</p></Link>
        <Link to={ROUTES.connect}> <p>Connect a wallet</p> </Link>
        </div>
       
      
      </div>
      <div className="elemento-footer3">
        <h5>Join Our Weekly Digest</h5>
        <p>Get exclusive promotions & updates straight to your inbox.</p>
        <form className="div-footer-email" onSubmit={handleSubscribe}>
          <input 
            type="email" 
            placeholder="Enter your email here" 
            className="div-footer-email-imput"
            value={email}
            onChange={handleEmailChange}
            aria-label="Email para newsletter"
          />
          <button type="submit" className="div-footer-email-button">Subscribe</button>
        </form>
        {emailError && <p style={{color: '#ff6b6b', fontSize: '14px', marginTop: '5px'}}>{emailError}</p>}
      </div>
    </div>
  );
};

export default ConteudoFooter;
