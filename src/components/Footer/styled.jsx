import styled from 'styled-components';

export const FooterContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#F3F3F3'
}));

export const FooterInfo = styled('div')(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  width: '1100px',
  margin: '0 auto',
  paddingBlock: '3em',
  borderBlock: '2px solid white',
  gap: '1em',
  '@media (max-width: 1100px)': {
    width: '100%',
    paddingInline: '2em',
    justifyContent: 'center'
  }
}));

export const FooterInfoBox = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: 'fit-content',
  li: {
    display: 'flex',
    gap: '1em',
    width: '100%',
    marginBottom: '-1em',
    marginLeft: '2em'
  },
  'svg:hover': {
    path: {
      fill: theme.palette.colors.secondary
    }
  },
  '@media (max-width: 1100px)': {
    width: '40%'
  }
}));

export const FooterMenu = styled('div')(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  width: '1100px',
  justifyContent: 'space-between',
  margin: '0 auto 5em',
  '@media (max-width: 1100px)': {
    width: '100%'
  }
}));

export const FooterMenuBox = styled('div')(() => ({
  display: 'flex',
  width: 'fit-content',
  flexDirection: 'column',
  '@media (max-width: 1100px)': {
    width: '100%',
    paddingInline: '6em'
  }
}));

export const FooterMenuItems = styled('div')(() => ({
  display: 'flex',
  gap: '1em',
  '@media (max-width: 1100px)': {
    width: 'fit-content'
  }
}));

export const CopyRight = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.colors.primary,
  textAlign: 'center',
  color: theme.palette.colors.secondary,
  paddingBlock: '.7em'
}));
