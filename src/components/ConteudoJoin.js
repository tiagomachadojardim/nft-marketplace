import React from "react";
import "./ConteudoJoin.css";



const ConteudoJoin = () => {



  const handleSubscribe = () => {
    const emailInput = document.querySelector('.div-join-email-imput');
    const email = emailInput.value;

    if (email.includes('@') || email.includes(' ') ) {
      alert('E-mail enviado: ' + email);
      
    }
     else {
      alert('E-mail inválido');
    }
  };


  return (
    <div className="container-join">
     
      

      <h3 className="join-h3">Join Our Weekly Digest</h3>
      <p className="join-p">Get exclusive promotions & updates straight to your inbox.</p>
      <div className="div-join-email">
        <input type="email" placeholder="Enter your email here" className="div-join-email-imput"/>
        <button onClick={handleSubscribe} className="div-join-email-button">  Subscribe</button>
      </div>

      
    </div>
  );
};

export default ConteudoJoin;
