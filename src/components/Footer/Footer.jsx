import React from 'react';
import {
  CopyRight,
  FooterContainer,
  FooterInfo,
  FooterInfoBox,
  FooterMenu,
  FooterMenuBox,
  FooterMenuItems
} from './styled';
import { Paragraph, SubHeading } from '../common/SubHeading';
import { Anchor } from '../common/Button';
import { useTheme } from 'styled-components';

export default function Footer() {
  const theme = useTheme();
  return (
    <FooterContainer>
      <FooterInfo>
        <FooterInfoBox>
          <img width="150px" src="/icons/logoDark.png" />
          <SubHeading style={{ color: theme.palette.colors.primary }}>
            Wed love to hear from you.
          </SubHeading>
        </FooterInfoBox>
        <FooterInfoBox>
          <ul>
            <li>
              <img src="/icons/phone.svg" />
              <Paragraph style={{ fontFamily: theme.fontFamily.text }}>(410) 263-1515</Paragraph>
            </li>
            <li>
              <img src="/icons/envelope.svg" />
              <Paragraph style={{ fontFamily: theme.fontFamily.text }}>info@mysadona.com</Paragraph>
            </li>
            <li>
              <img src="/icons/location.svg" />
              <Paragraph style={{ fontFamily: theme.fontFamily.text }}>
                15 West Street Annapolis, MD 21401
              </Paragraph>
            </li>
          </ul>
        </FooterInfoBox>
        <FooterInfoBox>
          <ul>
            <li>
              <img src="/icons/time.svg" />
              <Paragraph style={{ fontWeigth: '800', fontFamily: theme.fontFamily.text }}>
                Hours of Operation
              </Paragraph>
            </li>
            <li>
              <Paragraph style={{ fontFamily: theme.fontFamily.text }}>
                Monday - Tuesday: 11am - 7pm
              </Paragraph>
            </li>
            <li>
              <Paragraph style={{ fontFamily: theme.fontFamily.text }}>
                Wednesday - Friday: 9am - 7pm
              </Paragraph>
            </li>
            <li>
              <Paragraph style={{ fontFamily: theme.fontFamily.text }}>
                Saturday: 8am - 4pm
              </Paragraph>
            </li>
            <li>
              <Paragraph style={{ fontFamily: theme.fontFamily.text }}>
                Sunday: 10am - 4pm
              </Paragraph>
            </li>
          </ul>
        </FooterInfoBox>
        <FooterInfoBox>
          <ul>
            <li>
              <Paragraph style={{ fontFamily: theme.fontFamily.text }}>Folow us</Paragraph>
            </li>
            <li>
              <img src="/icons/instagram.svg" />
              <img src="/icons/facebook.svg" />
            </li>
          </ul>
        </FooterInfoBox>
      </FooterInfo>
      <FooterMenu>
        <FooterMenuBox>
          <Paragraph style={{ fontFamily: theme.fontFamily.text }}>Menu</Paragraph>
          <FooterMenuItems>
            <Anchor style={{ fontSize: theme.font.normal }}>Home</Anchor>
            <Anchor style={{ fontSize: theme.font.normal }}>Our Story</Anchor>
            <Anchor style={{ fontSize: theme.font.normal }}>Services</Anchor>
            <Anchor style={{ fontSize: theme.font.normal }}>Products</Anchor>
            <Anchor style={{ fontSize: theme.font.normal }}>News</Anchor>
            <Anchor style={{ fontSize: theme.font.normal }}>Contacts</Anchor>
          </FooterMenuItems>
        </FooterMenuBox>
        <FooterMenuBox>
          <Paragraph style={{ fontFamily: theme.fontFamily.text }}>Services</Paragraph>
          <FooterMenuItems>
            <Anchor style={{ fontSize: theme.font.normal }}>Salon Services</Anchor>
            <Anchor style={{ fontSize: theme.font.normal }}>Spa Services</Anchor>
            <Anchor style={{ fontSize: theme.font.normal }}>Bridal Services</Anchor>
          </FooterMenuItems>
        </FooterMenuBox>
      </FooterMenu>
      <CopyRight>Copyright 2016 Herrmann Advertising | All Rights Reserved</CopyRight>
    </FooterContainer>
  );
}
