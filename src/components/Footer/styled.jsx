import styled from 'styled-components';

export const FooterContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#F3F3F3'
}));

export const FooterInfo = styled('div')(() => ({
  display: 'flex',
  width: '1100px',
  margin: '0 auto',
  paddingBlock: '3em',
  borderBlock: '2px solid white',
  gap: '2em'
}));

export const FooterInfoBox = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
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
  }
}));

export const FooterMenu = styled('div')(() => ({
  display: 'flex',
  width: '1100px',
  justifyContent: 'space-between',
  margin: '0 auto 5em'
}));

export const FooterMenuBox = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column'
}));

export const FooterMenuItems = styled('div')(() => ({
  display: 'flex',
  gap: '1em'
}));

export const CopyRight = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.colors.primary,
  textAlign: 'center',
  color: theme.palette.colors.secondary,
  paddingBlock: '.7em'
}));
