import React from 'react';
import { Menu, NavContainer } from './styled';

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
        <li>
          <a>Services</a>
        </li>
      </Menu>
      <img src="./icons/logo.png" />
      <Menu>
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
