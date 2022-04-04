import './App.css';
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/Login';
import { useState } from 'react';

function App() {
  const [current, setCurrent] = useState(0);
  function determineState() {
    if (current === 0) {
      return <Home></Home>;
    } else if (current === 1) {
      return <About></About>;
    } else if (current === 2) {
      return <Profile></Profile>;
    } else if (current === 3) {
      return <Login></Login>;
    }
  }

  return (
    <div>
      <Header setCurrent={setCurrent}></Header>
      {determineState()}
      <Footer></Footer>
    </div>
  );
}

export default App;
