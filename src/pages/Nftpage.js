import React from 'react';
import './Nftpage.css';

const Nftpage = () => {
    return (
        <>
        <img src={require("../assets/ConnectPlaceholder.png")} alt="placeholder" className='CImg_desktop' />
        <div className='container_nftPage'>
            <div className='nftPage_description'>
                <h1>The orbitans</h1>
                <p><span className='nftPage_description_sub'>Minted on Sep 30, 2022</span></p>
                <p><span className='nftPage_description_sub'>Created By</span></p>
                <p><span className='nftPage_description_sub'>Description</span></p>
                <p>The Orbitians is a collection of 10,000 unique NFTs on the Ethereum blockchain,There are all sorts of beings in the NFT Universe. The most advanced and friendly of the bunch are Orbitians. They live in a metal space machines, high up in the sky and only have one foot on Earth. These Orbitians are a peaceful race, but they have been at war with a group of invaders for many generations. The invaders are called Upside-Downs, because of their inverted bodies that live on the ground, yet do not know any other way to be. Upside-Downs believe that they will be able to win this war if they could only get an eye into Orbitian territory, so they've taken to make human beings their target.</p>
            </div>
            <div>
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