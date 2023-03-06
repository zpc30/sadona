import React from 'react';
import { useTheme } from 'styled-components';
import { Anchor, Button, ButtonContainer } from '../common/Button';
import { Section, SectionContainer } from '../common/Section';
import { Paragraph, SubHeading, TitleHeading } from '../common/SubHeading';

export default function SpaServices() {
  const theme = useTheme();
  return (
    <SectionContainer
      style={{
        overflow: 'hidden',
        position: 'relative',
        backgroundColor: theme.palette.colors.primary
      }}>
      <Section
        style={{
          position: 'relative',
          left: '-270px',
          paddingBlock: '5em',
          paddingRight: '3em',
          zIndex: '2',
          borderRadius: '0 5em 0 0',
          alignItems: 'flex-start',
          width: '30vw',
          margin: '0 auto',

          backgroundColor: theme.palette.colors.primary
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
        <SubHeading style={{ fontSize: theme.font.extraLarge, color: 'white' }}>
          Spa Services
        </SubHeading>
        <Paragraph
          style={{
            color: theme.palette.colors.secondary,
            width: '30ch'
          }}>
          Both an escape and an oasis, the luxurious spa experiences at Sadona will leave you
          feeling soothed, energized and refreshed.
        </Paragraph>
        <ButtonContainer>
          <Button>All Services</Button>
        </ButtonContainer>
        <Anchor style={{ display: 'block', margin: '.5em', color: theme.palette.colors.secondary }}>
          ↓ Check out more
        </Anchor>
      </Section>
      <div
        style={{
          position: 'absolute',
          width: '70vw',
          height: '500px',
          zIndex: '1',
          right: '-10vw',
          bottom: '0px'
        }}>
        <img
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          src="/images/spaServices.png"
        />
      </div>
    </SectionContainer>
  );
}
