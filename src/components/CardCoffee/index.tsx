import { formattedCurrency } from "../../utils/formattedCurrency ";
import { ButtonQtdProduct } from "../ButtonQtdProduct";
import { ButtonShoppingCar } from "../ButtonShoppingCar";
import {
  CardCoffeeContainer,
  Description,
  Price,
  Title,
  TypeCoffee,
  Wrapper,
} from "./styles";

interface CardCoffeeProps {
  image: string;
  type: string[];
  name: string;
  description: string;
  amount: number;
  qtd: number;
}

export function CardCoffee({
  description,
  image,
  name,
  amount,
  qtd,
  type,
}: CardCoffeeProps) {
  const renderTypeCoffee = () => {
    return (
      <TypeCoffee>
        {type?.map((type, index) => (
          <span key={index}>{type}</span>
        ))}
      </TypeCoffee>
    );
  };

  return (
    <CardCoffeeContainer>
      <img src={image} alt="Imagem de uma xícara com cafe" />

      {type.length && renderTypeCoffee()}

      <Title>{name}</Title>
      <Description>{description}</Description>

      <Wrapper>
        <Price>
          <span>R$</span>
          {formattedCurrency({ amount, showCurrency: false })}
        </Price>
        <ButtonQtdProduct />
        <ButtonShoppingCar />
      </Wrapper>
    </CardCoffeeContainer>
  );
}
