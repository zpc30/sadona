import React from 'react';
import { useTheme } from 'styled-components';
import { Section } from '../common/Section';
import { Paragraph, SubHeading, TitleHeading } from '../common/SubHeading';
import { Anchor } from '../common/Button';
import { ProductsContainer } from './styled';

export default function Cezanne() {
  const theme = useTheme();
  return (
    <ProductsContainer>
      <Section
        style={{
          alignItems: 'flex-start',
          width: '25vw',
          backgroundColor: theme.palette.colors.primary,
          margin: '.5em 3em'
        }}>
        <TitleHeading
          style={{
            paddingTop: '0',
            fontSize: theme.font.medium,
            color: theme.palette.colors.secondary
          }}>
          <PackgaeSvg />
          Products
        </TitleHeading>
        <SubHeading></SubHeading>
        <Paragraph style={{ width: '500px', color: theme.palette.colors.secondary }}>
          Transform your frizzy, difficult, kinky, curly hair into soft, manageable, beautiful
          locks.<span> Reduce your drying and styling time by client reported</span>
        </Paragraph>
        <Anchor
          style={{
            display: 'block',
            width: '150px',
            margin: '.5em 0em 0 20em',
            color: theme.palette.colors.secondary
          }}>
          Check out more
        </Anchor>
      </Section>
      <img style={{ width: '50vw', borderRadius: '0 5em 0 5em' }} src="/images/cezanne.png" />
    </ProductsContainer>
  );
}

const PackgaeSvg = () => {
  const theme = useTheme();
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="32" viewBox="0 0 35 32">
      <defs></defs>
      <path
        className="a"
        fill={theme.palette.colors.secondary}
        d="M32.286,33.752V18.131a1.02,1.02,0,0,0-1.03-1.009H3.671a1.02,1.02,0,0,0-1.03,1.009V35a3.151,3.151,0,0,0-1.412.572,3.015,3.015,0,0,0-.54,4.346l4.637,5.51c2.871,3.293,5.92,3.7,10.453,3.7a34.425,34.425,0,0,0,9.02-.74l3.3-.774a2.9,2.9,0,0,0,2.341,1.207h1.626A2.983,2.983,0,0,0,35,45.789V36.769A2.991,2.991,0,0,0,32.286,33.752Zm-4.628,2.076-1.372-.683a8.306,8.306,0,0,0-7.154-.113,9.958,9.958,0,0,1-2.7,1.022h-4.76a2.839,2.839,0,0,0-2.864,2.807V39.6l-.027-.027-3.4-3.616A3.124,3.124,0,0,0,4.7,35.4V25.393h8.426v3.7a1.02,1.02,0,0,0,1.03,1.009h6.5a1.02,1.02,0,0,0,1.03-1.009v-3.7h8.544v8.359a2.955,2.955,0,0,0-2.569,2.076ZM15.186,25.393h4.438v2.69H15.186Zm15.041-2.018H21.682V19.14h8.544v4.234Zm-10.6-4.234v4.234H15.186V19.14Zm-6.5,0v4.234H4.7V19.14Zm11.2,27.278a33.4,33.4,0,0,1-8.505.675c-4.256,0-6.312-.067-8.9-2.952l-4.637-5.51A1.033,1.033,0,0,1,3.871,37.32l3.4,3.616a4.718,4.718,0,0,0,3.422,1.471h9.425a1.009,1.009,0,1,0,0-2.018H10.871V38.861a.8.8,0,0,1,.8-.788h4.76c1.072.075,2.62-.8,3.564-1.211a6.219,6.219,0,0,1,5.356.084l2.156,1.073v7.652Zm8.618-.629a.948.948,0,0,1-.871,1.008H30.442a.948.948,0,0,1-.871-1.008v-9.02a.948.948,0,0,1,.871-1.008h1.626a.948.948,0,0,1,.871,1.008Z"
        transform="translate(0.001 -17.122)"
      />
    </svg>
  );
};
