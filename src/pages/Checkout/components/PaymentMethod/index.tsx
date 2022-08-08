import { CurrencyDollarSimple } from "phosphor-react";

import { ButtonPayment, PaymentContainer, PaymentWrapper } from "./styles";
import {
  dataTypePayment,
  PaymentType,
} from "../../../../utils/dataTypePayment";
import { InfoCard } from "../../../../components/InfoCard";

interface PaymentMethodProps {
  setPaymentSelected: React.Dispatch<
    React.SetStateAction<PaymentType | undefined>
  >;
  paymentSelected: PaymentType | undefined;
}

export function PaymentMethod({
  setPaymentSelected,
  paymentSelected,
}: PaymentMethodProps) {
  const handleFormPaymentSelected = (type: PaymentType) => {
    setPaymentSelected(type);
  };

  return (
    <PaymentContainer>
      <InfoCard
        description="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
        title="Pagamento"
        icon={CurrencyDollarSimple}
        iconColor="purple-400"
      />

      <PaymentWrapper>
        {dataTypePayment.map(({ type, id, icon: Icon }) => (
          <ButtonPayment
            onClick={() => handleFormPaymentSelected(type)}
            key={id}
            className={paymentSelected === type ? "selected" : ""}
          >
            <Icon size={16} />
            {type}
          </ButtonPayment>
        ))}
      </PaymentWrapper>
    </PaymentContainer>
  );
}
