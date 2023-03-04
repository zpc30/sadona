import React from 'react';
import { Slider, SliderButtons, Slides } from './styled';

export default function HeroSlider() {
  return (
    <Slider>
      <SliderButtons>&lt;</SliderButtons>
      <Slides>01</Slides>
      <Slides empty />
      <Slides>02</Slides>
      <Slides empty />
      <Slides>03</Slides>
      <Slides empty />
      <Slides>04</Slides>
      <SliderButtons>&gt;</SliderButtons>
    </Slider>
  );
}
