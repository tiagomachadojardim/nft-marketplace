import React from 'react';
import "./App.css";
import Menu from '../components/Menu';
import Marketplace from './Marketplace';
import Connect from './Connect';
import Rankings from './Rankings';
import Account from './Account';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
  
 <Router>
    
      <div>
      
        <Menu />
        </div>
     

      <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/Marketplace" element={<Marketplace />} />
      <Route path="/Connect" element={<Connect />} />
      <Route path="/Rankings" element={<Rankings />} />
      <Route path="/Account" element={<Account />} />
      </Routes>
    
    </Router>

   

  );
}

export default App;
