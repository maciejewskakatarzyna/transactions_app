import React from 'react';
import { AmountDetails, Wrapper, Title, MaxTransaction } from './LargestAmount.styles';
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

  const maxArray = transactions.filter(x => x.amount == max);

  return (
    <Wrapper>
      <Title>
        {maxArray.length > 1
          ? 'The largest amount transactions:'
          : 'The largest amount transaction:'}
      </Title>
      <AmountDetails>
        {transactions.length ? (
          <>
            {maxArray.map(({ id, title, amount }: Transaction) => (
              <MaxTransaction key={id}>
                <p>Title: {title}</p>
                <p>Amount (EUR): {amount} EUR</p>
                <p>Amount (PLN): {EURtoPLN(amount, conversionRate)} PLN</p>
                <hr />
              </MaxTransaction>
            ))}
          </>
        ) : (
          <p>No transactions added</p>
        )}
      </AmountDetails>
    </Wrapper>
  );
};

export default LargestAmount;
