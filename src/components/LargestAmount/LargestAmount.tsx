import React from 'react';
import { AmountDetails, Wrapper } from './LargestAmount.styles';
import { useSelector } from 'react-redux';
import { State, Transaction } from '../../store';
import { EURtoPLN } from '../../helpers/eurToPln';
import { useConversionRateContext } from '../../providers/ConversionRateProvider';

const LargestAmount = () => {
  const { conversionRate } = useConversionRateContext();

  const transactions = useSelector((state: State) => state.transactions);

  const max = Math.max(
    ...transactions.map(function (t: Transaction) {
      return t.amount;
    })
  );

  const i = transactions.findIndex(x => x.amount == max);

  return transactions.length ? (
    <Wrapper>
      <p>Largest amount transaction:&nbsp;</p>
      <AmountDetails>
        <p>
          {transactions[i].title} | {transactions[i].amount} EUR |&nbsp;
          {EURtoPLN(transactions[i].amount, conversionRate)} PLN
        </p>
      </AmountDetails>
    </Wrapper>
  ) : null;
};

export default LargestAmount;
