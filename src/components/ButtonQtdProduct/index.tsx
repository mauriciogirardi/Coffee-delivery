import { Minus, Plus } from "phosphor-react";
import {
  ButtonMinus,
  ButtonPlus,
  ButtonQtdProductContainer,
  Value,
} from "./styles";

export function ButtonQtdProduct() {
  return (
    <ButtonQtdProductContainer>
      <ButtonMinus>
        <Minus />
      </ButtonMinus>
      <Value>50</Value>
      <ButtonPlus>
        <Plus />
      </ButtonPlus>
    </ButtonQtdProductContainer>
  );
}
