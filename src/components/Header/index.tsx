import { Logo } from "./Logo";
import { MapPin, ShoppingCart } from "phosphor-react";

import {
  BagButtonLink,
  CenterHeader,
  HeaderContainer,
  Location,
  TotalItemBag,
  Wrapper,
} from "./styles";
import { useCart } from "../../context/Cart";

export function Header() {
  const { productsCart } = useCart();

  return (
    <HeaderContainer>
      <CenterHeader>
        <Logo />

        <Wrapper>
          <Location>
            <MapPin size={22} weight="fill" />
            São Francisco do Sul
          </Location>

          <BagButtonLink to="/checkout">
            <ShoppingCart size={22} weight="fill" />
            {productsCart.length > 0 && (
              <TotalItemBag>{productsCart.length}</TotalItemBag>
            )}
          </BagButtonLink>
        </Wrapper>
      </CenterHeader>
    </HeaderContainer>
  );
}
