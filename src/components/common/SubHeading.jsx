import styled from 'styled-components';

export const Headings = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignContent: 'center',
  width: '1100px',
  margin: '0 auto',
  '@media (max-width: 1100px)': {
    width: '100%',
    paddingInline: '2em'
  }
}));

export const TitleHeading = styled('h3')(({ theme }) => ({
  fontFamily: 'Cookie',
  paddingTop: '8em',
  display: 'flex',
  gap: '.5em',
  color: 'white',
  fontSize: theme.font.extraLarge,
  fontWeight: '400'
}));

export const Heading = styled('h1')(({ theme }) => ({
  fontFamily: 'Prata',
  color: 'white',
  fontSize: theme.font.xxl,
  fontWeight: '400',
  width: '15ch'
}));

export const SubHeading = styled('div')(({ theme }) => ({
  fontFamily: 'Prata',
  fontSize: theme.font.large,
  color: 'white',
  margin: '.5em 0'
}));

export const Paragraph = styled('p')(({ theme, product }) => ({
  paddingBlock: '1em',
  fontFamily: 'Prata',
  color: theme.palette.colors.primary,
  span: {
    color: theme.palette.colors.primary
  },
  '@media (max-width: 1100px)': {
    ...(product && {
      width: '250px !important'
    })
  }
}));
