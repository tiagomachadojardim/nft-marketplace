import React from "react";

import "./Rankings.css";
import ConteudoTopRank from "../components/ConteudoTopRank";
import ConteudoRankingsToday from "../components/ConteudoRankingsToday";
import ConteudoRankings from "../components/ConteudoRankings";

function Rankings() {
  return (
    <div>
      <div >
        <ConteudoTopRank />
      </div>
      <div>
        <ConteudoRankingsToday />
      </div>
      <div>
        <ConteudoRankings />
      </div>
    </div>
  );
}

export default Rankings;
