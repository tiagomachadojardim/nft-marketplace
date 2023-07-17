import React from "react";
import "./Artist.css";
import ArtistPageCover from "../components/ArtistPageCover";
import ArtistPageInfo from "../components/ArtistPageInfo";
import ArtistPageTabs from "../components/ArtistPageTabs";
import ArtistPageContent from "../components/ArtistPageContent";

function Artist() {
  return (
  <div className="div-artist">
      {/*<h1> Artist</h1>*/}
      <ArtistPageCover />
      <ArtistPageInfo />
      <ArtistPageTabs />
      <div className="artistcontent">
        <ArtistPageContent />
      </div>
  </div>
   );
}

export default Artist;
