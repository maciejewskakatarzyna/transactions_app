import React from 'react';
import { Title, Wrapper } from './Header.styles';

const Header = () => {
  return (
    <Wrapper>
      <Title>List of transactions</Title>
      <div>
        {' '}
        <p>1 PLN = </p>
        <input
          defaultValue='0.25'
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
