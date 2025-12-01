import React, { lazy, Suspense } from 'react';
import "./App.css";
import Menu from '../components/Menu';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import ErrorBoundary from '../components/ErrorBoundary';
import Loading from '../components/Loading';

// Lazy loading das páginas
const Home = lazy(() => import('./Home'));
const Marketplace = lazy(() => import('./Marketplace'));
const Connect = lazy(() => import('./Connect'));
const Rankings = lazy(() => import('./Rankings'));
const Account = lazy(() => import('./Account'));
const Artist = lazy(() => import('./Artist'));
const Nftpage = lazy(() => import('./Nftpage'));

function App() {

 
  return (
  <ErrorBoundary>
 <Router>

  
     <Menu />
      <div>
      
      <Suspense fallback={<Loading message="Carregando página..." />}>
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
      </Suspense>
      </div>

<Footer />
   
    </Router>
    </ErrorBoundary>
   
   

  );
}

export default App;
