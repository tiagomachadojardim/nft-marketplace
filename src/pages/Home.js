import React from "react";

import "./Home.css";
import CardHome from '../components/CardHome';
import ConteudoHome from "../components/ConteudoHome";
import CardsTrending from "../components/CardsTrending";
import ConteudoTrending from "../components/ConteudoTrending";
import ConteudoTop from "../components/ConteudoTop";
import CardsTop from "../components/CardsTop";


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
      <h3> Browse Categories</h3>
   
   
   </div>

{/*
   
   

   <footer></footer>*/}
   
   </div>

   
   

);

}

export default Home;