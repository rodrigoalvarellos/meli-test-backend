enum CurrencySymbols {
  ARS = '$',
  // other countrys currency simbols....
}

export const setCurrencySymbol = (currency_id: string): string => {
  let symbol: string;

  switch (currency_id) {
    case CurrencySymbols.ARS:
      symbol = CurrencySymbols.ARS;
      break;    
    default:
      symbol = '$';
      break;
  }

  return symbol;
};
