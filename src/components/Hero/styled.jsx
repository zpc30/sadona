import styled from 'styled-components';
import theme from '../../theme';

export const HeroContent = styled('div')({
  backgroundImage: `url('/images/920.png')`,
  backgroundSize: 'cover',
  position: 'relative',
  top: '-200px',
  zIndex: '-1',
  height: '950px',
  display: 'flex',
  flexDirection: 'column',
  paddingLeft: '400px',
  justifyContent: 'center',
  alignContent: 'center'
});

export const HeroAction = styled('div')({
  display: 'flex',
  width: '800px',
  position: 'relative',
  justifyContent: 'space-between',
  alignContent: 'center',
  margin: '0px',
  paddingTop: '50px'
});

export const SocialHero = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  '&::before': {
    content: '',
    position: 'absolute',
    width: '5px',
    height: '50px',
    top: '1em',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: 'firebrick'
  }
});

export const Slider = styled('div')({
  display: 'flex'
});

export const SliderButtons = styled('p')({
  border: '1px solid white',
  borderRadius: '3em',
  padding: '.2em .5em',
  marginInline: '1em',
  color: 'white'
});

export const Slides = styled('p')(({ empty }) => ({
  borderTop: '1px solid white',
  marginTop: '1em',
  color: 'white',
  paddingInline: '1em',
  fontSize: theme.font.medium,
  ...(empty && {
    width: '2em',
    borderTop: `1px solid ${theme.palette.colors.secondary}`
  })
}));
