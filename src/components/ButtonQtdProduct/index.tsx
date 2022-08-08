import { Minus, Plus } from "phosphor-react";
import { useCart } from "../../context/Cart";
import {
  ButtonMinus,
  ButtonPlus,
  ButtonQtdProductContainer,
  Value,
} from "./styles";

interface ButtonQtdProductProps {
  max?: number;
  productId: number;
}

export function ButtonQtdProduct({ max, productId }: ButtonQtdProductProps) {
  const { addProductToCart, removeProductOfCart, renderQtdOfProductSelected } =
    useCart();

  const amount = renderQtdOfProductSelected(productId, true) || 0;

  const disabledButtonMinus = amount <= 0 ? true : false;
  const disabledButtonLess = !!max ? (amount === max ? true : false) : false;

  return (
    <ButtonQtdProductContainer>
      <ButtonMinus
        disabled={disabledButtonMinus}
        onClick={() => removeProductOfCart(productId)}
      >
        <Minus />
      </ButtonMinus>
      <Value>{renderQtdOfProductSelected(productId)}</Value>
      <ButtonPlus
        disabled={disabledButtonLess}
        onClick={() => addProductToCart(productId, max)}
      >
        <Plus />
      </ButtonPlus>
    </ButtonQtdProductContainer>
  );
}
