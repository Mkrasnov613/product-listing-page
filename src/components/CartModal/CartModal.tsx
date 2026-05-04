"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import {
  Overlay,
  Drawer,
  DrawerHeader,
  DrawerTitle,
  ItemList,
  CartItem,
  ItemImage,
  ItemInfo,
  ItemBrand,
  ItemTitle,
  ItemPrice,
  QuantityControls,
  QuantityButton,
  QuantityCount,
  RemoveButton,
  EmptyMessage,
  DrawerFooter,
  TotalRow,
  TotalLabel,
  TotalPrice,
  ClearButton,
  PriceRow,
} from "./CartModal.styled";
import { CloseButton } from "../ui/CloseButton";
import { DeleteIcon } from "../icons/DeleteIcon/DeleteIcon";

interface CartModalProps {
  onClose: () => void;
}

export const CartModal = ({ onClose }: CartModalProps) => {
  const cart = useCart()!;
  const { state, addToCart, decrementQuantity, removeFromCart, clearCart } =
    cart;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const total = state.items.reduce((sum, { product, quantity }) => {
    const unitPrice = product.promotion
      ? Math.round(product.price * (1 - product.promotion.percentage / 100))
      : product.price;
    return sum + unitPrice * quantity;
  }, 0);

  return (
    <Overlay onClick={onClose}>
      <Drawer onClick={(e) => e.stopPropagation()}>
        <DrawerHeader>
          <DrawerTitle>Cart ({state.count})</DrawerTitle>
          <CloseButton onClick={onClose} aria-label="Close cart" />
        </DrawerHeader>

        <ItemList>
          {state.items.length === 0 ? (
            <EmptyMessage>Your cart is empty.</EmptyMessage>
          ) : (
            state.items.map(({ product, quantity }) => {
              const unitPrice = product.promotion
                ? Math.round(
                    product.price * (1 - product.promotion.percentage / 100),
                  )
                : product.price;
              return (
                <CartItem key={product.articleNumber}>
                  <ItemImage>
                    <Image
                      src={product.image.url}
                      alt={product.image.altText}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </ItemImage>
                  <ItemInfo>
                    <ItemBrand>{product.brandName}</ItemBrand>
                    <ItemTitle>{product.title}</ItemTitle>

                    <PriceRow>
                      <ItemPrice>${unitPrice}</ItemPrice>
                      <QuantityControls>
                        <QuantityButton
                          disabled={quantity <= 1}
                          onClick={() =>
                            decrementQuantity(product.articleNumber)
                          }
                          aria-label="Decrease quantity"
                        >
                          −
                        </QuantityButton>
                        <QuantityCount>{quantity}</QuantityCount>
                        <QuantityButton
                          onClick={() => addToCart(product)}
                          aria-label="Increase quantity"
                        >
                          +
                        </QuantityButton>
                      </QuantityControls>
                    </PriceRow>
                  </ItemInfo>

                  <RemoveButton
                    onClick={() => removeFromCart(product.articleNumber)}
                    aria-label="Remove item"
                  >
                    <DeleteIcon width={18} height={18} />
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
