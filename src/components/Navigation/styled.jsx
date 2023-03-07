import styled from 'styled-components';

export const NavContainer = styled('nav')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  backgroundColor: `${theme.palette.background.primary}`,
  position: 'relative',
  zIndex: '2',
  boxShadow: '2px 4px 12px rgb(000,000,000,.4)',
  img: {
    width: '165px',
    marginInline: '5em'
  }
}));

export const Menu = styled('ul')({
  listStyle: 'none',
  display: 'flex',
  gap: ' 2.5em',
  width: '1100px',
  alignItems: 'center',
  position: 'relative'
});

export const MenuLinkLi = styled('li')(({ theme }) => ({
  fontFamily: 'Barlow',
  fontSize: theme.font.normal,
  color: theme.palette.colors.primaryLight,
  a: {
    textAlign: 'center',
    width: '90px',
    padding: '2.5em 0em',
    transition: 'all 300ms ease 200ms',
    display: 'block',
    cursor: 'pointer',
    textDecoration: 'none',
    color: theme.palette.colors.secondary,
    '&:hover': {
      color: 'white',
      boxShadow: `inset 0px -2px 0px 0px white`
    }
  }
}));

export const DropMenuContainer = styled('li')(({ theme }) => ({
  fontFamily: 'Barlow',
  fontSize: '20px',
  color: theme.palette.colors.secondary,
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  paddingLeft: '1em',
  paddingBlock: '2.5em',
  '&:hover': {
    ul: {
      display: 'block',
      textAlign: 'center'
    }
  }
}));

export const DropMenuList = styled('ul')(({ theme }) => ({
  display: 'none',
  listStyle: 'none',
  color: theme.palette.colors.primary,
  background: 'rgb(242, 242, 242,0.4)',
  position: 'absolute',
  marginLeft: '1em',
  bottom: '-145px',
  width: '120px',
  left: '50%',
  transform: 'translateX(-50%)',
  fontSize: theme.font.normal
}));

export const DropMenuItemWrapper = styled('li')(({ last, theme }) => ({
  padding: '.6em 0em',
  position: 'relative',
  width: '100%',
  a: {
    color: theme.palette.colors.primary,
    textDecoration: 'none',
    fontSize: theme.font.small
  },
  '&:before': {
    content: '""',
    position: 'absolute',
    left: '50%',
    bottom: '0',
    transform: 'translateX(-50%)',
    height: '1px',
    width: '30%',
    borderBottom: last ? 'none' : '1px solid white'
  }
}));
