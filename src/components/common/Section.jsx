import styled from 'styled-components';

export const SectionContainer = styled('div')({
  position: 'relative',
  '@media (max-width: 1100px)': {
    width: '100%'
  }
});

export const Section = styled('div')(({ border, theme, textPosition }) => ({
  display: 'flex',
  textAlign: textPosition,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  paddingBlock: '5em',
  margin: '0 auto',
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
  }),
  '@media (max-width: 1100px)': {
    width: '100%',
    paddingInline: '2em'
  }
}));
