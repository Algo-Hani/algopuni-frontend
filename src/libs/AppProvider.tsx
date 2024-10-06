'use client';
import { type PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles';
import Recoil from './Recoil';
import StyledComponentsRegistry from './StyledRegistry';
import ReactQueryProvider from './reactQueryProvider';

const AppProvider = ({ children }: PropsWithChildren) => {
  return (
    <ReactQueryProvider>
      <Recoil>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </StyledComponentsRegistry>
      </Recoil>
    </ReactQueryProvider>
  );
};

export default AppProvider;
