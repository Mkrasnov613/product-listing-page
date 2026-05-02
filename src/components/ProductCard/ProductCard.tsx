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
  Footer,
  BuyButton,
} from "./ProductCard.styled";
import { AddToCart } from "../icons/AddToCart/AddToCart";

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
          fill
          style={{ objectFit: "cover" }}
        />
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
            <AddToCart width={24} height={24} />
        </Footer>
      </Body>
    </Card>
  );
}
