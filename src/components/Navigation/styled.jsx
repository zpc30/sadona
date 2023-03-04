import styled from 'styled-components';
import theme from '../../theme';

export const NavContainer = styled('nav')({
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  backgroundColor: `${theme.palette.background.primary}`
});

export const Menu = styled('ul')({
  listStyle: 'none',
  display: 'flex',
  gap: '2em',
  color: 'white'
});
