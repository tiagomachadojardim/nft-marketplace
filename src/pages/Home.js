import React from "react";

import "./Home.css";
import CardHome from '../components/CardHome';
import ConteudoHome from "../components/ConteudoHome";
import CardsTrending from "../components/CardsTrending";
import ConteudoTrending from "../components/ConteudoTrending";
import ConteudoTop from "../components/ConteudoTop";
import CardsTop from "../components/CardsTop";
import CardsBrowse from "../components/CardsBrowse";
import ConteudoDiscover from "../components/ConteudoDiscover";
import CardsDiscover from "../components/CardsDiscover";
import ConteudoHow from "../components/ConteudoHow";
import ConteudoJoin from "../components/ConteudoJoin";
import CardsHow from "../components/CardsHow";
import RelogioMagic from "../components/RelogioMagic";
import ConteudoMagic from "../components/ConteudoMagic";

function Home (){

   const targetTime = new Date('2023-07-17T23:59:59');

return(

   


   <div className="div-total">

   <div className="div-home">
      
   <ConteudoHome />
   
   <CardHome />
   </div>
   

   <div className="div-trending">
  
   <ConteudoTrending />
   <CardsTrending />

   </div>


   <div className="div-top-creators">

      <ConteudoTop />
     
      <CardsTop/>
   
   </div>

   <div className="div-browse">
      <h4> Browse Categories</h4>
      <CardsBrowse />
         
   </div>


   <div className="div-discover">
   <ConteudoDiscover/>
   <CardsDiscover />

   </div>

   <div className="div-imagem">

  
   <ConteudoMagic />
   <RelogioMagic targetTime={targetTime} />

  
   

   </div>


   <div className="div-how">
      <ConteudoHow />
      <CardsHow />

   </div>

   <div className="div-join-our">
   <img src={require("../assets/Photo.png")} alt="user"/>
   <div>
   <ConteudoJoin />
   

   </div>
   

   </div>


   
   </div>

   
   

);

}

export default Home;