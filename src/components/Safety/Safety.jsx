import React from 'react';
import { SubHeading, Paragraph } from '../common/SubHeading';
import { Button, ButtonContainer } from '../common/Button';
import { Section } from '../common/Section';

export default function Safety() {
  return (
    <Section textPosition={'center'} color={'primary'}>
      <SubHeading
        style={{
          width: 'fit-content'
        }}>
        We Are Reopening!
      </SubHeading>
      <Paragraph>Check out details about new safety guidelines</Paragraph>
      <ButtonContainer>
        <Button>Safety Guidilines</Button>
      </ButtonContainer>
    </Section>
  );
}
