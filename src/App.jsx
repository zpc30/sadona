import React from 'react';
import Safety from './components/Safety';
import Hero from './components/Hero/Hero';
import Navigation from './components/Navigation';
import GlobalStyle from './globalStyle';
import OurStory from './components/OurStory';
import SalonServices from './components/SalonServices/';
import SpaServices from './components/SpaServices/';
import BridalServices from './components/BridalServices/';
import AboutSadona from './components/AboutSadona';
import SaltServices from './components/SaltServices';
import Cezanne from './components/Cezanne';
import FAQ from './components/FAQ';
import News from './components/News';
import Footer from './components/Footer';
import GiftCard from './components/GiftCard/GiftCard';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Navigation />
      <Hero />
      <Safety />
      <OurStory />
      <SalonServices />
      <SpaServices />
      <BridalServices />
      <SaltServices />
      <AboutSadona />
      <Cezanne />
      <FAQ />
      <News />
      <GiftCard />
      <Footer />
    </>
  );
}
