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
  }
}));
