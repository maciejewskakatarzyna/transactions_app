import React from 'react';
import { AmountDetails, Wrapper } from './LargestAmount.styles';
import { useSelector } from 'react-redux';
import { State, Transaction } from '../../store';
import { EURtoPLN } from '../../helpers/eurToPln';

const LargestAmount = () => {
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
          {transactions[i].title} | {transactions[i].amount} EUR | (
          {EURtoPLN(transactions[i].amount, 0.25)} PLN)
        </p>
      </AmountDetails>
    </Wrapper>
  ) : null;
};

export default LargestAmount;
