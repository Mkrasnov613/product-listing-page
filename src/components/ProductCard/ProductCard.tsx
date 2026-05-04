"use client";

import Image from "next/image";
import { Product } from "@/types/api";

import {
  Card,
  ProductImage,
  Body,
  Brand,
  Title,
  PriceRow,
  OriginalPrice,
  DiscountedPrice,
  PromotionBadge,
  Footer,
} from "./ProductCard.styled";

interface ProductCardProps {
  product: Product;
  onSelect: () => void;
}

export const ProductCard = ({ product, onSelect }: ProductCardProps) => {
  const { image, title, brandName, price, promotion } = product;

  const discountedPrice = promotion
    ? Math.round(price * (1 - promotion.percentage / 100))
    : null;

  return (
    <Card onClick={onSelect} style={{ cursor: "pointer" }}>
      <ProductImage>
        <Image
          src={image.url}
          alt={image.altText}
          fill
          style={{ objectFit: "cover" }}
        />
        {promotion && (
          <PromotionBadge>-{promotion?.percentage}%</PromotionBadge>
        )}
      </ProductImage>

      <Body>
        <Brand>{brandName}</Brand>
        <Title>{title}</Title>
        <Footer>
          <PriceRow>
            <OriginalPrice hasDiscount={!!promotion}>${price}</OriginalPrice>
            {discountedPrice && (
              <DiscountedPrice>${discountedPrice}</DiscountedPrice>
            )}
          </PriceRow>
        </Footer>
      </Body>
    </Card>
  );
};
