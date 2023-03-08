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
          <SubHeading
            style={{
              color: theme.palette.colors.primary,
              fontSize: theme.font.extraLarge,
              width: '11ch'
            }}>
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
          <div style={{ display: 'flex', gap: '1em' }}>
            <img src="/icons/time.svg" />
            <Paragraph style={{ fontWeight: 'bold', fontFamily: theme.fontFamily.text }}>
              Hours of Operation
            </Paragraph>
          </div>
          <ul>
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
              <Paragraph style={{ fontWeight: 'bold', fontFamily: theme.fontFamily.text }}>
                Folow us
              </Paragraph>
            </li>
            <li>
              <Facebook />
              <Instagram />
            </li>
          </ul>
        </FooterInfoBox>
      </FooterInfo>
      <FooterMenu>
        <FooterMenuBox>
          <Paragraph style={{ color: theme.palette.colors.secondary }}>Menu</Paragraph>
          <FooterMenuItems>
            <Anchor menu style={{ fontSize: theme.font.normal }}>
              Home
            </Anchor>
            <Anchor menu style={{ fontSize: theme.font.normal }}>
              Our Story
            </Anchor>
            <Anchor menu style={{ fontSize: theme.font.normal }}>
              Services
            </Anchor>
            <Anchor menu style={{ fontSize: theme.font.normal }}>
              Products
            </Anchor>
            <Anchor menu style={{ fontSize: theme.font.normal }}>
              News
            </Anchor>
            <Anchor menu style={{ fontSize: theme.font.normal }}>
              Contacts
            </Anchor>
          </FooterMenuItems>
        </FooterMenuBox>
        <FooterMenuBox>
          <Paragraph style={{ color: theme.palette.colors.secondary }}>Services</Paragraph>
          <FooterMenuItems>
            <Anchor menu style={{ fontSize: theme.font.normal }}>
              Salon Services
            </Anchor>
            <Anchor menu style={{ fontSize: theme.font.normal }}>
              Spa Services
            </Anchor>
            <Anchor menu style={{ fontSize: theme.font.normal }}>
              Bridal Services
            </Anchor>
          </FooterMenuItems>
        </FooterMenuBox>
      </FooterMenu>

      <CopyRight>Copyright 2016 Herrmann Advertising | All Rights Reserved</CopyRight>
    </FooterContainer>
  );
}

const Facebook = () => {
  const theme = useTheme();
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="22" viewBox="0 0 12 22">
      <defs></defs>
      <path
        className="a"
        fill={theme.palette.colors.primary}
        d="M13.257,11.814v-4.2h3.436V5.5a5.487,5.487,0,0,1,1.5-3.894A4.817,4.817,0,0,1,21.844,0h3.413V4.2H21.844a.753.753,0,0,0-.6.363,1.46,1.46,0,0,0-.268.891V7.612h4.282v4.2H20.974V22H16.692V11.814Z"
        transform="translate(-13.257)"
      />
    </svg>
  );
};

const Instagram = () => {
  const theme = useTheme();
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 12 12">
      <defs></defs>
      <path
        className="a"
        fill={theme.palette.colors.primary}
        d="M6,0C4.37,0,4.166.008,3.526.036A4.424,4.424,0,0,0,2.07.315a2.938,2.938,0,0,0-1.063.692A2.928,2.928,0,0,0,.315,2.07,4.411,4.411,0,0,0,.036,3.526C.006,4.166,0,4.37,0,6S.008,7.833.036,8.473A4.427,4.427,0,0,0,.315,9.93a2.942,2.942,0,0,0,.692,1.063,2.934,2.934,0,0,0,1.063.692,4.43,4.43,0,0,0,1.456.279c.64.03.844.036,2.474.036s1.833-.008,2.473-.036a4.44,4.44,0,0,0,1.456-.279A3.066,3.066,0,0,0,11.685,9.93a4.427,4.427,0,0,0,.279-1.456C11.994,7.833,12,7.63,12,6s-.008-1.833-.036-2.474a4.437,4.437,0,0,0-.279-1.456,2.945,2.945,0,0,0-.692-1.063A2.923,2.923,0,0,0,9.93.315,4.414,4.414,0,0,0,8.473.036C7.833.006,7.63,0,6,0ZM6,1.08c1.6,0,1.792.008,2.425.035a3.306,3.306,0,0,1,1.114.207,1.974,1.974,0,0,1,1.139,1.138,3.313,3.313,0,0,1,.207,1.113c.029.633.035.823.035,2.425s-.008,1.792-.037,2.425a3.377,3.377,0,0,1-.21,1.114,1.905,1.905,0,0,1-.45.691,1.872,1.872,0,0,1-.69.448,3.337,3.337,0,0,1-1.118.207c-.637.029-.825.035-2.429.035s-1.793-.008-2.429-.037a3.4,3.4,0,0,1-1.118-.21,1.858,1.858,0,0,1-.689-.449,1.822,1.822,0,0,1-.45-.69,3.405,3.405,0,0,1-.21-1.118c-.022-.63-.031-.825-.031-2.422s.008-1.793.031-2.43A3.4,3.4,0,0,1,1.3,2.445a1.779,1.779,0,0,1,.45-.69,1.775,1.775,0,0,1,.689-.449A3.321,3.321,0,0,1,3.548,1.1c.638-.022.825-.03,2.429-.03L6,1.08ZM6,2.919A3.081,3.081,0,1,0,9.081,6,3.081,3.081,0,0,0,6,2.919ZM6,8A2,2,0,1,1,8,6,2,2,0,0,1,6,8ZM9.923,2.8a.72.72,0,1,1-.72-.719A.721.721,0,0,1,9.923,2.8Z"
        transform="translate(0 0)"
      />
    </svg>
  );
};
