import styled from 'styled-components';

export const FlowerContainer = styled('div')({
  '>:nth-child(1)': {
    position: 'absolute',
    top: '200px',
    left: '50%'
  },
  '>:nth-child(2)': {
    position: 'absolute',
    bottom: '150px',
    left: '10%'
  },
  '>:nth-child(3)': {
    position: 'absolute',
    bottom: '150px',
    left: '40%'
  },
  '>:nth-child(4)': {
    position: 'absolute',
    bottom: '150px',
    // zIndex: '-1',
    width: '350px',
    right: '55%'
  },
  '>:nth-child(5)': {
    position: 'absolute',
    top: '150px',
    left: '20%'
  },
  '>:nth-child(6)': {
    position: 'absolute',
    bottom: '350px',
    right: '30%'
  }
});
