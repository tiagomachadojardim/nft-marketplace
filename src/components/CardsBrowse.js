
import React from 'react';
import './CardsBrowse.css';
import { Link } from 'react-router-dom';

const CardsBrowse = () => {
    // Array de dados dos cards
    const cardsDataBrowse = [
      { id: 1, image: require('../assets/browse/1.png') , title: 'Art'},
      { id: 2, image: require('../assets/browse/2.png') , title: 'Collectibles' },
      { id: 3, image: require('../assets/browse/3.png') , title: 'Music' },
      { id: 4, image: require('../assets/browse/4.png') , title: 'Photography' },
      { id: 5, image: require('../assets/browse/5.png') , title: 'Video' },
      { id: 6, image: require('../assets/browse/6.png') , title: 'Utility' },
      { id: 7, image: require('../assets/browse/7.png') , title: 'Sport' },
      { id: 8, image: require('../assets/browse/8.png') , title: 'Virtual Worlds' },
   
    ];
  
    return (
      <div className="cards-browse-container">
        <div className="cards-container-browse">
          {cardsDataBrowse.map((cardbrowse) => (
            <Link to='/Artist' className="cards-browse" key={cardbrowse.id}>
              <div className="card-browse-item">
               
                <img className='card-browse-img' src={cardbrowse.image} alt={cardbrowse.title} />
                <h5>{cardbrowse.title}</h5>
                

              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  };
  
  export default CardsBrowse;