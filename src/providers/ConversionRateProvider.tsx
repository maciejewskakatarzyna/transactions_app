import React, { ReactNode, useEffect, useState } from 'react';
import axios from 'axios';

interface IConversionRateContext {
  conversionRate: number;
  handleSetConversionRate: (rate: number) => void;
  getConversionRate: () => void;
}

const initialConvRate = 4.5;

export const ConversionRateContext = React.createContext<IConversionRateContext | null>(null);

export const ConversionRateProvider = ({ children }: { children: ReactNode }) => {
  const [conversionRate, setConversionRate] = useState<number>(initialConvRate);

  const getConversionRate = () => {
    axios
      .get(`https://api.nbp.pl/api/exchangerates/rates/a/eur`)
      .then(response => {
        const res = response.data;
        const EurRate = res.rates[0].mid;
        const conRate = parseFloat(EurRate.toFixed(3));
        setConversionRate(conRate);
      })
      .catch(error => {
        console.log(error);
        setConversionRate(initialConvRate);
      });
  };

  useEffect(() => {
    getConversionRate();
  }, []);

  const handleSetConversionRate = (rate: number) => {
    setConversionRate(rate);
  };

  return (
    <ConversionRateContext.Provider
      value={{
        conversionRate,
        handleSetConversionRate,
        getConversionRate,
      }}
    >
      {children}
    </ConversionRateContext.Provider>
  );
};

export const useConversionRateContext = () => {
  const conversionRateContext = React.useContext(ConversionRateContext);
  if (!conversionRateContext) {
    throw new Error('Missing ConversionRateContext data!');
  }
  return conversionRateContext;
};
