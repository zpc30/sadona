import React from 'react';
import Safety from './components/Safety';
import Hero from './components/Hero/Hero';
import Navigation from './components/Navigation';
import GlobalStyle from './globalStyle';
import OurStory from './components/OurStory/OutStory';
import SalonServices from './components/SalonServices/';
import SpaServices from './components/SpaServices/';
import BridalServices from './components/BridalServices/';
import AboutSadona from './components/AboutSadona/AboutSadona';
import SaltServices from './components/SaltServices/SaltServices';

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
    </>
  );
}
