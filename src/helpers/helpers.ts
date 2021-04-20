export const splitAmount = (num: number) => {
  const numStr = num.toFixed(2).toString();
  let [amount, decimal] = numStr.split('.');

  return {
    amount,
    decimal,
  };
};
