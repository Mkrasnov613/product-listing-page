"use client";

import styled from "styled-components";
import { theme } from "@/theme";

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

export const CloseButton = styled.button`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: 1px solid ${theme.colors.border};
  border-radius: 50%;
  font-size: 16px;
  color: ${theme.colors.textPrimary};
  cursor: pointer;

  &:hover {
    background: ${theme.colors.bgDark};
  }
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
  color: ${theme.colors.textPrimary};
`;

export const ItemPrice = styled.span`
  font-size: ${theme.typography.fontSizeBase};
  font-weight: ${theme.typography.fontWeightSemibold};
  color: ${theme.colors.primary};
`;

export const RemoveButton = styled.button`
  background: none;
  border: none;
  color: ${theme.colors.textMuted};
  cursor: pointer;
  font-size: 18px;
  padding: ${theme.spacing.xs};
  line-height: 1;

  &:hover {
    color: #e53935;
  }
`;

export const EmptyMessage = styled.p`
  text-align: center;
  color: ${theme.colors.textMuted};
  font-family: ${theme.typography.fontFamilyBody};
  font-size: ${theme.typography.fontSizeMedium};
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
