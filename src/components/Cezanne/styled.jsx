import styled from 'styled-components';

export const ProductsContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  width: '1100px',
  height: '300px',
  margin: '5em auto',
  background: theme.palette.colors.primary,
  transition: 'color 200ms ease-in',
  borderRadius: '0 5em 0 5em',
  '&:hover': {
    background: theme.palette.colors.secondary,
    '*': {
      backgroundColor: `#D1C1A5 !important`,
      color: `#803E38 !important`,
      fill: '#803E38'
    }
  },
  '@media (max-width: 1100px)': {
    width: '85%',
    height: '350px'
    // marginInline: '2em'
  }
}));

export const ProductText = styled('div')(({ theme }) => ({
  alignItems: 'flex-start',
  width: '25vw',
  paddingBlock: '3em',
  backgroundColor: theme.palette.colors.primary,
  margin: '.5em 3em',
  '@media (max-width: 1100px)': {
    p: {
      width: '30px'
    }
  }
}));
