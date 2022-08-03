import { Logo } from "./Logo";
import { MapPin, ShoppingCart } from "phosphor-react";

import {
  BagButton,
  HeaderContainer,
  Location,
  TotalItemBag,
  Wrapper,
} from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <Logo />

      <Wrapper>
        <Location>
          <MapPin size={22} weight="fill" />
          São Francisco do Sul
        </Location>

        <BagButton>
          <ShoppingCart size={22} weight="fill" />
          <TotalItemBag>3</TotalItemBag>
        </BagButton>
      </Wrapper>
    </HeaderContainer>
  );
}
