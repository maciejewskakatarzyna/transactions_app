import React, { ReactNode } from 'react';
import { GlobalStyle } from '../assets/styles/GlobalStyle';
import { SumProvider } from './SumProvider';
import { Provider } from 'react-redux';
import { store } from '../store';
import { ConversionRateProvider } from './ConversionRateProvider';
import { ThemeProvider } from 'styled-components';
import { theme } from '../assets/styles/theme';

const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ConversionRateProvider>
          <SumProvider>
            <GlobalStyle />
            {children}
          </SumProvider>
        </ConversionRateProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default AppProviders;
