import React from 'react';
import './Nftpage.css';
import { Link, useNavigate  } from "react-router-dom";

const Nftpage = () => {
    return (
        <>
        <img src={require("../assets/NftPage.png")} alt="placeholder" className='CImg_desktop' />
        <div className='container_nftPage'>
            <div className='nftPage_description'>
                <h1>The orbitans</h1>
                <h6>Minted on Sep 30, 2022</h6>
                <div className='nftPage_counter_mobile'>
                    <p>Auction ends in:</p>
                    <div className='nftPage_counter_counter_mobile'>
                        <p>59</p>
                        <p>:</p>
                        <p>59</p>
                        <p>:</p>
                        <p>59</p>
                    </div>
                    <div className='nftPage_counter_descrition_mobile'>
                        <p>Hours</p>
                        <p>Minutes</p>
                        <p>Seconds</p>
                    </div>
                    <button className='Nftbutton'>Place Bid</button>
                </div>
                <h6>Created By</h6>
                <Link to="/Artist" className='nftPage_description_artist'>
                    <div className="nftPage_description_artist_container">
                        <img className="icone-menu" src={require('../assets/top-creators/9.png')} alt='user' />
                        <span>Orbitian</span>
                    </div>
                </Link>
                <h6>Description</h6>
                <p>The Orbitians</p>
                <p>is a collection of 10,000 unique NFTs on the Ethereum blockchain,</p>
                <p>There are all sorts of beings in the NFT Universe. The most advanced and friendly of the bunch are Orbitians.</p>
                <p>They live in a metal space machines, high up in the sky and only have one foot on Earth. These Orbitians are a peaceful race, but they have been at war with a group of invaders for many generations. The invaders are called Upside-Downs, because of their inverted bodies that live on the ground, yet do not know any other way to be. Upside-Downs believe that they will be able to win this war if they could only get an eye into Orbitian territory, so they've taken to make human beings their target.</p>
                <h6>Details</h6>
                <Link to="https://www.animaapp.com/" className='nftPage_description_details'>
                    <div className="nftPage_description_details_container">
                        <img className="icone-menu" src={require('../assets/Globe.png')} alt='user' />
                        <span>View on Etherscan</span>
                    </div>
                </Link>
                <Link to="https://www.animaapp.com/" className='nftPage_description_details'>
                    <div className="nftPage_description_details_container">
                        <img className="icone-menu" src={require('../assets/Globe.png')} alt='user' />
                        <span>View Original</span>
                    </div>
                </Link>
                <h6>Tags</h6>
                <Link to="/Artist" className='nftPage_description_tags'>
                    <p>Animation</p>
                </Link>
                <Link to="/Artist" className='nftPage_description_tags'>
                    <p>Illustration</p>
                </Link>
                <Link to="/Artist" className='nftPage_description_tags'>
                    <p>Moon</p>
                </Link>
                <Link to="/Artist" className='nftPage_description_tags'>
                    <p>Moon</p>
                </Link>
            </div>
            <div className='nftPage_counter_div'>
                <div className='nftPage_counter'>
                    <p>Auction ends in:</p>
                    <div className='nftPage_counter_counter'>
                        <p>59</p>
                        <p>:</p>
                        <p>59</p>
                        <p>:</p>
                        <p>59</p>
                    </div>
                    <div className='nftPage_counter_descrition'>
                        <p>Hours</p>
                        <p>Minutes</p>
                        <p>Seconds</p>
                    </div>
                    <button className='Nftbutton'>Place Bid</button>
                </div>
            </div>
        </div>
        </>
    );
  }



  export default Nftpage;