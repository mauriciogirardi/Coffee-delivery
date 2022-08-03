export const formattedCurrency = (value: number): string => {
  return value.toLocaleString("pt-br", {
    //style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });
};
