import React from 'react'
import Appbar from '../components/HomePageComponents/Appbar';
import Home from '../components/HomePageComponents/Home';
import Features from '../components/HomePageComponents/Features';
import AboutUs from '../components/HomePageComponents/AboutUs';
import Footer from '../components/HomePageComponents/Footer';
import Faq from '../components/HomePageComponents/Faq';

const HomePage = () => {
  return (
    <div>
      <Appbar />
      <Home />
      <Features />
      <AboutUs />
      <Faq />
      <Footer />
    </div>
  )
}

export default HomePage