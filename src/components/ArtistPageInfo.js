import React from "react";
import "./ArtistPageInfo.css";

function ArtistPageInfo() {
    return (
        <div className="div-artist-page-info">
            <div className="div-artist-page-info-stats">
                <img className="img-artist-page-cover-avatar" src={require('../assets/ArtistPage/ArtistPageCoverAvatar.png')} alt="ArtistPageCoverAvatar" />
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
                <div className='bio'>
                    <h3>Bio</h3>
                    <p>The Internet's Friendliest Designer Kid.</p>
                </div>
                <div className="links">
                    <h3>Links</h3>
                    <div className="links-icons">
                        <a href="https://www.animaapp.com" target="_blank" rel="noopener noreferrer"><img src={require('../assets/ArtistPage/Globe_Icon.png')} alt="globe_icon img"/></a>
                        <a href="https://www.animaapp.com" target="_blank" rel="noopener noreferrer"><img src={require('../assets/ArtistPage/DiscordLogo.png')} alt="discord_icon img"/></a>
                        <a href="https://www.animaapp.com" target="_blank" rel="noopener noreferrer"><img src={require('../assets/ArtistPage/YoutubeLogo.png')} alt="youtube_icon img"/></a>
                        <a href="https://www.animaapp.com" target="_blank" rel="noopener noreferrer"><img src={require('../assets/ArtistPage/TwitterLogo.png')} alt="twitter_icon img"/></a>
                        <a href="https://www.animaapp.com" target="_blank" rel="noopener noreferrer"><img src={require('../assets/ArtistPage/InstagramLogo.png')} alt="instagram_icon img"/></a>
                    </div>
                </div>
            </div>
            <div className="buttons">
                <button className="btn-key"><img src={require('../assets/ArtistPage/Copy_Icon.png')} alt="copy_icon img"/>0xc0E3...B79C</button>
                <button className="btn-follow"><img src={require('../assets/ArtistPage/Plus_Icon.png')} alt='plus_icon img'/>Follow</button>
            </div>
        </div>
    );
}

export default ArtistPageInfo;