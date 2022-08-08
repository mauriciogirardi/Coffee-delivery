import { CurrencyDollarSimple, MapPinLine, Timer } from "phosphor-react";
import { useEffect, useState } from "react";
import successSvg from "../../assets/success.svg";
import { TagInfo } from "../../components/TagInfo";
import { useQuery } from "../../hooks/useQuery";
import {
  SuccessContainer,
  SuccessDescription,
  SuccessInfo,
  SuccessWrapper,
} from "./styles";

interface AddressData {
  city: string | null;
  number: string | null;
  street: string | null;
  payment: string | null;
  uf: string | null;
  neighborhood: string | null;
}

export function Success() {
  const query = useQuery();
  const [address, setAddress] = useState<AddressData>();

  useEffect(() => {
    setAddress({
      city: query.get("city"),
      number: query.get("number"),
      payment: query.get("payment"),
      neighborhood: query.get("neighborhood"),
      street: query.get("street"),
      uf: query.get("uf"),
    });
  }, []);

  const renderAddress = () => {
    return (
      <>
        <p>
          Entrega em <strong>{`${address?.street}, ${address?.number}`}</strong>
        </p>
        <p>{`${address?.neighborhood} - ${address?.city}, ${address?.uf}`}</p>
      </>
    );
  };

  const renderDeliveryTimer = () => {
    return (
      <>
        <p>Previsão de entrega</p>
        <strong>20 min - 30 min </strong>
      </>
    );
  };

  const renderTypeOfPayment = () => {
    return (
      <>
        <p>Pagamento na entrega</p>
        <strong>{address?.payment}</strong>
      </>
    );
  };

  return (
    <SuccessContainer>
      <SuccessInfo>
        <h1>Uhu! Pedido confirmado!</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </SuccessInfo>

      <SuccessWrapper>
        <SuccessDescription>
          <TagInfo
            title={renderAddress()}
            icon={MapPinLine}
            backgroundIcon="purple-400"
          />

          <TagInfo
            title={renderDeliveryTimer()}
            icon={Timer}
            backgroundIcon="yellow-500"
          />

          <TagInfo
            title={renderTypeOfPayment()}
            icon={CurrencyDollarSimple}
            backgroundIcon="yellow-900"
          />
        </SuccessDescription>

        <img
          src={successSvg}
          alt="Uma lambreta da cor roxa, com um homem pilotando ela"
        />
      </SuccessWrapper>
    </SuccessContainer>
  );
}
