import { Trash } from "phosphor-react";

import { formattedCurrency } from "../../utils/formattedCurrency ";
import { ButtonQtdProduct } from "../ButtonQtdProduct";
import { useCart } from "../../context/Cart";
import { Button } from "../Button";

import {
  Amount,
  CardCoffeeSelectedContainer,
  CardCoffeeSelectedWrapper,
  Description,
} from "./styles";

interface CardCoffeeSelectedProps {
  product: {
    qtd: number;
    id: number;
    image: string;
    type: string[];
    name: string;
    description: string;
    amount: number;
    stock: number;
  };
}

export function CardCoffeeSelected({ product }: CardCoffeeSelectedProps) {
  const { removeProductsSelected } = useCart();

  return (
    <CardCoffeeSelectedContainer>
      <img src={product.image} width={64} />
      <CardCoffeeSelectedWrapper>
        <Description>
          <span>{product.name}</span>
          <p>{formattedCurrency({ amount: product.amount })}</p>
        </Description>

        <Amount>
          <ButtonQtdProduct productId={product.id} max={product.stock} />
          <Button
            onClick={() => removeProductsSelected(product.id)}
            icon={Trash}
            text="REMOVER"
            width={5.688}
            fontSize={0.75}
            iconSize={16}
            color="gray-700"
            background="gray-400"
            backgroundHover="gray-500"
            iconColor="purple-900"
            iconWeight="light"
          />
        </Amount>
      </CardCoffeeSelectedWrapper>
    </CardCoffeeSelectedContainer>
  );
}
