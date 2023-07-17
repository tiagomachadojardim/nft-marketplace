
import React from 'react';
import './CardsTop.css';
import { Link } from 'react-router-dom';

const CardsTop = () => {
    // Array de dados dos cards
    const cardsData = [
      { id: 1, image: require('../assets/top-creators/1.png') , title: 'Keepitreal', description: '34.53 ETH' },
      { id: 2, image: require('../assets/top-creators/2.png') , title: 'DigiLab', description: '34.53 ETH' },
      { id: 3, image: require('../assets/top-creators/3.png') , title: 'GravityOne', description: '34.53 ETH' },
      { id: 4, image: require('../assets/top-creators/4.png') , title: 'Juanie', description: '34.53 ETH' },
      { id: 5, image: require('../assets/top-creators/5.png') , title: 'BlueWhale', description: '34.53 ETH' },
      { id: 6, image: require('../assets/top-creators/6.png') , title: 'Mr Fox', description: '34.53 ETH' },
      { id: 7, image: require('../assets/top-creators/7.png') , title: 'Shroomie', description: '34.53 ETH' },
      { id: 8, image: require('../assets/top-creators/8.png') , title: 'Robotica', description: '34.53 ETH' },
      { id: 9, image: require('../assets/top-creators/9.png') , title: 'RustyRobot', description: '34.53 ETH' },
      { id: 10, image: require('../assets/top-creators/10.png') , title: 'Animakid', description: '34.53 ETH' },
      { id: 11, image: require('../assets/top-creators/11.png') , title: 'Dotgu', description: '34.53 ETH' },
    
      { id: 12, image: require('../assets/top-creators/12.png') , title: 'Ghiblier', description: '34.53 ETH' }
    ];
  
    return (
      <div className="cards-top-container">
        <div className="cards-container-top">
          {cardsData.map((card, index) => (
            <Link to='/Artist' className="cards-top" key={card.id}>
              <div className="card-item">
                <div className="card-index">{index + 1}</div>
                <img className='card-top-img' src={card.image} alt={card.title} />
                <div className='card-top-conteudo'>
                <h5>{card.title}</h5>
                <p>
                  
                  <span className='card-item-label'>Total Sales:  </span>
                  <span className='card-item-value'> {card.description}</span>
                  
                   </p>

                </div>
                
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  };
  
  export default CardsTop;