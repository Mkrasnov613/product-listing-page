"use client";

import Image from "next/image";
import { Product } from "@/types/api";

import {
  Card,
  ProductImage,
  Body,
  Brand,
  Title,
  Description,
  PriceRow,
  OriginalPrice,
  DiscountedPrice,
  PromotionBadge,
  AddToCartButton,
} from "./ProductCard.styled";

interface ProductCardProps {
  product: Product;
  onAddToCart: () => void;
}

export default function ProductCard({
  product,
  onAddToCart,
}: ProductCardProps) {
  const { image, title, description, brandName, price, promotion } = product;

  const discountedPrice = promotion
    ? Math.round(price * (1 - promotion.percentage / 100))
    : null;

  return (
    <Card>
      <ProductImage>
        <Image
          src={image.url}
          alt={image.altText}
          width={502}
          height={502}
          style={{ objectFit: "cover", color: "black" }}
        />
      </ProductImage>

      <Body>
        <Brand>{brandName}</Brand>
        <Title>{title}</Title>
        <Description>{description}</Description>

        <PriceRow>
          <OriginalPrice hasDiscount={!!promotion}>${price}</OriginalPrice>
          {discountedPrice && (
            <DiscountedPrice>${discountedPrice}</DiscountedPrice>
          )}
          {promotion && (
            <PromotionBadge>
              {promotion.name} -{promotion.percentage}%
            </PromotionBadge>
          )}
        </PriceRow>

        <AddToCartButton onClick={() => onAddToCart()}>
          Add to cart
        </AddToCartButton>
      </Body>
    </Card>
  );
}
