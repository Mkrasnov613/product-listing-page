"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Product } from "@/types/api";
import {
  Overlay,
  Modal,
  ImageSection,
  PromotionBadge,
  InfoSection,
  Brand,
  Title,
  Description,
  PriceRow,
  OriginalPrice,
  DiscountedPrice,
  PromotionName,
  CloseButton,
  CTAButton,
  ModalFooter,
} from "./ProductModal.styled";
import { useIsMobile } from "@/hooks/useIsMobile";
import { AddToCart } from "../icons/AddToCart/AddToCart";
import { useCart } from "@/context/CartContext";
import { useSnackbar } from "@/context/SnackbarContext";

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export const ProductModal = ({ product, onClose }: ProductModalProps) => {
  const { image, title, description, brandName, price, promotion } = product;
  const cart = useCart();
  const { showSnackbar } = useSnackbar();
  const isMobile = useIsMobile();

  const handleAddToCart = async () => {
    await cart?.addToCart(product);
    showSnackbar(`${title} added to cart`);
    onClose();
  };

  const discountedPrice = promotion
    ? Math.round(price * (1 - promotion.percentage / 100))
    : null;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <Overlay onClick={onClose} isMobile={isMobile}>
      <Modal onClick={(e) => e.stopPropagation()} isMobile={isMobile}>
        <CloseButton onClick={onClose} aria-label="Close">
          ✕
        </CloseButton>

        <ImageSection>
          <Image
            src={image.url}
            alt={image.altText}
            fill
            style={{ objectFit: "cover" }}
          />
          {promotion && (
            <PromotionBadge isMobile={isMobile}>
              -{promotion.percentage}%
            </PromotionBadge>
          )}
        </ImageSection>

        <InfoSection>
          <Brand>{brandName}</Brand>
          <Title>{title}</Title>
          <Description>{description}</Description>

          <ModalFooter>
            <PriceRow>
              <OriginalPrice hasDiscount={!!promotion}>${price}</OriginalPrice>
              {discountedPrice && (
                <DiscountedPrice>${discountedPrice}</DiscountedPrice>
              )}
            </PriceRow>

            <CTAButton onClick={handleAddToCart}>
              Add to cart <AddToCart width={24} height={24} />
            </CTAButton>
          </ModalFooter>
        </InfoSection>
      </Modal>
    </Overlay>
  );
};
