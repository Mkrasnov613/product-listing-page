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
} from "./ProductModal.styled";

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export const ProductModal = ({ product, onClose }: ProductModalProps) => {
  const { image, title, description, brandName, price, promotion } = product;

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
    <Overlay onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose} aria-label="Close">✕</CloseButton>

        <ImageSection>
          <Image
            src={image.url}
            alt={image.altText}
            fill
            style={{ objectFit: "cover" }}
          />
          {promotion && (
            <PromotionBadge>-{promotion.percentage}%</PromotionBadge>
          )}
        </ImageSection>

        <InfoSection>
          <Brand>{brandName}</Brand>
          <Title>{title}</Title>
          <Description>{description}</Description>

          <PriceRow>
            <OriginalPrice hasDiscount={!!promotion}>${price}</OriginalPrice>
            {discountedPrice && (
              <DiscountedPrice>${discountedPrice}</DiscountedPrice>
            )}
          </PriceRow>
        </InfoSection>
      </Modal>
    </Overlay>
  );
};
