import React from 'react';
import { AmountDetails, Wrapper } from './LargestAmount.styles';

const LargestAmount = () => {
  return (
    <Wrapper>
      <p>Largest amount transaction:</p>
      <AmountDetails>
        <p> Title |</p>
        <p> XXX EUR |</p>
        <p> (YYY PLN)</p>
      </AmountDetails>
    </Wrapper>
  );
};

export default LargestAmount;
