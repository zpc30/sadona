import React from 'react';
import { SubHeading, Paragraph } from '../common/SubHeading';
import { Button, ButtonContainer } from '../common/Button';
import { SectionContainer } from './styled';

export default function Safety() {
  return (
    <SectionContainer textPosition={'center'} color={'primary'}>
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
    </SectionContainer>
  );
}
