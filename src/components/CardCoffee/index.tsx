import { formattedCurrency } from "../../utils/formattedCurrency ";
import { ButtonQtdProduct } from "../ButtonQtdProduct";
import {
  CardCoffeeContainer,
  Description,
  Price,
  Title,
  TypeCoffee,
  Wrapper,
} from "./styles";

import { dataProducts } from "../../mock/products-mocks";
import { useCart } from "../../context/Cart";
import { ShoppingCart, Trash } from "phosphor-react";
import { Button } from "../Button";

interface CardCoffeeProps {
  product: {
    id: number;
    image: string;
    type: string[];
    name: string;
    description: string;
    amount: number;
    stock: number;
  };
}

export function CardCoffee({ product }: CardCoffeeProps) {
  const {
    addProductToCart,
    renderQtdOfProductSelected,
    removeProductsSelected,
  } = useCart();

  const amount = renderQtdOfProductSelected(product.id, true) || 0;
  const renderButtonClearCart = amount > 0 ? true : false;

  const renderTypeCoffee = () => {
    return (
      <TypeCoffee>
        {product.type?.map((type, index) => (
          <span key={index}>{type}</span>
        ))}
      </TypeCoffee>
    );
  };

  return (
    <CardCoffeeContainer>
      <img src={product.image} alt="Imagem de uma xícara com cafe" />

      {product.type.length && renderTypeCoffee()}

      <Title>{product.name}</Title>
      <Description>{product.description}</Description>

      <Wrapper>
        <Price>
          <span>R$</span>
          {formattedCurrency({ amount: product.amount, showCurrency: false })}
        </Price>
        <ButtonQtdProduct max={product.stock} productId={product.id} />

        {renderButtonClearCart ? (
          <Button
            onClick={() => removeProductsSelected(product.id)}
            icon={Trash}
            background="red-500"
            backgroundHover="red-700"
          />
        ) : (
          <Button
            onClick={() => addProductToCart(product.id)}
            icon={ShoppingCart}
            background="purple-400"
            backgroundHover="purple-900"
          />
        )}
      </Wrapper>
    </CardCoffeeContainer>
  );
}
