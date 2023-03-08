import React from 'react';
import { Menu, NavContainer } from './styled';
import { MenuLinkLi } from './styled';
import DropMenu, { DropMenuItem } from './DropMenu';

export default function Navigation() {
  return (
    <NavContainer>
      <Menu>
        <MenuLink text={'Home'} link={'/'} />
        <MenuLink text={'Our Story'} link={'#story'} />
        <DropMenu text={'Services ▼'}>
          <DropMenuItem text={'Salon Services'} link={''} />
          <DropMenuItem text={'Spa Services'} link={''} />
          <DropMenuItem text={'Bridal Services'} link={''} last />
        </DropMenu>
        <LogoLink src={'/icons/logo.png'} />
        <MenuLink text={'Products'} link={'#products'} />
        <MenuLink text={'News'} link={'#news'} />
        <MenuLink text={'Contact'} link={'#contact'} />
      </Menu>
    </NavContainer>
  );
}
const MenuLink = ({ text, link }) => {
  return (
    <MenuLinkLi>
      <a href={link}>{text}</a>
    </MenuLinkLi>
  );
};

const LogoLink = ({ src }) => {
  return (
    <li style={{ paddingBlock: '.5em' }}>
      <img src={src} />
    </li>
  );
};
