import React from 'react';
import { useTheme } from 'styled-components';
import { ButtonContainer, Button } from '../common/Button';
import { Section, SectionContainer } from '../common/Section';
import { SubHeading } from '../common/SubHeading';

export default function GiftCard() {
  const theme = useTheme();
  return (
    <SectionContainer style={{ backgroundColor: '#F3F3F3' }}>
      <Section
        gift
        style={{
          backgroundColor: '#F3F3F3',
          flexDirection: 'row',
          justifyContent: 'center',
          gap: '6em',
          paddingBlock: '3em'
        }}>
        <SubHeading style={{ color: theme.palette.colors.primary }}>
          Surprice your friends & family with our gift card!
        </SubHeading>
        <ButtonContainer>
          <Button>Purchase Gift Card Here</Button>
        </ButtonContainer>
      </Section>
    </SectionContainer>
  );
}
