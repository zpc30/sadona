import React from 'react';
import { useTheme } from 'styled-components';

export default function App() {
  const theme = useTheme();
  return (
    <div
      style={{
        color: theme.palette.colors.main
      }}>
      Hello world!
    </div>
  );
}
