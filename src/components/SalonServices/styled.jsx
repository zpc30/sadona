import styled from 'styled-components';

export const ImageContainer = styled('div')(() => ({
  position: 'absolute',
  height: '400px',
  zIndex: '-1',
  width: '1100px',
  overflow: 'hidden',
  img: {
    borderRadius: '10em 0 0',
    objectFit: 'cover',
    objectPosition: 'top -50px right 100px  ',
    position: 'absolute',
    zIndex: '-1',
    right: '-250px',
    bottom: '-50px',
    width: '100%',
    height: '100%'
  },
  '@media (max-width: 1100px)': {
    width: '90%',
    img: {
      right: '-25%'
    }
  }
}));

export const SmallImageContainer = styled('div')(() => ({
  position: 'absolute',
  height: '150px',
  width: '400px',
  img: {
    borderRadius: '3em 0 3em',
    objectFit: 'cover',
    objectPosition: 'center',
    position: 'absolute',
    right: '-700px',
    bottom: '-300px',
    width: '100%',
    height: '100%'
  },
  '@media (max-width: 1100px)': {
    width: '40%',
    img: {
      right: '-125%'
    }
  }
}));

export const SalonContainer = styled('div')(() => ({
  display: 'flex',
  background: 'transparent',
  alignItems: 'flex-start',
  width: '1100px',
  margin: '0 auto',
  '@media (max-width: 1100px)': {
    width: '100%',
    margin: '0',
    paddingInline: '.3em'
  }
}));
