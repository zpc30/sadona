import React from 'react';
import { useTheme } from 'styled-components';
import { Section, SectionContainer } from '../common/Section';
import { Paragraph, SubHeading, TitleHeading } from '../common/SubHeading';
import { Card } from './styled';
import { Anchor } from '../common/Button';

export default function News() {
  const theme = useTheme();
  return (
    <SectionContainer style={{ backgroundColor: theme.palette.colors.secondary }}>
      <SubHeading
        style={{
          color: theme.palette.colors.primary,
          textAlign: 'center',
          paddingTop: '1em',
          margin: '0 auto',
          fontSize: theme.font.extraLarge
        }}>
        News
      </SubHeading>
      <Section style={{ gap: '2em', flexDirection: 'row' }}>
        <NewsCard
          src={'/images/newsMessage.png'}
          title={'A Message from Donna Brown'}
          text={
            'Sadona Salon + Spa was inspired around Ayurvedic principles—the belief that health and wellness occur when there is true balance between the mind...'
          }
          date={'08.09.2020. 14:30h'}
        />
        <NewsCard
          src={'/images/newsCovid.png'}
          title={'Sadona Salond COVID update'}
          text={
            'Sadona Salon + Spa was inspired around Ayurvedic principles—the belief that health and wellness occur when there is true balance between the mind...'
          }
          date={'08.09.2020. 14:30h'}
        />
        <NewsCard
          src={'/images/newsLove.png'}
          title={'Love Yourself'}
          text={
            'Sadona Salon + Spa was inspired around Ayurvedic principles—the belief that health and wellness occur when there is true balance between the mind...'
          }
          date={'08.09.2020. 14:30h'}
        />
      </Section>
    </SectionContainer>
  );
}

const NewsCard = ({ title, text, src, date }) => {
  const theme = useTheme();
  return (
    <Card>
      <div style={{ height: '300px' }}>
        <img
          style={{ objectFit: 'cover', borderRadius: '5em 0 0 0', width: '100%', height: '100%' }}
          src={src}
        />
      </div>
      <TitleHeading
        style={{
          color: theme.palette.colors.primary,
          fontSize: theme.font.medium,
          padding: '.5em'
        }}>
        <img src="/icons/newspaper.svg" />
        News
      </TitleHeading>
      <SubHeading style={{ padding: '.5em', color: theme.palette.colors.primary }}>
        {title}
      </SubHeading>
      <div
        style={{
          padding: '.5em',
          width: '100%',
          display: 'flex',
          gap: '1em',
          alignItems: 'center'
        }}>
        <small>{date}</small>
        <div style={{ backgroundColor: 'black', height: '2px', width: '80%' }}></div>
      </div>
      <Paragraph style={{ padding: '.5em' }}>{text}</Paragraph>
      <Anchor style={{ display: 'block', padding: '.5em .5em 2em' }}>Read More </Anchor>
    </Card>
  );
};
