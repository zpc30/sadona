import React from 'react';
import { useTheme } from 'styled-components';
import { ButtonContainer, Button } from '../common/Button';
import { Section } from '../common/Section';
import { SubHeading } from '../common/SubHeading';
import Flowers from '../Flowers';

export default function GiftCard() {
  const theme = useTheme();
  return (
    <Section
      style={{
        backgroundColor: '#F3F3F3',
        flexDirection: 'row',
        gap: '15em',
        paddingBlock: '3em'
      }}>
      <Flowers />
      <SubHeading style={{ color: theme.palette.colors.primary }}>
        Surprice your friends & family with our gift card!
      </SubHeading>
      <ButtonContainer>
        <Button>Purchase Gift Card Here</Button>
      </ButtonContainer>
    </Section>
  );
}
