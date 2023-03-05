import React from 'react';
import { Headings, HeroAction, HeroContent, SocialHero } from './styled';
import { ButtonContainer, Button } from '../common/Button';
import HeroSlider from './HeroSlider';
import { Heading, TitleHeading } from '../common/SubHeading';
import Flowers from '../Flowers';

export default function Hero() {
  return (
    <HeroContent>
      <Flowers />
      <Headings>
        <TitleHeading>A new type of salon.</TitleHeading>
        <Heading>A New Type Of Experience.</Heading>
        <ButtonContainer>
          <Button>Contact</Button>
        </ButtonContainer>
        <HeroAction>
          <SocialHero>
            <img width="15px" src="./icons/facebook.svg" alt="" />
            <br />
            <img width="15px" src="./icons/instagram.svg" alt="" />
            <div></div>
          </SocialHero>
          <HeroSlider />
        </HeroAction>
      </Headings>
    </HeroContent>
  );
}
