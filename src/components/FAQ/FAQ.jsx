import React from 'react';
import { useTheme } from 'styled-components';
import { Button, ButtonContainer } from '../common/Button';
import { Section, SectionContainer } from '../common/Section';
import { SubHeading, TitleHeading } from '../common/SubHeading';

export default function FAQ() {
  const theme = useTheme();
  return (
    <SectionContainer
      style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '35em',
        backgroundColor: '#F3F3F3',
        marginTop: '5em'
      }}>
      <Section
        style={{
          backgroundColor: '#F3F3F3',
          alignItems: 'flex-start',
          width: '300px',
          paddingBlock: '2em'
        }}>
        <TitleHeading
          style={{
            fontSize: theme.font.medium,
            color: theme.palette.colors.primary,
            paddingTop: '0'
          }}>
          <img src="/icons/information.svg" />
          FAQ
        </TitleHeading>
        <SubHeading
          style={{
            color: theme.palette.colors.primary,
            width: '600px',
            fontSize: theme.font.extraLarge
          }}>
          How Can We Help You?
        </SubHeading>
      </Section>
      <ButtonContainer
        style={{
          display: 'flex',
          alignSelf: 'center',
          height: '40px'
        }}>
        <Button style={{ height: '40px' }}>Recently Asked Questions</Button>
      </ButtonContainer>
    </SectionContainer>
  );
}
