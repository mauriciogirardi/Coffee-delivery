interface FormattedCurrencyProps {
  amount: number;
  showCurrency?: boolean;
}

export const formattedCurrency = ({
  amount,
  showCurrency = true,
}: FormattedCurrencyProps): string => {
  const style = showCurrency ? { style: "currency" } : {};
  return amount.toLocaleString("pt-br", {
    ...style,
    currency: "BRL",
    minimumFractionDigits: 2,
  });
};
