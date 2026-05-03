"use client";

import { theme } from "@/theme";
import styled from "styled-components";

const Card = styled.article`
  display: flex;
  flex-direction: column;

  height: 100%;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  max-width: 234px;
  background: ${theme.colors.bg};
  box-shadow: ${theme.shadows.card};
`;

const ProductImage = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 10px 10px 0px;
  flex: 1;
`;

const Brand = styled.span`
  font-size: 12px;
  letter-spacing: 0.6px;
  color: ${theme.colors.textMuted};
  text-transform: uppercase;
`;

const Title = styled.h2`
  font-weight: ${theme.typography.fontWeightBold};
  font-family: ${theme.typography.fontFamilyHeading};
  color: ${theme.colors.textPrimary};
  font-size: 16px;
  margin-bottom: 6px;
  flex: 1;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding-bottom: ${theme.spacing.sm};
`;

const PriceRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const OriginalPrice = styled.span<{ hasDiscount: boolean }>`
  font-size: ${theme.typography.fontSizeMedium};
  font-weight: 700;
  text-decoration: ${({ hasDiscount }) =>
    hasDiscount ? "line-through" : "none"};
  color: ${({ hasDiscount }) =>
    hasDiscount ? theme.colors.textMuted : theme.colors.textPrimary};
`;

const DiscountedPrice = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: ${theme.colors.textPrimary};
`;

const PromotionBadge = styled.span`
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 100;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 700;
  color: ${theme.colors.highlight};
  background: ${theme.colors.primary};
  border-radius: 50%;
`;

export {
  Card,
  ProductImage,
  Body,
  Brand,
  Title,
  Footer,
  PriceRow,
  OriginalPrice,
  DiscountedPrice,
  PromotionBadge,
};
