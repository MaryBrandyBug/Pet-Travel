import './App.css';
import { useState } from 'react';
import AboutUs from './components/AboutUs/AboutUs';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';

function App() {
  const [auth, setAuth] = useState(null);
  return (
    <div className="App">
      <Navbar auth={auth} setAuth={setAuth} />
      hi
      <Footer />
    </div>
  );
}

export default App;
