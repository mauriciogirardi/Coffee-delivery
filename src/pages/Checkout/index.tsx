import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCartSimple } from "phosphor-react";

import { CardCoffeeSelected } from "../../components/CardCoffeeSelected";
import { useCart } from "../../context/Cart";

import {
  AutoOverflow,
  ButtonCheckout,
  CheckoutContainer,
  FormWrapper,
  Order,
  Title,
  WarningContent,
} from "./styles";
import { DataAddress, FormAddress } from "./components/FormAddress";
import { parseObjToQueryString } from "../../utils/parseObjToQueryString";
import { PaymentMethod } from "./components/PaymentMethod";
import { PaymentType } from "../../utils/dataTypePayment";
import { Amount } from "./components/Amount";

// https://viacep.com.br/ws/89240000/json/

const initialAddress: DataAddress = {
  zip: "",
  street: "",
  number: "",
  complement: "",
  neighborhood: "",
  city: "",
  uf: "",
};

export function Checkout() {
  const navigate = useNavigate();
  const [address, setAddress] = useState(initialAddress);
  const { productsSelectedCart, productsCart, removerAllCart } = useCart();
  const [paymentSelected, setPaymentSelected] = useState<PaymentType>();

  const isFormFilled = () => {
    const copyAddress = { ...address };
    delete copyAddress.complement;
    return !Object.values(copyAddress).every(Boolean);
  };

  const onSubmit = () => {
    const order = {
      ...address,
      payment: paymentSelected,
      products: [...productsSelectedCart],
    };

    console.log("PEDIDO REALIZADO: ", order);

    const query = parseObjToQueryString({
      ...address,
      payment: paymentSelected,
    });

    navigate(`/checkout/success/address?${query}`);
    removerAllCart();
  };

  return (
    <CheckoutContainer>
      {productsCart.length ? (
        <>
          <FormWrapper>
            <Title>Complete seu pedido</Title>

            <FormAddress address={address} setAddress={setAddress} />
            <PaymentMethod
              paymentSelected={paymentSelected}
              setPaymentSelected={setPaymentSelected}
            />
          </FormWrapper>

          <Order>
            <Title>Cafés selecionados</Title>
            <AutoOverflow>
              {productsSelectedCart &&
                productsSelectedCart.map((product) => (
                  <CardCoffeeSelected key={product.id} product={product} />
                ))}
            </AutoOverflow>

            <Amount />

            <ButtonCheckout
              disabled={isFormFilled() || !paymentSelected}
              onClick={onSubmit}
            >
              confirmar pedido
            </ButtonCheckout>
          </Order>
        </>
      ) : (
        <WarningContent>
          <h1>Você não tem nenhuma compra no seu carrinho!</h1>
          <ShoppingCartSimple />
        </WarningContent>
      )}
    </CheckoutContainer>
  );
}
