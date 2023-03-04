import React from 'react';
import { HeroAction, HeroContent, SocialHero } from './styled';
import { ButtonContainer, Button } from '../common/Button';
import HeroSlider from './HeroSlider';
import { Heading, SubHeading } from '../common/SubHeading';
import Flowers from '../Flowers';

export default function Hero() {
  return (
    <HeroContent>
      <Flowers />
      <SubHeading>A new type of salon.</SubHeading>
      <Heading>A New Type Of Experience.</Heading>
      <ButtonContainer>
        <Button>Contact</Button>
      </ButtonContainer>
      <HeroAction>
        <SocialHero>
          <img width="15px" src="./icons/facebook.svg" alt="" />
          <br />
          <img width="15px" src="./icons/instagram.svg" alt="" />
        </SocialHero>
        <HeroSlider />
      </HeroAction>
    </HeroContent>
  );
}
