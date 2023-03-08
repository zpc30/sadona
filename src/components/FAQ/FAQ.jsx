import React from 'react';
import { useTheme } from 'styled-components';
import { Button, ButtonContainer } from '../common/Button';
import { Section } from '../common/Section';
import { SubHeading, TitleHeading } from '../common/SubHeading';
import { FAQContainer } from './styled';

export default function FAQ() {
  const theme = useTheme();
  return (
    <FAQContainer>
      <Section
        style={{
          paddingBlock: '2em',
          backgroundColor: '#F3F3F3',
          alignItems: 'flex-start',
          margin: '0'
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
    </FAQContainer>
  );
}
