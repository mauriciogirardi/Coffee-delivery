import {
  Bank,
  CreditCard,
  CurrencyDollarSimple,
  MapPinLine,
  Money,
} from "phosphor-react";
import { CardCoffeeSelected } from "../../components/CardCoffeeSelected";
import { InfoCard } from "../../components/InfoCard";
import { Input } from "../../components/Input";
import {
  AutoOverflow,
  ButtonCheckout,
  ButtonPayment,
  CheckoutContainer,
  DescriptionOrder,
  Form,
  FormWrapper,
  Order,
  Payment,
  Title,
  Wrapper,
  WrapperDescriptionOrder,
  WrapperForm,
} from "./styles";

import imgCoffee from "../../mock/coffee-svgs/expresso-tradicional.svg";
import { formattedCurrency } from "../../utils/formattedCurrency ";

export function Checkout() {
  return (
    <CheckoutContainer>
      <FormWrapper>
        <Title>Complete seu pedido</Title>

        <Form>
          <InfoCard
            description="Informe o endereço onde deseja receber seu pedido"
            title="Endereço de Entrega"
            icon={MapPinLine}
            iconColor="yellow-500"
          />

          <WrapperForm>
            <Input className="div1" placeholder="CEP" />
            <Input className="div2" placeholder="Rua" />
            <Input placeholder="Número" />
            <Input placeholder="Complemento" isOptional />
            <Input placeholder="Bairro" />
            <Input placeholder="Cidade" />
            <Input placeholder="UF" />
          </WrapperForm>
        </Form>

        <Payment>
          <InfoCard
            description="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
            title="Pagamento"
            icon={CurrencyDollarSimple}
            iconColor="purple-400"
          />

          <Wrapper>
            <ButtonPayment className="selected">
              <CreditCard size={16} />
              Cartão de crédito
            </ButtonPayment>
            <ButtonPayment>
              <Bank size={16} />
              cartão de débito
            </ButtonPayment>
            <ButtonPayment>
              <Money size={16} />
              dinheiro
            </ButtonPayment>
          </Wrapper>
        </Payment>
      </FormWrapper>

      <Order>
        <Title>Cafés selecionados</Title>

        <AutoOverflow>
          <CardCoffeeSelected
            image={imgCoffee}
            title="Expresso Com Leite"
            amount={8.8}
          />
        </AutoOverflow>

        <DescriptionOrder>
          <WrapperDescriptionOrder>
            <span>Total de itens</span>
            <span>{formattedCurrency({ amount: 26.3 })}</span>
          </WrapperDescriptionOrder>
          <WrapperDescriptionOrder>
            <span>Entrega</span>
            <span>{formattedCurrency({ amount: 26.3 })}</span>
          </WrapperDescriptionOrder>
          <WrapperDescriptionOrder>
            <h2>Total</h2>
            <h2>{formattedCurrency({ amount: 26.3 })}</h2>
          </WrapperDescriptionOrder>
        </DescriptionOrder>

        <ButtonCheckout>confirmar pedido</ButtonCheckout>
      </Order>
    </CheckoutContainer>
  );
}
