import React from 'react';
import Header from './Header';
import { render, screen } from '../../test-utils';
import userEvent from '@testing-library/user-event';
import { ConversionRateContext } from '../../providers/ConversionRateProvider';
import { clear } from '@testing-library/user-event/dist/clear';
import { fireEvent } from '@testing-library/react';

const conversionRate = 5;

describe('Header', () => {
  it('Renders the component', () => {
    render(<Header />);
    screen.getByText(/List of transactions/i);
    screen.getByText(/1 PLN/i);
    screen.getByText(/EUR/i);
  });

  // it('Renders the component with a given conversion rate', () => {
  //   render(
  //     <ConversionRateContext.Provider
  //       value={{
  //         conversionRate: conversionRate,
  //         handleSetConversionRate: jest.fn(),
  //         getConversionRate: jest.fn(),
  //       }}
  //     >
  //       <Header />
  //     </ConversionRateContext.Provider>
  //   );
  //   const input = screen.getByTestId('conversionRateInput');
  //   const inputValue = 2;
  //   const stringValue = inputValue.toString();
  //
  //   expect(input).toHaveValue(conversionRate);
  //
  //   fireEvent.change(input, stringValue);
  //   expect(input).toHaveValue(inputValue);
  // });
});
