import React from 'react';
import { AmountDetails, Wrapper, Title } from './LargestAmount.styles';
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

  return (
    <Wrapper>
      <Title>Largest amount transaction:&nbsp;</Title>
      <AmountDetails>
        {transactions.length ? (
          <>
            <p>Title: {transactions[i].title}</p>
            <p>Amount (EUR): {transactions[i].amount} EUR</p>
            <p>Amount (PLN): {EURtoPLN(transactions[i].amount, conversionRate)} PLN</p>
          </>
        ) : (
          <p>No transactions added</p>
        )}
      </AmountDetails>
    </Wrapper>
  );
};

export default LargestAmount;
