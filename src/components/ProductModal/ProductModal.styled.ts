"use client";

import styled from "styled-components";
import { theme } from "@/theme";
import { altTextStyles } from "@/styles/mixins";
import { CloseButton as BaseCloseButton } from "@/components/ui/CloseButton";

const Overlay = styled.div<{ isMobile: boolean }>`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: ${({ isMobile }) => (isMobile ? "0px" : theme.spacing.lg)};
`;

const Modal = styled.div<{ isMobile: boolean }>`
  position: relative;
  display: flex;
  flex-direction: ${({ isMobile }) => (isMobile ? "column" : "row")};
  width: 100%;
  max-width: 860px;
  max-height: 90vh;
  background: ${theme.colors.bg};
  border-radius: ${theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.25);
`;

const ImageSection = styled.div`
  position: relative;
  flex: 0 0 45%;
  min-height: 520px;
  ${altTextStyles}

  @media (max-width: 425px) {
    flex: none;
    height: 240px;
    min-height: unset;
  }
`;

const InfoSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
  padding: ${theme.spacing.xl};
  overflow-y: auto;
`;

const Brand = styled.span`
  font-size: ${theme.typography.fontSizeMedium};
  font-family: ${theme.typography.fontFamilyHeading};
  color: ${theme.colors.textMuted};
  text-transform: uppercase;
  letter-spacing: 0.8px;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: ${theme.typography.fontWeightBold};
  color: ${theme.colors.textPrimary};
  line-height: 1.2;
  margin: 0;
`;

const Description = styled.p`
  font-family: ${theme.typography.fontFamilyBody};
  font-size: ${theme.typography.fontSizeBase};
  color: ${theme.colors.textMuted};
  line-height: 1.6;
  margin: 0;
  flex: 1;
`;

const PriceRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: ${theme.spacing.sm};
`;

const OriginalPrice = styled.span<{ hasDiscount: boolean }>`
  font-size: 22px;
  font-weight: ${theme.typography.fontWeightBold};
  color: ${({ hasDiscount }) =>
    hasDiscount ? theme.colors.textMuted : theme.colors.textPrimary};
  text-decoration: ${({ hasDiscount }) =>
    hasDiscount ? "line-through" : "none"};
`;

const DiscountedPrice = styled.span`
  font-size: 26px;
  font-weight: ${theme.typography.fontWeightBold};
  color: ${theme.colors.accent};
`;

const PromotionName = styled.span`
  font-size: ${theme.typography.fontSizeSmall};
  background: ${theme.colors.primary};
  color: ${theme.colors.highlight};
  padding: 8px 12px;
  max-width: 160px;
  border-radius: ${theme.borderRadius.md};
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  gap: 10px;  
`;

const CTAButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.bgDark};
  color: ${theme.colors.primary};
  padding: 10px 16px;
  border: none;
  gap: 4px;
  border: 1px solid ${theme.colors.border};
  font-weigth: ${theme.typography.fontWeightBold};
  border-radius: ${theme.borderRadius.md};
  cursor: pointer;

  &:hover {
  background-color: ${theme.colors.bg}
`;

export {
  Overlay,
  Modal,
  ImageSection,
  InfoSection,
  Brand,
  Title,
  Description,
  PriceRow,
  OriginalPrice,
  DiscountedPrice,
  PromotionName,
  CTAButton,
  ModalFooter,
};
