import React from "react";
import "./ArtistPageInfo.css";

function ArtistPageInfo() {
    return (
        <div className="div-artist-page-info">
            <div className="div-artist-page-info-stats">
                <h1 className="title">Animakid</h1>
                <div className="numbers">
                    <div className="volume">
                        <h2>250k+</h2>
                        <p>Volume</p>
                    </div>
                    <div className="NFTs-sold">
                        <h2>50+</h2>
                        <p>NFTs Sold</p>
                    </div>
                    <div className="followers">
                        <h2>3000+</h2>
                        <p>Followers</p>
                    </div>
                </div>
            </div>
            <div>
                <button className="btn-key"><img src={require('../assets/ArtistPage/Copy_Icon.png')} alt="copy_icon img"/>0xc0E3...B79C</button>
                <button className="btn-follow"><img src={require('../assets/ArtistPage/Plus_Icon.png')} alt='plus_icon img'/>Follow</button>
            </div>
        </div>
    );
}

export default ArtistPageInfo;