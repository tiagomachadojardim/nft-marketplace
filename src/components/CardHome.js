import { Link } from 'react-router-dom';
import React from 'react';
import './CardHome.css';

const CardHome = () => {
    return (
        
        
       
      <div className="card">
        <Link to="/Artist">
        <img className='card-img' src={require('../assets/Placeholder.png')} alt="Placeholder" />
        <div className='card-conteudo'>
        <h5>Space Walking</h5>
       
       <p><img src={require('../assets/Avatar.png')} alt="Avatar" />Animakid</p>

        </div>
        </Link>
      </div>
    
    );
  }



  export default CardHome;