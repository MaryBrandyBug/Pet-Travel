import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
// import AboutUs from './components/AboutUs/AboutUs';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
// import Main from './components/Main/Main';
import BirdsPets from './components/Articles/BirdsPets/BirdsPets';
import GreatPhotosTips from './components/Articles/GreatPhotosTips/GreatPhotosTips';
import TipsForSeniorPets from './components/Articles/TipsForSeniorPets/TipsForSeniorPets';
import MaleVsFemaleDogs from './components/Articles/MaleVsFemaleDogs/MaleVsFemaleDogs';
import DogsThatDontShed from './components/Articles/DogsThatDontShed/DogsThatDontShed';
import LoveInDogLanguage from './components/Articles/LoveInDogLanguage/LoveInDogLanguage';
import DogSittingTips from './components/Articles/DogSittingTips/DogSittingTips';
import CatSitterArticle from './components/Articles/CatSitterArticle/CatSitterArticle';
import DogSitterArticle from './components/Articles/DogSitterArticle/DogSitterArticle';
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';

function App() {
  const [auth, setAuth] = useState(null);

  return (
    <div className="App">
      <Navbar auth={auth} setAuth={setAuth} />
      <Routes>
        <Route path="/reasons-birds-make-perfect-pets" element={<BirdsPets />} />
        <Route path="/how-to-take-great-pet-photos" element={<GreatPhotosTips />} />
        <Route path="/7-top-tips-for-senior-pets" element={<TipsForSeniorPets />} />
        <Route path="/male-vs-female-dogs" element={<MaleVsFemaleDogs />} />
        <Route path="/dogs-that-dont-shed" element={<DogsThatDontShed />} />
        <Route path="/how-to-show-love-in-dog-language" element={<LoveInDogLanguage />} />
        <Route path="/top-5-dog-sitting-tips" element={<DogSittingTips />} />
        <Route path="/cat-sitters" element={<CatSitterArticle />} />
        <Route path="/dog-sitters" element={<DogSitterArticle />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
