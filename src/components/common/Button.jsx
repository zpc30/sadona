import styled from 'styled-components';

export const Button = styled('button')(({ light }) => ({
  border: 'none',
  padding: '.6em .8em',
  borderRadius: '1em 0 1em 0',
  color: light ? 'black' : 'white',
  fontFamily: 'Barlow',
  background: light ? 'yellow' : 'red'
  //   ...(light && {

  // })
}));

export const ButtonContainer = styled('div')({
  border: '1px solid red',
  display: 'inline-block'
});
