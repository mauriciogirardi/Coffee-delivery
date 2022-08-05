import { BagSimple, Coffee, Package, Timer } from "phosphor-react";

import imageSvg from "../../assets/cup-coffee.svg";

import {
  Banner,
  Center,
  ContainerHome,
  Information,
  ProductsContainer,
  Title,
  Wrapper,
} from "./styles";
import { CardCoffee } from "../../components/CardCoffee";
import { TagInfo } from "../../components/TagInfo";
import { Header } from "../../components/Header";

import { dataProducts } from "../../mock/products-mocks";

export function Home() {
  return (
    <>
      <Header />

      <Banner>
        <Center>
          <Wrapper>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>

            <Information>
              <TagInfo
                title="Compra simples e segura"
                icon={BagSimple}
                backgroundIcon="yellow-900"
              />
              <TagInfo
                title="Entrega rápida e rastreada"
                icon={Timer}
                backgroundIcon="yellow-500"
              />
              <TagInfo
                title="Embalagem mantém o café intacto"
                icon={Package}
                backgroundIcon="gray-700"
              />
              <TagInfo
                title="O café chega fresquinho até você"
                icon={Coffee}
                backgroundIcon="purple-900"
              />
            </Information>
          </Wrapper>

          <img
            src={imageSvg}
            alt="Copo de café, com uns grões de café ao redor do copo"
          />
        </Center>
      </Banner>

      <ContainerHome>
        <Title>Nossos cafés</Title>
        <ProductsContainer>
          {dataProducts.map((product) => (
            <CardCoffee
              key={product.id}
              description={product.description}
              name={product.name}
              amount={product.price}
              qtd={product.qtd}
              type={product.type}
              image={product.image}
            />
          ))}
        </ProductsContainer>
      </ContainerHome>
    </>
  );
}
