import React from 'react';
import { CurrencyWrapper, Title, Wrapper } from './Header.styles';
import { useConversionRateContext } from '../../providers/ConversionRateProvider';
import Button from '../Button/Button';

const Header = () => {
  const { conversionRate, handleSetConversionRate, getConversionRate } = useConversionRateContext();

  const handleResetConversionRate = () => {
    getConversionRate();
  };

  const setInputValue = (e: React.FormEvent<HTMLInputElement>) => {
    if (parseFloat(e.currentTarget.value) < 0.001 || e.currentTarget.value == null) {
      handleSetConversionRate(0.001);
    } else handleSetConversionRate(parseFloat(e.currentTarget.value));
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
            min='0.001'
            step='0.001'
            data-testid='conversionRateInput'
            onChange={setInputValue}
          />
          <p>PLN</p>
        </CurrencyWrapper>
        <Button onClick={handleResetConversionRate}>Reset</Button>
      </div>
    </Wrapper>
  );
};

export default Header;
