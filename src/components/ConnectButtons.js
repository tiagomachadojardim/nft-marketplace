import React from 'react';
import './ConnectButtons.css';

const ConnectButtons = () => {
    return (
        <div className='Connectbuttons'>
            <button className='Cbutton'><img src={require("../assets/connect-buttons/Metamask.png")} alt="placeholder"/>Metamask</button>
            <button className='Cbutton'><img src={require("../assets/connect-buttons/WalletConnect.png")} alt="placeholder"/>Wallet connect</button>
            <button className='Cbutton'><img src={require("../assets/connect-buttons/Coinbase.png")} alt="placeholder"/>Coinbase</button>
        </div>
    );
  }



  export default ConnectButtons;