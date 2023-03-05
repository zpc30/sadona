import React from 'react';
import { SectionContainer } from '../Safety/styled';
import { SubHeading, Paragraph } from '../common/SubHeading';
import { Button, ButtonContainer } from '../common/Button';

export default function OurStory() {
  return (
    <SectionContainer style={{ backgroundColor: 'white' }}>
      <SubHeading style={{ paddingTop: '0', fontFamily: 'Prata', color: 'black' }}>
        Sadona was conceived with the belief that a salon and spa should be a welcome and tranquil
        experience.
      </SubHeading>
      <Paragraph>
        And from the moment you walk through our door, you will see exactly what we mean. Come, lets
        look around together.
      </Paragraph>
      <ButtonContainer>
        <Button>Our Story</Button>
      </ButtonContainer>
    </SectionContainer>
  );
}
