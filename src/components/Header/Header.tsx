import React from 'react';
import { CurrencyWrapper, Title, Wrapper } from './Header.styles';
import { useConversionRateContext } from '../../providers/ConversionRateProvider';
import Button from '../Button/Button';

const Header = () => {
  const { conversionRate, handleSetConversionRate, getConversionRate } = useConversionRateContext();

  const handleResetConversionRate = () => {
    getConversionRate();
  };

  return (
    <Wrapper>
      <Title>List of transactions</Title>
      <div>
        <CurrencyWrapper>
          <p>1 EUR = </p>
          <input
            value={conversionRate}
            type='number'
            step='0.001'
            min='0.001'
            data-testid='conversionRateInput'
            onChange={e => handleSetConversionRate(parseFloat(e.target.value))}
          />
          <p>PLN</p>
        </CurrencyWrapper>
        <Button onClick={handleResetConversionRate}>Reset</Button>
      </div>
    </Wrapper>
  );
};

export default Header;
