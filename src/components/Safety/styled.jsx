import styled from 'styled-components';

export const SectionContainer = styled('div')(({ theme, textPosition }) => ({
  display: 'flex',
  textAlign: { textPosition },
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  paddingBlock: '2em',
  backgroundColor: theme.palette.colors.secondary
}));
