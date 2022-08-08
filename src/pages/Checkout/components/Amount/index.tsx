import { VALUE_DELIVERY } from "../../../../constants";
import { useCart } from "../../../../context/Cart";
import { formattedCurrency } from "../../../../utils/formattedCurrency ";

import { ContainerAmount, WrapperAmount } from "./styles";

export function Amount() {
  const { totalAmountOfItems } = useCart();

  return (
    <ContainerAmount>
      <WrapperAmount>
        <span>Total de itens</span>
        <span>{formattedCurrency({ amount: totalAmountOfItems })}</span>
      </WrapperAmount>
      <WrapperAmount>
        <span>Entrega</span>
        <span>{formattedCurrency({ amount: VALUE_DELIVERY })}</span>
      </WrapperAmount>
      <WrapperAmount>
        <h2>Total</h2>
        <h2>
          {formattedCurrency({
            amount: totalAmountOfItems + VALUE_DELIVERY,
          })}
        </h2>
      </WrapperAmount>
    </ContainerAmount>
  );
}
