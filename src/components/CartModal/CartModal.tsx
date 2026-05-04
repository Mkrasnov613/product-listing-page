"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import {
  Overlay,
  Drawer,
  DrawerHeader,
  DrawerTitle,
  CloseButton,
  ItemList,
  CartItem,
  ItemImage,
  ItemInfo,
  ItemBrand,
  ItemTitle,
  ItemPrice,
  RemoveButton,
  EmptyMessage,
  DrawerFooter,
  TotalRow,
  TotalLabel,
  TotalPrice,
  ClearButton,
} from "./CartModal.styled";

interface CartModalProps {
  onClose: () => void;
}

export const CartModal = ({ onClose }: CartModalProps) => {
  const cart = useCart()!;
  const { state, removeFromCart, clearCart } = cart;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const total = state.items.reduce((sum, item) => {
    const finalPrice = item.promotion
      ? Math.round(item.price * (1 - item.promotion.percentage / 100))
      : item.price;
    return sum + finalPrice;
  }, 0);

  return (
    <Overlay onClick={onClose}>
      <Drawer onClick={(e) => e.stopPropagation()}>
        <DrawerHeader>
          <DrawerTitle>Cart ({state.count})</DrawerTitle>
          <CloseButton onClick={onClose} aria-label="Close cart">✕</CloseButton>
        </DrawerHeader>

        <ItemList>
          {state.items.length === 0 ? (
            <EmptyMessage>Your cart is empty.</EmptyMessage>
          ) : (
            state.items.map((item, index) => {
              const finalPrice = item.promotion
                ? Math.round(item.price * (1 - item.promotion.percentage / 100))
                : item.price;
              return (
                <CartItem key={`${item.articleNumber}-${index}`}>
                  <ItemImage>
                    <Image
                      src={item.image.url}
                      alt={item.image.altText}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </ItemImage>
                  <ItemInfo>
                    <ItemBrand>{item.brandName}</ItemBrand>
                    <ItemTitle>{item.title}</ItemTitle>
                    <ItemPrice>${finalPrice}</ItemPrice>
                  </ItemInfo>
                  <RemoveButton
                    onClick={() => removeFromCart(item.articleNumber)}
                    aria-label="Remove item"
                  >
                    ✕
                  </RemoveButton>
                </CartItem>
              );
            })
          )}
        </ItemList>

        {state.items.length > 0 && (
          <DrawerFooter>
            <TotalRow>
              <TotalLabel>Total</TotalLabel>
              <TotalPrice>${total}</TotalPrice>
            </TotalRow>
            <ClearButton onClick={clearCart}>Clear cart</ClearButton>
          </DrawerFooter>
        )}
      </Drawer>
    </Overlay>
  );
};
