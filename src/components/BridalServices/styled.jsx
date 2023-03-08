import styled from 'styled-components';

export const BridalContainer = styled('div')(() => ({
  backgroundImage: 'url(/images/bridalServices.png)',
  backgroundPosition: 'center',
  position: 'relative',
  alignItems: 'flex-start',
  width: '1100px',
  height: '500px',
  margin: '5em auto',
  borderRadius: '0 10em 0 10em',
  '@media (max-width: 1100px)': {
    width: '90%',
    margin: '4em auto'
  }
}));
