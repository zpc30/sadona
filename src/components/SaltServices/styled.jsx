import styled from 'styled-components';

export const SaltContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  margin: '0 auto',
  zIndex: '2',
  height: '400px',
  background: theme.palette.colors.secondary,
  '@media (max-width: 1100px)': {
    width: '100%',
    justifyContent: 'space-between',
    img: {
      width: '50%'
    }
  }
}));
