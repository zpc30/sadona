import React from 'react';
import { useTheme } from 'styled-components';
import { Section, SectionContainer } from '../common/Section';
import { Paragraph, SubHeading, TitleHeading } from '../common/SubHeading';

export default function SaltServices() {
  const theme = useTheme();
  return (
    <SectionContainer
      style={{
        display: 'flex',
        justifyContent: 'center',
        margin: '0 auto',
        zIndex: '2',
        background: theme.palette.colors.secondary
      }}>
      <Section
        style={{
          position: 'relative',
          alignItems: 'flex-start',
          width: '27vw'
        }}>
        <TitleHeading style={{ fontSize: theme.font.medium, paddingTop: '0' }}>
          <img src="/icons/sugar.svg" />
          Services
        </TitleHeading>
        <SubHeading style={{ fontSize: theme.font.extraLarge }}>Salt</SubHeading>
        <Paragraph style={{ width: '90%' }}>
          Salt possesses wonderful healing and rejuvenation properties. Indulge in one of our salt
          treatments and experience strength and vitality from one of natures most ancient forms of
          therapy.
        </Paragraph>
      </Section>
      <img style={{ width: '600px', borderRadius: '0 8em 0 8em' }} src="/images/saltServices.png" />
    </SectionContainer>
  );
}
