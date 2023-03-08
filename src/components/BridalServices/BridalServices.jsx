import React from 'react';
import { useTheme } from 'styled-components';
import { Anchor, Button, ButtonContainer } from '../common/Button';
// import { Section } from '../common/Section';
import { TitleHeading, SubHeading, Paragraph, Headings } from '../common/SubHeading';
import { BridalContainer } from './styled';

export default function BridalServices() {
  const theme = useTheme();
  return (
    <BridalContainer>
      <Headings
        style={{
          position: 'absolute',
          right: '0px',
          paddingBlock: '5em',
          paddingInline: '1em',
          width: '400px',
          backgroundColor: 'rgb(255,255,255,0.3)'
        }}>
        <TitleHeading
          style={{
            color: theme.palette.colors.primary,
            fontSize: theme.font.medium,
            paddingTop: '0',
            display: 'flex',
            gap: '.5em'
          }}>
          <img src="/icons/bride.svg" />
          Services
        </TitleHeading>
        <SubHeading
          style={{
            fontSize: theme.font.extraLarge,
            color: theme.palette.colors.primary
          }}>
          Bridal Services
        </SubHeading>
        <Paragraph>
          We offer full bridal salon & spa services as well as a little retreat to prepare and enjoy
          that memorable “get ready time” with family and friends on your most beautiful and special
          day!
        </Paragraph>
        <ButtonContainer style={{ marginBottom: '3em' }}>
          <Button>All Services</Button>
        </ButtonContainer>
        <Anchor
          style={{
            display: 'block',
            margin: '0'
          }}>
          ↓ Check out more
        </Anchor>
      </Headings>
    </BridalContainer>
  );
}
