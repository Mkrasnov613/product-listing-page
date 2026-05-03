"use client";

import styled from "styled-components";
import { theme } from "@/theme";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: ${theme.spacing.lg};
`;

export const Modal = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  max-width: 860px;
  max-height: 90vh;
  background: ${theme.colors.bg};
  border-radius: ${theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.25);
`;

export const ImageSection = styled.div`
  position: relative;
  flex: 0 0 45%;
  min-height: 520px;
`;

export const PromotionBadge = styled.span`
  position: absolute;
  top: ${theme.spacing.sm};
  right: ${theme.spacing.sm};
  z-index: 1;
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: ${theme.typography.fontWeightBold};
  background: ${theme.colors.primary};
  color: ${theme.colors.highlight};
  border-radius: 50%;
`;

export const InfoSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
  padding: ${theme.spacing.xl};
  overflow-y: auto;
`;

export const Brand = styled.span`
  font-size: ${theme.typography.fontSizeSmall};
  font-family: ${theme.typography.fontFamilyBody};
  color: ${theme.colors.textMuted};
  text-transform: uppercase;
  letter-spacing: 0.8px;
`;

export const Title = styled.h2`
  font-family: ${theme.typography.fontFamilyHeading};
  font-size: 28px;
  font-weight: ${theme.typography.fontWeightBold};
  color: ${theme.colors.textPrimary};
  line-height: 1.2;
  margin: 0;
`;

export const Description = styled.p`
  font-family: ${theme.typography.fontFamilyBody};
  font-size: ${theme.typography.fontSizeBase};
  color: ${theme.colors.textMuted};
  line-height: 1.6;
  margin: 0;
  flex: 1;
`;

export const PriceRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: ${theme.spacing.sm};
`;

export const OriginalPrice = styled.span<{ hasDiscount: boolean }>`
  font-size: 22px;
  font-weight: ${theme.typography.fontWeightBold};
  color: ${({ hasDiscount }) =>
    hasDiscount ? theme.colors.textMuted : theme.colors.textPrimary};
  text-decoration: ${({ hasDiscount }) =>
    hasDiscount ? "line-through" : "none"};
`;

export const DiscountedPrice = styled.span`
  font-size: 26px;
  font-weight: ${theme.typography.fontWeightBold};
  color: ${theme.colors.accent};
`;

export const PromotionName = styled.span`
  font-size: ${theme.typography.fontSizeSmall};
  background: ${theme.colors.primary};
  color: ${theme.colors.highlight};
  padding: 2px 8px;
  border-radius: ${theme.borderRadius.sm};
`;

export const CloseButton = styled.button`
  position: absolute;
  top: ${theme.spacing.md};
  right: ${theme.spacing.md};
  z-index: 10;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.bg};
  border: 1px solid ${theme.colors.border};
  border-radius: 50%;
  cursor: pointer;
  font-size: 18px;
  color: ${theme.colors.textPrimary};
  line-height: 1;

  &:hover {
    background: ${theme.colors.bgDark};
  }
`;
