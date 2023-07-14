import React from 'react';
import "./App.css";
import Menu from '../components/Menu';
import Marketplace from './Marketplace';
import Connect from './Connect';
import Rankings from './Rankings';
import Account from './Account';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import Artist from './Artist';
import Nftpage from './Nftpage';

function App() {

 
  return (
  
 <Router>

  
     <Menu />
      <div>
      

      <Routes>
      <Route path="/" element={<Navigate to="/Home" />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Marketplace" element={<Marketplace />} />
      <Route path="/Connect" element={<Connect />} />
      <Route path="/Rankings" element={<Rankings />} />
      <Route path="/Account" element={<Account />} />
      <Route path="/Artist" element={<Artist />} />
      <Route path="/Nftpage" element={<Nftpage />} />
      </Routes>
      </div>
    
    </Router>
   

  );
}

export default App;
