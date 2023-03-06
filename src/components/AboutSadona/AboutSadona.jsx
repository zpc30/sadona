import React from 'react';
import { useTheme } from 'styled-components';
import { Section, SectionContainer } from '../common/Section';
import { Paragraph, SubHeading } from '../common/SubHeading';

export default function AboutSadona() {
  const theme = useTheme();
  return (
    <SectionContainer>
      <Section border style={{ backgroundColor: 'transparent', margin: '2em 0' }}>
        <SubHeading style={{ color: theme.palette.colors.primary }}>
          Sadona Salon + Spa was inspired around Ayurvedic principles.
        </SubHeading>
        <Paragraph>
          The belief that health and wellness occur when there is true balance between the mind,
          body and spirit.
        </Paragraph>
      </Section>
    </SectionContainer>
  );
}
