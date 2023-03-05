import React from 'react';
import { useTheme } from 'styled-components';
import { Section } from '../common/Section';
import { Paragraph, SubHeading, TitleHeading } from '../common/SubHeading';
import { Anchor, Button, ButtonContainer } from '../common/Button';
import { SmallImageContainer, ImageContainer } from './styled';

export default function SalonServices() {
  const theme = useTheme();
  return (
    <Section
      style={{
        position: 'relative',
        background: 'transparent',
        alignItems: 'flex-start',
        width: '1100px',
        margin: '0 auto'
      }}>
      <ImageContainer>
        <img src={'/images/salonServices.png'} />
      </ImageContainer>
      <SmallImageContainer>
        <img src={'/images/salonServicesSmall.png'} />
      </SmallImageContainer>
      <TitleHeading
        style={{
          color: theme.palette.colors.primary,
          fontSize: theme.font.medium
        }}>
        <img src="./icons/salon.svg" />
        Services
      </TitleHeading>
      <SubHeading style={{ fontSize: theme.font.extraLarge, color: theme.palette.colors.primary }}>
        Salon Services
      </SubHeading>
      <Paragraph
        style={{
          width: '30ch'
        }}>
        Our salon is a forward-thinking studio with experts that understand your individuality and
        specialize in your unique beauty.
      </Paragraph>
      <ButtonContainer>
        <Button>All Services</Button>
      </ButtonContainer>
      <Anchor style={{ paddingTop: '3em' }}>CheckoutMore</Anchor>
    </Section>
  );
}
