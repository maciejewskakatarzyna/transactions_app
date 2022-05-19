import { EURtoPLN } from './eurToPln';

describe('eurToPln', () => {
  const PLN = 10;

  it.each`
    EURamount | expectedPLN
    ${10}     | ${1}
    ${20}     | ${2}
    ${44}     | ${4.4}
    ${400}    | ${40}
    ${99}     | ${9.9}
  `('calculates PLN amounts from EUR ', ({ EURamount, expectedPLN }) => {
    const result = EURtoPLN(EURamount, PLN);
    expect(result).toBe(expectedPLN);
  });
});
