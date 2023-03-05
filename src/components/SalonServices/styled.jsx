import styled from 'styled-components';

export const ImageContainer = styled('div')(() => ({
  position: 'absolute',
  height: '400px',
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
    bottom: '-170px',
    width: '100%',
    height: '100%'
  }
}));
