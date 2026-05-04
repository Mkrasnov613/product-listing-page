"use client";

import { useState } from "react";
import Image from "next/image";
import { Cart } from "../icons/Cart/Cart";
import {
  HeaderWrapper,
  LogoImage,
  CartButton,
  CartCount,
} from "./Header.styled";
import { useCart } from "@/context/CartContext";
import { CartModal } from "@/components/CartModal/CartModal";
import { useIsMobile } from "@/hooks/useIsMobile";

export const Header = () => {
  const cart = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const count = cart?.state.count ?? 0;
  const isMobile = useIsMobile();

  return (
    <>
      <HeaderWrapper>
        <LogoImage isMobile={isMobile}>
          <Image
            src="/images/columbus-logotype.svg"
            alt="Columbus shop"
            fill
            style={{ objectFit: "contain", objectPosition: "left center" }}
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
      </HeaderWrapper>

      {isCartOpen && <CartModal onClose={() => setIsCartOpen(false)} />}
    </>
  );
};
