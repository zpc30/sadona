import styled from 'styled-components';

export const SpaContainer = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  backgroundColor: theme.palette.colors.primary,
  zIndex: '1',
  position: 'relative',
  '@media (max-width: 1100px)': {
    width: '100%',
    paddingLeft: '10%'
  }
}));

export const ImageHolder = styled('div')(() => ({
  position: 'absolute',
  width: '100%',
  height: '500px',
  zIndex: '0',
  right: '-40vw',
  img: {
    objectFit: 'cover',
    objectPosition: 'right',
    width: '100%',
    height: '100%'
  },
  '@media (max-width: 1100px)': {
    height: '800px',
    img: {
      objectPosition: 'top '
    }
  }
}));
