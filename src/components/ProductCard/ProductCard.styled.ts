"use client"

import styled from "styled-components";

const Card = styled.article`
  display: flex;
  flex-direction: column;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  background: white;
`;

const ProductImage = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  flex: 1;
`;

const Brand = styled.span`
  font-size: 12px;
  color: #888;
  text-transform: uppercase;
`;

const Title = styled.h2`
  font-size: 16px;
  font-weight: 600;
  margin: 0;
`;

const Description = styled.p`
  font-size: 14px;
  color: #555;
  margin: 0;
  flex: 1;
`;

const PriceRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const OriginalPrice = styled.span<{ hasDiscount: boolean }>`
  font-size: 16px;
  font-weight: 700;
  text-decoration: ${({ hasDiscount }) =>
    hasDiscount ? "line-through" : "none"};
  color: ${({ hasDiscount }) => (hasDiscount ? "#aaa" : "#111")};
`;

const DiscountedPrice = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: #e53935;
`;

const PromotionBadge = styled.span`
  font-size: 12px;
  background: #e53935;
  color: white;
  padding: 2px 6px;
  border-radius: 4px;
`;
const AddToCartButton = styled.button`
  margin-top: auto;
  padding: 10px;
  background: #111;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background: #333;
  }

  &:disabled {
    background: #aaa;
    cursor: not-allowed;
  }
`;

export {
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
};
