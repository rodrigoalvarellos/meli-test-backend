export const splitAmount = (num: number) => {
  const numStr = num.toFixed(2).toString();
  let [amount, decimal] = numStr.split('.');

  amount = amount.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  return {
    amount,
    decimal,
  };
};
