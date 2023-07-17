import React from "react";

import "./Home.css";
import CardHome from '../components/CardHome';
import ConteudoHome from "../components/ConteudoHome";
import CardsTrending from "../components/CardsTrending";
import ConteudoTrending from "../components/ConteudoTrending";
import ConteudoTop from "../components/ConteudoTop";
import CardsTop from "../components/CardsTop";
import CardsBrowse from "../components/CardsBrowse";

function Home (){

   

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


   </div>

   <div className="div-imagem">
   
   

   </div>


   <div className="div-how">


   </div>

   <div className="div-join-our"></div>


   
   </div>

   
   

);

}

export default Home;