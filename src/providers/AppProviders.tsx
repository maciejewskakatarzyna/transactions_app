import React, { ReactNode } from 'react';
import { GlobalStyle } from '../assets/styles/GlobalStyle';
import { SumProvider } from './SumProvider';
import { Provider } from 'react-redux';
import { store } from '../store';
import { ConversionRateProvider } from './ConversionRateProvider';

const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <ConversionRateProvider>
        <SumProvider>
          <GlobalStyle />
          {children}
        </SumProvider>
      </ConversionRateProvider>
    </Provider>
  );
};

export default AppProviders;
