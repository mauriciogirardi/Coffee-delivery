import { Bank, CreditCard, IconProps, Money } from "phosphor-react";

export enum PaymentType {
  CREDIT = "Cartão de Crédito",
  DEBIT = "Cartão de Débito",
  MONEY = "Dinheiro",
}

interface DataTypePaymentProps {
  id: number;
  type: PaymentType;
  icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
}

export const dataTypePayment: DataTypePaymentProps[] = [
  {
    id: 0,
    type: PaymentType.CREDIT,
    icon: CreditCard,
  },
  {
    id: 1,
    type: PaymentType.DEBIT,
    icon: Bank,
  },
  {
    id: 2,
    type: PaymentType.MONEY,
    icon: Money,
  },
];
