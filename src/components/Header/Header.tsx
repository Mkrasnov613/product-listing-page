"use client";

import { Cart } from "../icons/Cart/Cart";
import { HeaderWrapper, Inner, Logo, CartButton, CartCount } from "./Header.styled";

interface HeaderProps {
  cartCount?: number;
}

export const Header = ({ cartCount = 0 }: HeaderProps) => {
  return (
    <HeaderWrapper>
      <Inner>
        <Logo>Columbus shop</Logo>
        <CartButton aria-label="Open cart">
          <Cart width={24} height={24} />
          {cartCount > 0 && <CartCount>{cartCount}</CartCount>}
        </CartButton>
      </Inner>
    </HeaderWrapper>
  );
};
