import {
  Amount,
  ButtonRemove,
  CardCoffeeSelectedContainer,
  CardCoffeeSelectedWrapper,
  Description,
} from "./styles";
import { ButtonQtdProduct } from "../ButtonQtdProduct";
import { Trash } from "phosphor-react";
import { formattedCurrency } from "../../utils/formattedCurrency ";

interface CardCoffeeSelectedProps {
  image: string;
  title: string;
  amount: number;
}

export function CardCoffeeSelected({
  amount,
  image,
  title,
}: CardCoffeeSelectedProps) {
  return (
    <CardCoffeeSelectedContainer>
      <img src={image} width={64} />
      <CardCoffeeSelectedWrapper>
        <Description>
          <span>{title}</span>
          <p>{formattedCurrency({ amount })}</p>
        </Description>
        <Amount>
          <ButtonQtdProduct />
          <ButtonRemove>
            <Trash size={16} />
            remover
          </ButtonRemove>
        </Amount>
      </CardCoffeeSelectedWrapper>
    </CardCoffeeSelectedContainer>
  );
}
