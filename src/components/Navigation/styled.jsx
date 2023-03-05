import styled from 'styled-components';

export const NavContainer = styled('nav')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  backgroundColor: `${theme.palette.background.primary}`,
  position: 'relative',
  zIndex: '2',
  img: {
    width: '165px',
    marginInline: '8em'
  }
}));

export const Menu = styled('ul')({
  listStyle: 'none',
  display: 'flex',
  position: 'relative'
});

export const MenuLinkLi = styled('li')(({ theme }) => ({
  fontFamily: 'Barlow',
  fontSize: '20px',
  color: theme.palette.colors.primaryLight,
  a: {
    padding: '2.2em 1em',
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
  bottom: '-115px',
  width: '120px',
  left: '50%',
  fontSize: theme.font.normal
}));

export const DropMenuItemWrapper = styled('li')(({ last }) => ({
  padding: '.6em 0em',
  position: 'relative',
  width: '100%',
  '&:before': {
    content: '""',
    position: 'absolute',
    left: '50%',
    bottom: '0',
    transform: 'translateX(-50%)',
    height: '1px',
    width: '50%' /* or 100px */,
    borderBottom: last ? 'none' : '1px solid magenta'
  }
}));
