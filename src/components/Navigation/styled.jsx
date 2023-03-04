import styled from 'styled-components';
import theme from '../../theme';

export const NavContainer = styled('nav')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: `${theme.palette.background.primary}`,
  position: 'relative',
  zIndex: '2',
  img: {
    width: '165px',
    marginInline: '10em'
  }
});

export const Menu = styled('ul')({
  listStyle: 'none',
  display: 'flex',
  color: 'white',
  li: {
    fontFamily: 'Barlow',
    fontSize: '20px',
    color: theme.palette.colors.primaryLight,
    a: {
      padding: '2em 1em',
      display: 'block',
      cursor: 'pointer',
      '&:hover': {
        color: 'white',
        boxShadow: `inset 0px -4px 0px 0px white`
      }
    }
  }
});
