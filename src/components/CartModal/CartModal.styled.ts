"use client";

import styled from "styled-components";
import { theme } from "@/theme";
import { altTextStyles } from "@/styles/mixins";
import { CloseButton as BaseCloseButton } from "@/components/ui/CloseButton";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: flex-end;
  z-index: 2000;
`;

export const Drawer = styled.div`
  position: relative;
  width: 100%;
  max-width: 420px;
  height: 100%;
  background: ${theme.colors.bg};
  display: flex;
  flex-direction: column;
  box-shadow: -8px 0 32px rgba(0, 0, 0, 0.15);

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const DrawerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${theme.spacing.lg};
  border-bottom: 1px solid ${theme.colors.border};
`;

export const DrawerTitle = styled.h2`
  font-family: ${theme.typography.fontFamilyHeading};
  font-size: ${theme.typography.fontSizeLarge};
  font-weight: ${theme.typography.fontWeightBold};
  color: ${theme.colors.textPrimary};
  margin: 0;
`;

export const ItemList = styled.ul`
  flex: 1;
  overflow-y: auto;
  list-style: none;
  padding: ${theme.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
`;

export const CartItem = styled.li`
  position: relative;
  display: flex;
  gap: ${theme.spacing.md};
  align-items: center;
  padding: ${theme.spacing.sm};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.md};
`;

export const ItemImage = styled.div`
  position: relative;
  width: 72px;
  height: 72px;
  flex-shrink: 0;
  border-radius: ${theme.borderRadius.sm};
  overflow: hidden;
  ${altTextStyles}
`;

export const ItemInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ItemBrand = styled.span`
  font-size: ${theme.typography.fontSizeSmall};
  color: ${theme.colors.textMuted};
  text-transform: uppercase;
`;

export const ItemTitle = styled.span`
  font-family: ${theme.typography.fontFamilyHeading};
  font-size: ${theme.typography.fontSizeBase};
  font-weight: ${theme.typography.fontWeightBold};
  max-width: 150px;
  color: ${theme.colors.textPrimary};
`;

export const ItemPrice = styled.span`
  font-size: ${theme.typography.fontSizeBase};
  font-weight: ${theme.typography.fontWeightSemibold};
  color: ${theme.colors.primary};
`;

export const PriceRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
`;

export const QuantityButton = styled.button`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.sm};
  font-size: 14px;
  color: ${theme.colors.textPrimary};
  cursor: pointer;
  line-height: 1;
  flex-shrink: 0;

  &:hover {
    background: ${theme.colors.bgDark};
  }
`;

export const QuantityCount = styled.span`
  min-width: 20px;
  text-align: center;
  font-size: ${theme.typography.fontSizeBase};
  font-weight: ${theme.typography.fontWeightBold};
  color: ${theme.colors.textPrimary};
`;

export const RemoveButton = styled.button`
  position: absolute;
  top: 4px;
  right: 4px;
  background: none;
  border: none;
  color: ${theme.colors.textMuted};
  cursor: pointer;
  padding: ${theme.spacing.xs};
  line-height: 1;
`;

export const EmptyMessage = styled.p`
  text-align: center;
  color: ${theme.colors.textMuted};
  font-family: ${theme.typography.fontFamilyBody};
  font-size: ${theme.typography.fontSizeLarge};
  margin-top: ${theme.spacing.xl};
`;

export const DrawerFooter = styled.div`
  padding: ${theme.spacing.lg};
  border-top: 1px solid ${theme.colors.border};
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
`;

export const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TotalLabel = styled.span`
  font-family: ${theme.typography.fontFamilyBody};
  font-size: ${theme.typography.fontSizeMedium};
  color: ${theme.colors.textMuted};
`;

export const TotalPrice = styled.span`
  font-family: ${theme.typography.fontFamilyHeading};
  font-size: ${theme.typography.fontSizeLarge};
  font-weight: ${theme.typography.fontWeightBold};
  color: ${theme.colors.textPrimary};
`;

export const ClearButton = styled.button`
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  background: none;
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.sm};
  font-family: ${theme.typography.fontFamilyBody};
  font-size: ${theme.typography.fontSizeBase};
  color: ${theme.colors.textMuted};
  cursor: pointer;

  &:hover {
    border-color: #e53935;
    color: #e53935;
  }
`;
