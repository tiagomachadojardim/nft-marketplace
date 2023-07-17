import React from "react";
import ConnectButtons from'../components/ConnectButtons';

import "./Connect.css";




function Connect (){
return(

   <div className="div-connect">
      <div className='CImg'>
         <img src={require("../assets/ConnectPlaceholder.png")} alt="placeholder" className='CImg_desktop'/>
         <img src={require("../assets/ConnectPaceholderMob.png")} alt="placeholder" className='CImg_mobile'/>
      </div>
      <div className='CContent'>
         <h1>Connect Wallet</h1>
         <p>Choose a wallet you want to connect, There are several wallet providers.</p>
         <div className='just_align'>
            <ConnectButtons />
         </div>
      </div>
   </div>

);

}

export default Connect;