import styled from 'styled-components';

export const Card = styled('div')(({ theme }) => ({
  border: '5em 0 5em 0',
  width: '350px',
  height: '760px',
  borderRadius: '5em 0 5em 0',
  background: 'white',
  transition: 'transform 300ms ease 300ms',
  '&:hover': {
    '*': {
      fill: '#D1C1A5',
      color: `#D1C1A5 !important`
    },
    transform: 'translateY(-50px)',
    backgroundColor: theme.palette.colors.primary
  }
}));
