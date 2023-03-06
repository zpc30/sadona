import React from 'react';
import { useTheme } from 'styled-components';
import { Section, SectionContainer } from '../common/Section';
import { Paragraph, SubHeading, TitleHeading } from '../common/SubHeading';
import { Anchor } from '../common/Button';

export default function Cezanne() {
  const theme = useTheme();
  return (
    <SectionContainer
      style={{
        display: 'flex',
        justifyContent: 'center',
        width: '1100px',
        height: '300px',
        margin: '5em auto',
        background: theme.palette.colors.secondary,
        borderRadius: '0 5em 0 5em'
      }}>
      <Section
        style={{
          alignItems: 'flex-start',
          width: '25vw',
          borderRadius: '0 10em 0 10em',
          margin: '.5em 3em'
        }}>
        <TitleHeading
          style={{
            paddingTop: '0'
          }}>
          <img
            style={{ backgroundColor: theme.palette.colors.primary }}
            src="/icons/shipping.svg"
          />
          Products
        </TitleHeading>
        <SubHeading></SubHeading>
        <Paragraph style={{ width: '500px' }}>
          Transform your frizzy, difficult, kinky, curly hair into soft, manageable, beautiful
          locks.
        </Paragraph>
        <Anchor style={{ display: 'block', margin: '.5em 0em 0 35em' }}>Check out more</Anchor>
      </Section>
      <img style={{ width: '50vw', borderRadius: '0 5em 0 5em' }} src="/images/cezanne.png" />
    </SectionContainer>
  );
}
