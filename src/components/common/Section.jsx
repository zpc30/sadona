import styled from 'styled-components';

export const SectionContainer = styled('div')({
  position: 'relative'
});

export const Section = styled('div')(({ border, theme, textPosition }) => ({
  display: 'flex',
  textAlign: textPosition,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  paddingBlock: '5em',
  backgroundColor: theme.palette.colors.secondary,
  ...(border && {
    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: '50px',
      width: '120px',
      height: '1px',
      backgroundColor: theme.palette.colors.primary
    },
    '&:before': {
      content: '""',
      position: 'absolute',
      top: '50px',
      width: '120px',
      height: '1px',
      backgroundColor: theme.palette.colors.primary
    }
  })
}));
