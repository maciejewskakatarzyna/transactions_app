import React from 'react';
import Header from './Header';
import { render, screen } from '../../test-utils';
import { ConversionRateContext } from '../../providers/ConversionRateProvider';

const conversionRate = 5;

describe('Header', () => {
  it('Renders the component with a given conversion rate', () => {
    render(
      <ConversionRateContext.Provider
        value={{
          conversionRate: conversionRate,
          handleSetConversionRate: jest.fn(),
          getConversionRate: jest.fn(),
        }}
      >
        <Header />
      </ConversionRateContext.Provider>
    );

    screen.getByText(/List of transactions/i);
    screen.getByText(/1 EUR/i);
    screen.getByText(/PLN/i);
    const input = screen.getByTestId('conversionRateInput');
    expect(input).toHaveValue(conversionRate);
  });
});
