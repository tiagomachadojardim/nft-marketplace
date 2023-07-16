import React from "react";
import "./ArtistPageTabs.css";

function ArtistPageTabs() {
    return (
        <div className="div-artist-page-tabs">
            <div className="created">
                <h3>Created</h3>
                <span>302</span>
            </div>
            <div className="owned">
                <h3>Owned</h3>
                <span>67</span>
            </div>
            <div className="collection">
                <h3>Collection</h3>
                <span>4</span>
            </div>
        </div>
    );
}

export default ArtistPageTabs;