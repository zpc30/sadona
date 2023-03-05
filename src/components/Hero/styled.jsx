import styled from 'styled-components';
import theme from '../../theme';

export const HeroContent = styled('div')({
  backgroundImage: `url('/images/hero.png')`,
  backgroundSize: 'cover',
  // position: 'relative',
  marginTop: '-200px',
  zIndex: '1',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
});

export const Headings = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignContent: 'center',
  margin: '0 auto',
  paddingRight: '15em'
});

export const HeroAction = styled('div')({
  display: 'flex',
  gap: '5em',
  position: 'relative',
  justifyContent: 'space-between',
  bottom: '10px',
  paddingBottom: '2em',
  marginTop: '13em'
});

export const SocialHero = styled('div')({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignContent: 'center',
  '>:nth-child(3)': {
    width: '13px',
    textAlign: 'center',
    margin: '0 auto .5em'
  },
  div: {
    position: 'absolute',
    width: '2px',
    height: '50px',
    bottom: '-50px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: 'white'
  }
});

export const Slider = styled('div')({
  display: 'flex',
  paddingLeft: '10em'
});

export const SliderButtons = styled('p')({
  border: '1px solid white',
  borderRadius: '3em',
  padding: '.2em .6em',
  margin: 'auto 1em',
  color: 'white',
  fontFamily: 'Prata',
  fontSize: theme.font.normal,
  '&:hover': {
    backgroundColor: 'rgb(242, 242, 242,0.3)'
  }
});

export const Slides = styled('p')(({ empty }) => ({
  borderTop: '2px solid white',
  marginTop: '1.8em',
  color: 'white',
  paddingInline: '2em',
  paddingTop: '.5em',
  fontFamily: 'Prata',
  fontSize: theme.font.normal,
  '&:hover': {
    color: theme.palette.colors.primary,
    borderTop: `2px solid ${theme.palette.colors.primary}`
  },
  ...(empty && {
    width: '3em',
    borderTop: `2px solid ${theme.palette.colors.secondary}`,
    '&:hover': {
      color: 'white',
      borderTop: `2px solid ${theme.palette.colors.secondary}`
    }
  })
}));
