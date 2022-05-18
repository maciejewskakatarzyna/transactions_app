import React from 'react';
import { Title, Wrapper } from './Header.styles';
import { useConversionRateContext } from '../../providers/ConversionRateProvider';

const Header = () => {
  const { conversionRate } = useConversionRateContext();

  return (
    <Wrapper>
      <Title>List of transactions</Title>
      <div>
        {' '}
        <p>1 PLN = </p>
        <input
          defaultValue={conversionRate}
          type='number'
          step='0.001'
          min='0.001'
          data-testid='conversionRateInput'
          onChange={() => console.log('change')}
        />{' '}
        <p>EUR</p>
      </div>
    </Wrapper>
  );
};

export default Header;
