import React from 'react';
import { Section, SectionContainer } from '../common/Section';
import { SubHeading, Paragraph } from '../common/SubHeading';
import { Button, ButtonContainer } from '../common/Button';
import { useTheme } from 'styled-components';
import Flowers from '../Flowers';

export default function OurStory() {
  const theme = useTheme();

  return (
    <SectionContainer>
      <Section border style={{ paddingBlock: '5em', backgroundColor: 'transparent' }}>
        <Flowers />
        <SubHeading
          style={{
            paddingTop: '0',
            fontFamily: theme.fontFamily.heading,
            color: theme.palette.colors.primary,
            width: '45ch',
            textAlign: 'center'
          }}>
          Sadona was conceived with the belief that a salon and spa should be a welcome and tranquil
          experience.
        </SubHeading>
        <Paragraph>
          And from the moment you walk through our door, you will see exactly what we mean. Come,
          lets look around together.
        </Paragraph>
        <ButtonContainer>
          <Button>Our Story</Button>
        </ButtonContainer>
      </Section>
    </SectionContainer>
  );
}
