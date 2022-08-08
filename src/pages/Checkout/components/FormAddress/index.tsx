import { ChangeEvent, useState } from "react";
import { MapPinLine } from "phosphor-react";

import { maskBRZip } from "../../../../utils/maskBRZip";
import { InfoCard } from "../../../../components/InfoCard";
import { Input } from "../Input";

import { Form, WrapperForm } from "./styles";

export interface DataAddress {
  zip: string;
  street: string;
  number: string;
  complement?: string;
  neighborhood: string;
  city: string;
  uf: string;
}

interface FormCheckoutProps {
  address: DataAddress;
  setAddress: React.Dispatch<React.SetStateAction<DataAddress>>;
}

export function FormAddress({ address, setAddress }: FormCheckoutProps) {
  const onChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = evt.target;

    setAddress((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Form>
      <InfoCard
        description="Informe o endereço onde deseja receber seu pedido"
        title="Endereço de Entrega"
        icon={MapPinLine}
        iconColor="yellow-500"
      />

      <WrapperForm>
        <Input
          placeholder="CEP"
          value={maskBRZip(address.zip)}
          onChange={onChange}
          name="zip"
        />
        <Input placeholder="Rua" onChange={onChange} name="street" />
        <Input
          type="number"
          placeholder="Número"
          onChange={onChange}
          value={address.number}
          name="number"
        />
        <Input
          placeholder="Complemento"
          onChange={onChange}
          value={address.complement}
          isOptional
          name="complement"
        />
        <Input
          placeholder="Bairro"
          onChange={onChange}
          value={address.neighborhood}
          name="neighborhood"
        />
        <Input
          placeholder="Cidade"
          onChange={onChange}
          value={address.city}
          name="city"
        />
        <Input
          placeholder="UF"
          onChange={onChange}
          value={address.uf}
          name="uf"
        />
      </WrapperForm>
    </Form>
  );
}
