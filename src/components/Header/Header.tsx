"use client";

import Image from "next/image";
import { Cart } from "../icons/Cart/Cart";
import {
  HeaderWrapper,
  Inner,
  LogoImage,
  CartButton,
  CartCount,
} from "./Header.styled";

interface HeaderProps {
  cartCount?: number;
}

export const Header = ({ cartCount = 0 }: HeaderProps) => {
  return (
    <HeaderWrapper>
      <Inner>
        <div />
        <LogoImage>
          <Image src="/images/logo.png" alt="Columbus shop" fill style={{ objectFit: "cover" }} />
        </LogoImage>
        <CartButton aria-label="Open cart" style={{ marginLeft: "auto" }}>
          <Cart width={24} height={24} />
          {cartCount > 0 && <CartCount>{cartCount}</CartCount>}
        </CartButton>
      </Inner>
    </HeaderWrapper>
  );
};
