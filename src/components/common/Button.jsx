import styled from 'styled-components';

export const ButtonContainer = styled('div')(({ light, theme }) => ({
  border: light
    ? `1px solid ${theme.palette.colors.buttonLight}`
    : `1px solid ${theme.palette.colors.buttonDark}`,
  width: 'fit-content',
  'button:hover': {
    borderRadius: '0em',
    backgroundColor: light ? theme.palette.colors.secondary : theme.palette.colors.primary
  },
  '&:hover': {
    border: light
      ? `1px solid ${theme.palette.colors.secondary}`
      : `1px solid ${theme.palette.colors.primary}`
  },
  '@media (max-width: 1100px)': {
    marginRight: '1em'
  }
}));

export const Button = styled('button')(({ light, theme }) => ({
  border: 'none',
  transition: 'border-radius 300ms ease',
  padding: '.8em 1.6em',
  borderRadius: '1.5em 0 1.5em 0',
  color: light ? 'black' : 'white',
  fontFamily: 'Barlow',
  background: light ? theme.palette.colors.buttonLight : theme.palette.colors.buttonDark
}));

export const Anchor = styled('a')(({ menu, theme, product }) => ({
  display: 'block',
  margin: '0em auto',
  fontFamily: theme.fontFamily.text,
  fontSize: theme.font.small,
  color: theme.palette.colors.primary,
  ...(menu && {
    '&:hover': {
      color: theme.palette.colors.secondary,
      borderBottom: `2px solid #803E38`,
      margin: '-.5px'
    }
  }),
  '@media (max-width: 1100px)': {
    ...(product && {
      position: 'relative',
      zIndex: '20',
      left: '-200px',
      cursor: 'pointer',
      width: '0px'
    })
  }
}));
