import React from 'react';
import { CurrencyWrapper, Title, Wrapper } from './Header.styles';
import { useConversionRateContext } from '../../providers/ConversionRateProvider';
import Button from '../Button/Button';

const Header = () => {
  const { conversionRate, handleSetConversionRate, getConversionRate } = useConversionRateContext();

  const handleResetConversionRate = () => {
    getConversionRate();
  };

  const minValue = 0.001;

  const setInputValue = (e: React.FormEvent<HTMLInputElement>) => {
    if (parseFloat(e.currentTarget.value) < minValue || e.currentTarget.value === '') {
      handleSetConversionRate(minValue);
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
            min={minValue}
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
