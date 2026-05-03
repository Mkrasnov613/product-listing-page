"use client";

import styled from "styled-components";
import { theme } from "@/theme";

export const Panel = styled.aside`
  width: 240px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.lg};
  background: ${theme.colors.bg};
  padding: ${theme.spacing.lg};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.md};
  position: sticky;
  top: 104px;
  max-height: calc(100vh - 120px);
  overflow-y: auto;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const FilterButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    gap: ${theme.spacing.xs};
    position: fixed;
    top: 96px;
    right: ${theme.spacing.md};
    z-index: 400;
    padding: ${theme.spacing.xs} ${theme.spacing.md};
    background: ${theme.colors.primary};
    color: ${theme.colors.highlight};
    border: none;
    border-radius: 999px;
    font-family: ${theme.typography.fontFamilyBody};
    font-size: ${theme.typography.fontSizeBase};
    font-weight: ${theme.typography.fontWeightSemibold};
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 500;
  padding: ${theme.spacing.lg};
`;

export const ModalBox = styled.div`
  background: ${theme.colors.bg};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  width: 100%;
  max-width: 400px;
  max-height: 85vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.lg};
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.2);
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: ${theme.spacing.md};
  border-bottom: 1px solid ${theme.colors.border};
`;

export const ModalTitle = styled.span`
  font-family: ${theme.typography.fontFamilyHeading};
  font-size: ${theme.typography.fontSizeMedium};
  font-weight: ${theme.typography.fontWeightBold};
  color: ${theme.colors.textPrimary};
`;

export const ModalCloseButton = styled.button`
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: 1px solid ${theme.colors.border};
  border-radius: 50%;
  font-size: 15px;
  color: ${theme.colors.textPrimary};
  cursor: pointer;

  &:hover {
    background: ${theme.colors.bgDark};
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.md};
  font-family: ${theme.typography.fontFamilyBody};
  font-size: ${theme.typography.fontSizeBase};
  color: ${theme.colors.textPrimary};
  background: ${theme.colors.bg};

  &::placeholder {
    color: ${theme.colors.textMuted};
  }

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};
`;

export const SectionTitle = styled.h3`
  font-family: ${theme.typography.fontFamilyHeading};
  font-size: ${theme.typography.fontSizeBase};
  font-weight: ${theme.typography.fontWeightBold};
  color: ${theme.colors.textPrimary};
  padding-bottom: ${theme.spacing.xs};
  border-bottom: 1px solid ${theme.colors.border};
`;

export const PriceInputs = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
`;

export const PriceInput = styled.input`
  width: 80px;
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.sm};
  font-family: ${theme.typography.fontFamilyBody};
  font-size: ${theme.typography.fontSizeBase};
  color: ${theme.colors.textPrimary};
  background: ${theme.colors.bg};

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
  }
`;

export const Separator = styled.span`
  color: ${theme.colors.textMuted};
  font-size: ${theme.typography.fontSizeBase};
`;

export const ToggleLabel = styled.label`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  font-family: ${theme.typography.fontFamilyBody};
  font-size: ${theme.typography.fontSizeBase};
  color: ${theme.colors.textPrimary};
  cursor: pointer;

  input[type="checkbox"] {
    accent-color: ${theme.colors.primary};
    width: 15px;
    height: 15px;
    cursor: pointer;
  }
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
    border-color: ${theme.colors.primary};
    color: ${theme.colors.primary};
  }
`;
