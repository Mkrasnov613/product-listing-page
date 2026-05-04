"use client";

import { useState } from "react";
import Image from "next/image";
import { Cart } from "../icons/Cart/Cart";
import {
  HeaderWrapper,
  Inner,
  LogoImage,
  CartButton,
  CartCount,
} from "./Header.styled";
import { useCart } from "@/context/CartContext";
import { CartModal } from "@/components/CartModal/CartModal";

export const Header = () => {
  const cart = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const count = cart?.state.count ?? 0;

  return (
    <>
      <HeaderWrapper>
        <Inner>
          <div />
          <LogoImage>
            <Image
              src="/images/logo.png"
              alt="Columbus shop"
              fill
              style={{ objectFit: "cover" }}
            />
          </LogoImage>
          <CartButton
            aria-label="Open cart"
            style={{ marginLeft: "auto" }}
            onClick={() => setIsCartOpen(true)}
          >
            <Cart width={24} height={24} />
            {count > 0 && <CartCount>{count}</CartCount>}
          </CartButton>
        </Inner>
      </HeaderWrapper>

      {isCartOpen && <CartModal onClose={() => setIsCartOpen(false)} />}
    </>
  );
};
