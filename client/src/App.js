import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import AboutUs from './components/AboutUs/AboutUs';

import gif from './loader.gif';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
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
import ProtectedRoute from './components/ProtectedRoute/ProtectedRouter';
import SitterProfile from './components/SitterProfile/SitterProfile';

import AppReview from './components/AppReview/AppReview';

import Profile from './components/Profile/Profile';
import ParentProfileForm from './components/ParentProfileForm/ParentProfileForm';
import Settings from './components/Settings/Settings';
import ProfileReviews from './components/ProfileReviews/ProfileReviews';
import SitterProfileForm from './components/SitterProfileForm/SitterProfileForm';
import AboutUs from './components/AboutUs/AboutUs';
import ParentProfile from './components/ParentProfile/ParentProfile';
import ProfileProtectedRouter from './components/ProfileProtectedRouter/ProfileProtectedRouter';
import UpdateSitter from './components/UpdateSitter/UpdateSitter';
import ProtectedCreation from './components/ProtectedCreation/ProtectedCreation';
import SitterSearch from './components/SitterSearch/SitterSearch';
import UpdateParent from './components/UpdateParent/UpdateParent';
import ParentSearch from './components/ParentSearch/ParentSearch';
import SitterPage from './components/SitterPage/SitterPage';
import ParentPage from './components/ParentPage/ParentPage';
import FormReviews from './components/FormReviews/FormReviews';
import ChatForTwo from './components/ChatForTwo/ChatForTwo';
import MyDialogs from './components/MyDialogs/MyDialogs';
import MyDialogsChat from './components/MyDialogsChat/MyDialogsChat';

function App() {
  const dispatch = useDispatch();

  // eslint-disable-next-line no-unused-vars

  const [ws, setWs] = useState(null);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3001/', {
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch({ type: 'USER', payload: res.auth });
        setInterval(() => {
          setLoad(false);
        }, 2000);

        setWs(new WebSocket('ws://localhost:3001'));
      })
      .catch((error) => console.log(error));
  }, []);

  const auth = useSelector((store) => store?.userStore?.auth);

  useEffect(() => {
    const abortController = new AbortController();
    if (auth) {
      fetch('http://localhost:3001/', {
        credentials: 'include',
        // signal: abortController.signal,
      })
        .then((res) => res.json())
        .then((res) => {
          dispatch({ type: 'PARENT_PROFILE', payload: res.parent });
          dispatch({ type: 'PET', payload: res.pet });
          dispatch({ type: 'SITTER_PROFILE', payload: res.sitter });
        });
    }
    return () => {
      abortController.abort();
    };
  }, [auth]);
  if (load) {
    return (
      <div className="Lodaer">
        <div className="loader_gif">
          <img src={gif} alt="gif" />
        </div>
      </div>
    );
  }
  return (
    <div className="App">
      <header className="top_bar">
        <Navbar />
      </header>
      <div className="container">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/reasons-birds-make-perfect-pets" element={<BirdsPets />} />
          <Route path="/how-to-take-great-pet-photos" element={<GreatPhotosTips />} />
          <Route path="/7-top-tips-for-senior-pets" element={<TipsForSeniorPets />} />
          <Route path="/male-vs-female-dogs" element={<MaleVsFemaleDogs />} />
          <Route path="/dogs-that-dont-shed" element={<DogsThatDontShed />} />
          <Route path="/how-to-show-love-in-dog-language" element={<LoveInDogLanguage />} />
          <Route path="/top-5-dog-sitting-tips" element={<DogSittingTips />} />
          <Route path="/cat-sitters" element={<CatSitterArticle />} />
          <Route path="/dog-sitters" element={<DogSitterArticle />} />
          <Route path="/appreview" element={<AppReview />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route element={<ProfileProtectedRouter />}>
            <Route path="/profile" element={<Profile />}>
              <Route path="sitter" element={<SitterProfile />} />
              <Route path="parent" element={<ParentProfile />} />
              <Route element={<ProtectedCreation />}>
                <Route path="create-parent-profile" element={<ParentProfileForm />} />
                <Route path="create-sitter-profile" element={<SitterProfileForm />} />
              </Route>
              <Route path="my-chats" element={<MyDialogs />} />
              <Route path="settings" element={<Settings />} />
              <Route path="reviews" element={<ProfileReviews />} />
              <Route path="sitter/update-sitter-profile" element={<UpdateSitter />} />
              <Route path="parent/update-parent-profile" element={<UpdateParent />} />
            </Route>
          </Route>

          <Route path="/all-sitters/chat/:id" element={<ChatForTwo ws={ws} />} />
          <Route path="/all-parents/chat/:id" element={<ChatForTwo ws={ws} />} />
          <Route path="chat/:id" element={<MyDialogsChat ws={ws} />} />

          {/* <Route path="/profile/create-parent-profile" element={<ParentProfileForm />} /> */}
          {/* <Route path="/profile/create-sitter-profile" element={<SitterProfileForm />} /> */}

          <Route path="/all-sitters" element={<SitterSearch />} />
          <Route path="/all-parents" element={<ParentSearch />} />

          <Route path="/all-parents/:id" element={<ParentPage />} />
          <Route path="/all-sitters/:id" element={<SitterPage />} />
          
          <Route path="/review-parent" element={<FormReviews />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
          </Route>
        </Routes>
      </div>
      <div className="Footer_bar">
        <Footer />
      </div>
    </div>
  );
}

export default App;
