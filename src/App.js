import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Ipad from './components/Ipad';
import Amount from './components/Amount';
import Macbook from './components/Macbook';
import Footer from './components/Footer';
import Iphone from './components/Iphone'
import Blast from './components/Blast';
import Watch from './components/Watch';

function App() {
  return (
    <div>
      <Header/>
      <Iphone/>
      <Blast/>
      <Watch/>
    <Hero/>

    <Ipad/>
    <Amount/>
    <Macbook/>
    <Footer/>
    </div>
  );
}

export default App;
