import React from 'react';
import { DropAction, DropDown, Menu, NavContainer } from './styled';

export default function Navigation() {
  return (
    <NavContainer>
      <Menu>
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>Our Story</a>
        </li>
        <DropAction>
          <a>Services ▼</a>
          <DropDown>
            <li>Salon Services</li>
            <li>Spa Services</li>
            <li>Bridal Services</li>
          </DropDown>
        </DropAction>
        <li>
          <img src="./icons/logo.png" />
        </li>
        <li>
          <a>Products</a>
        </li>
        <li>
          <a>News</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
      </Menu>
    </NavContainer>
  );
}
