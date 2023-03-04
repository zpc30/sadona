import styled from 'styled-components';
import theme from '../../theme';

export const ButtonContainer = styled('div')({
  border: `1px solid ${theme.palette.colors.buttonDark}`,
  width: 'fit-content',
  'button:hover': {
    borderRadius: '0em'
  }
});

export const Button = styled('button')(({ light }) => ({
  border: 'none',
  transition: 'border-radius 300ms ease',
  padding: '.8em 1.6em',
  borderRadius: '1.5em 0 1.5em 0',
  color: light ? 'black' : 'white',
  fontFamily: 'Barlow',
  background: light ? theme.palette.colors.buttonLight : theme.palette.colors.buttonDark
  //   ...(light && {

  // })
}));
