import React from 'react';
import { useTheme } from 'styled-components';
import { Anchor, Button, ButtonContainer } from '../common/Button';
import { Section } from '../common/Section';
import { Headings, Paragraph, SubHeading, TitleHeading } from '../common/SubHeading';
import { SpaContainer, ImageHolder } from './styled';

export default function SpaServices() {
  const theme = useTheme();
  return (
    <SpaContainer
      style={{
        margin: '1em auto'
      }}>
      <Section
        style={{
          position: 'relative',
          left: '-300px',
          height: '500px',
          backgroundColor: theme.palette.colors.primary
        }}>
        <Headings
          style={{
            borderRadius: '0 15em 0 0',
            paddingBlock: '6em',
            width: '500px',
            backgroundColor: theme.palette.colors.primary,
            zIndex: '1'
          }}>
          <TitleHeading
            style={{
              paddingTop: '0',
              color: theme.palette.colors.secondary,
              fontSize: theme.font.medium
            }}>
            <img src="/icons/candle.svg" />
            Services
          </TitleHeading>
          <SubHeading style={{ zIndex: '2', fontSize: theme.font.extraLarge, color: 'white' }}>
            Spa Services
          </SubHeading>
          <Paragraph
            style={{
              zIndex: '2',
              color: theme.palette.colors.secondary,
              width: '30ch'
            }}>
            Both an escape and an oasis, the luxurious spa experiences at Sadona will leave you
            feeling soothed, energized and refreshed.
          </Paragraph>
          <ButtonContainer light>
            <Button light>All Services</Button>
          </ButtonContainer>
          <Anchor
            style={{ display: 'block', margin: '.5em', color: theme.palette.colors.secondary }}>
            ↓ Check out more
          </Anchor>
        </Headings>
        <ImageHolder>
          <img src="/images/spaServices.png" />
        </ImageHolder>
      </Section>
    </SpaContainer>
  );
}
