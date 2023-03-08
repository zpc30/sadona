import styled from 'styled-components';

export const FlowerContainer = styled('div')(() => ({
  '>:nth-child(1)': {
    position: 'absolute',
    top: '250px',
    left: '60%'
  },
  '>:nth-child(2)': {
    position: 'absolute',
    bottom: '150px',
    left: '10%',
    zIndex: '-1'
  },
  '>:nth-child(3)': {
    position: 'absolute',
    bottom: '200px',
    left: '40%'
    // zIndex: '-1'
  },
  '>:nth-child(4)': {
    position: 'absolute',
    bottom: '100px',
    zIndex: '-1',
    width: '100px',
    right: '150px'
  },
  '>:nth-child(5)': {
    position: 'absolute',
    top: '150px',
    zIndex: '1',
    left: '20%'
  },
  '>:nth-child(6)': {
    position: 'absolute',
    top: '150px',
    right: '30%'
  }
}));
