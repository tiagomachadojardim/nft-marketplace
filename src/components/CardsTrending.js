import { Link } from 'react-router-dom';
import React from 'react';
import './CardsTrending.css';

const CardsTrending = () => {
    return (
        
        
       
      <div className="card1-trending">


         <div className='card1-conteudo'>  {/* card1 */}
        <Link className='card-img' to='/Nftpage'>
        <img  src={require('../assets/trending-collection/Card1-Placeholder.png')} alt="Placeholder" />
        </Link>
       
       
       
        <div className='image-row'>
            <Link className='card-img' to='/Nftpage'>
           
            <img  src={require('../assets/trending-collection/Card1-Secondary.png')} alt="Placeholder" />
          
            </Link>
            <Link className='card-img' to='/Nftpage'>
            
        <img  src={require('../assets/trending-collection/Card1-Secondary(1).png')} alt="Placeholder" />
        
            </Link>
        
            <Link className='card-img-div' to='/Nftpage'>  <h5>1025+</h5></Link>
        
       
        </div>

        <div className='card1-conteudo-inferior'>
        <h5>DSGN Animals</h5>
       

       <p><Link className='img-inferior' to='/Nftpage' ><img src={require('../assets/trending-collection/Avatar (1).png')} alt="Avatar" /></Link>MrFox</p>
        </div>
        
        
        </div>


        <div className='card1-conteudo'> {/* card2 */}

        <Link className='card-img' to='/Nftpage'><img  src={require('../assets/trending-collection/Card2-Placeholder.png')} alt="Placeholder" /></Link>

<div className='image-row'>
    <Link className='card-img' to='/Nftpage'><img  src={require('../assets/trending-collection/Card2-Secondary.png')} alt="Placeholder" /> </Link>
    
    <Link className='card-img' to='/Nftpage'><img  src={require('../assets/trending-collection/Card2-Secondary(1).png')} alt="Placeholder" /></Link>

    <Link className='card-img-div' to='/Nftpage'><h5>1025+</h5></Link>


</div>

        
<div className='card1-conteudo-inferior'>
        <h5>Magic Mushrooms</h5>
       <p><Link className='img-inferior' to='/Nftpage'><img src={require('../assets/trending-collection/Avatar (2).png')} alt="Avatar" /></Link>Shroomie</p>
        </div>
        

</div>
<div className='card1-conteudo'> {/* card3 */}

        <Link className='card-img' to='/Nftpage'><img  src={require('../assets/trending-collection/Card3-Placeholder.png')} alt="Placeholder" /></Link>
        

<div className='image-row'>
    <Link className='card-img' to='/Nftpage'><img  src={require('../assets/trending-collection/Card3-Secondary.png')} alt="Placeholder" /></Link>
    <Link className='card-img' to='/Nftpage'><img  src={require('../assets/trending-collection/Card3-Secondary(1).png')} alt="Placeholder" /></Link>
    <Link className='card-img-div' to='/Nftpage'><h5>1025+</h5></Link>
   
</div>

    

<div className='card1-conteudo-inferior'>
       <h5>Disco Machines</h5>
       
       <p><Link className='img-inferior' to='/Nftpage'><img src={require('../assets/trending-collection/Avatar (3).png')} alt="Avatar" /></Link>BeKind2Robots</p>
        </div>
        

</div>
        

       
      </div>
      
    
    );
  }



  export default CardsTrending;