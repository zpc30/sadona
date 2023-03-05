import React from 'react';
import { DropMenuList, DropMenuContainer, DropMenuItemWrapper } from './styled';

export default function DropMenu({ children, text }) {
  return (
    <DropMenuContainer>
      {text}
      <DropMenuList>{children}</DropMenuList>
    </DropMenuContainer>
  );
}

export const DropMenuItem = ({ text, link, last }) => {
  return (
    <DropMenuItemWrapper last={last}>
      <a href={link}>{text}</a>
    </DropMenuItemWrapper>
  );
};
