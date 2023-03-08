import styled from 'styled-components';

export const FAQContainer = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: '#F3F3F3',
  gap: '20em',
  '@media (max-width: 1100px)': {
    gap: '1em'
  }
}));
