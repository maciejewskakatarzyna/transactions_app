import React from 'react';
import { Title, Wrapper } from './Header.styles';
import { useConversionRateContext } from '../../providers/ConversionRateProvider';

const Header = () => {
  const { conversionRate, handleSetConversionRate, getConversionRate } = useConversionRateContext();

  const handleResetConversionRate = () => {
    getConversionRate();
  };

  return (
    <Wrapper>
      <Title>List of transactions</Title>
      <div>
        <p>1 PLN = </p>
        <input
          value={conversionRate}
          type='number'
          step='0.001'
          min='0.001'
          data-testid='conversionRateInput'
          onChange={e => handleSetConversionRate(parseFloat(e.target.value))}
        />
        <p>EUR</p>
        <button onClick={handleResetConversionRate}>reset</button>
      </div>
    </Wrapper>
  );
};

export default Header;
