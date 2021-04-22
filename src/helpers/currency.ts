enum CurrencySymbols {
  ARS = '$',
  // other countrys currency simbols....
}

/**
 *  Transform the list of categories of the ML api to the format required by the Category interface
 *  @param currenci_id Country currency id;
 *  @return {string} Country currency symbol
 */
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

/**
 *  Receives a decimal number and returns it as an object with amount and decimal properties
 *  @param num decimal number
 *  @return formated object {amount, decimal}
 */
export const splitAmount = (num: number) => {
  const numStr = num.toFixed(2).toString();
  let [amount, decimal] = numStr.split('.');

  amount = amount.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  return {
    amount,
    decimal,
  };
};
