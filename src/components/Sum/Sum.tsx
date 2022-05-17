import React, { useEffect, useState } from 'react';
import { EURtoPLN } from '../../helpers/eurToPln';
import { sumAmount } from '../../helpers/sumAmount';
import { useSumContext } from '../../providers/SumProvider';
import { useSelector } from 'react-redux';
import { State } from '../../store';

interface ISumValue {
  sumPLN: number;
  sumEUR: number;
}

const Sum = () => {
  const { sum } = useSumContext();
  const [sumValue, setSumValue] = useState<ISumValue>({ sumPLN: 0, sumEUR: 0 });
  const transactions = useSelector((state: State) => state.transactions);

  const EUR = 0.25;

  const EURvalue = transactions.length && sumAmount(sum);
  const PLNvalue = EURtoPLN(EURvalue, EUR);

  useEffect(() => {
    setSumValue({ sumPLN: PLNvalue, sumEUR: EURvalue });
  }, [PLNvalue, EURvalue, sum]);

  return (
    <div>
      <p>{transactions.length ? `Sum: ${sumValue.sumEUR} EUR (${sumValue.sumPLN} PLN)` : null}</p>
    </div>
  );
};

export default Sum;
