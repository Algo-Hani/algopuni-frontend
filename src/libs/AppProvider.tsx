'use client';
import { type PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '@/styles';
import Recoil from './Recoil';
import StyledComponentsRegistry from './StyledRegistry';

const AppProvider = ({ children }: PropsWithChildren) => {
  return (
    <Recoil>
      <StyledComponentsRegistry>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </StyledComponentsRegistry>
    </Recoil>
  );
};

export default AppProvider;
