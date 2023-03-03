import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle(({ theme }) => ({
  '*': {
    color: theme.palette.colors.main
  }
}));
