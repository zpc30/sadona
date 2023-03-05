import React from 'react';
import Hero from './components/Hero/Hero';
import Navigation from './components/Navigation';
import GlobalStyle from './globalStyle';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Navigation />
      <Hero />
    </>
  );
}
