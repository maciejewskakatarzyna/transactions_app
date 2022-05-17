export const EURtoPLN = (eur: number, pln: number): number => {
  return parseFloat((eur / pln).toFixed(2));
};
