import React, { ReactNode } from 'react';
import { GlobalStyle } from '../assets/styles/GlobalStyle';
import { SumProvider } from './SumProvider';
import { Provider } from 'react-redux';
import { store } from '../store';

const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <SumProvider>
        <GlobalStyle />
        {children}
      </SumProvider>
    </Provider>
  );
};

export default AppProviders;
