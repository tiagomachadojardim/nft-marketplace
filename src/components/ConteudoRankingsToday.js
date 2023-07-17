import React from "react";
import "./ConteudoRankingsToday.css";


const ConteudoRankingsToday = () => {
  return (
    <div className="conteudoranktoday-conteudo">
      <div className="conteudoranktoday-conteudo-div">
        
        <p className="conteudotoday sec">Today</p>
        <p className="sec">This Week</p>
        <p className="sec">This Mounth</p>
        <p className="conteudotoday sec2">1d</p>
        <p className="sec2">7d</p>
        <p className="sec2">30d</p>
        <p>All Time</p>

      </div>
    </div>
  );
};

export default ConteudoRankingsToday;