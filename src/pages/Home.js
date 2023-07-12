import React from "react";

import "./Home.css";
import CardHome from '../components/CardHome';
import ConteudoHome from "../components/ConteudoHome";




function Home (){

   

return(


   

   <div >

   <div className="div-home">
      
   <ConteudoHome />
   
   <CardHome />
   </div>
   
   <div className="div-trending"><h1> Trending Collection</h1></div>


{/*
   <div className="div-top"><h1> Top Creators</h1></div>
   <div className="div-browse"><h1> Browse Categories</h1></div>

   <footer></footer>*/}
   
   </div>

   
   

);

}

export default Home;