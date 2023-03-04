import styled from 'styled-components';
import theme from '../../theme';

export const SubHeading = styled('h3')({
  fontFamily: 'Cookie',
  paddingTop: '8em',
  color: 'white',
  fontSize: theme.font.extraLarge,
  fontWeight: '400'
});

export const Heading = styled('h1')({
  fontFamily: 'Prata',
  color: 'white',
  fontSize: theme.font.xxl,
  fontWeight: '400',
  width: '15ch'
});
