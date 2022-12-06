import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import AboutUs from './components/AboutUs/AboutUs';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import BirdsPets from './components/Articles/BirdsPets/BirdsPets';
import GreatPhotosTips from './components/Articles/GreatPhotosTips/GreatPhotosTips';
import TipsForSeniorPets from './components/Articles/TipsForSeniorPets/TipsForSeniorPets';

function App() {
  const [auth, setAuth] = useState(null);
  return (
    <div className="App">
      <Navbar auth={auth} setAuth={setAuth} />
      <Routes>
        <Route path="/reasons-birds-make-perfect-pets" element={<BirdsPets />} />
        <Route path="/how-to-take-great-pet-photos" element={<GreatPhotosTips />} />
        <Route path="/7-top-tips-for-senior-pets" element={<TipsForSeniorPets />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
