import styled from 'styled-components';
import theme from '../../theme';

export const NavContainer = styled('nav')({
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  backgroundColor: `${theme.palette.background.primary}`,
  position: 'relative',
  zIndex: '2',
  img: {
    width: '165px',
    marginInline: '8em'
  }
});

export const Menu = styled('ul')({
  listStyle: 'none',
  display: 'flex',
  color: 'white',
  position: 'relative',
  li: {
    fontFamily: 'Barlow',
    fontSize: '20px',
    color: theme.palette.colors.primaryLight,
    a: {
      padding: '2.2em 1em',
      transition: 'all 300ms ease 200ms',
      display: 'block',
      cursor: 'pointer',
      '&:hover': {
        color: 'white',
        boxShadow: `inset 0px -2px 0px 0px white`
      }
    }
  }
});

export const DropAction = styled('li')({
  '&:hover': {
    ul: {
      display: 'block',
      textAlign: 'center',
      li: {
        padding: '.6em 0em'
      }
    }
  }
});

export const DropDown = styled('ul')({
  display: 'none',
  listStyle: 'none',
  color: theme.palette.colors.primary,
  background: 'rgb(242, 242, 242,0.4)',
  position: 'absolute',
  '>:nth-child(2n)': {
    borderTop: '2px solid white',
    borderBottom: '2px solid white',
    margin: '0 auto'
  }
});
