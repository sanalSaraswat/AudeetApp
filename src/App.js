import './css/App.css';
import Appbar from './components/Appbar';
import Home from './components/Home';
import Features from './components/Features';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Faq from './components/Faq';

function App() {
  return (
    <>
      <Appbar />
      <Home />
      <Features />
      <AboutUs />
      <Faq />
      <Footer />
    </>

  );
}

export default App;
