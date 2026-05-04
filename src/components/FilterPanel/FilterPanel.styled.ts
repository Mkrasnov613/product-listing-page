"use client";

import styled from "styled-components";
import { theme } from "@/theme";

export const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const ToggleBtn = styled.button`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xs};
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  background: ${theme.colors.bg};
  color: ${theme.colors.primary};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.md};
  font-family: ${theme.typography.fontFamilyBody};
  font-size: ${theme.typography.fontSizeBase};
  font-weight: ${theme.typography.fontWeightSemibold};
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background: ${theme.colors.bgDark};
  }
`;

export const ActiveDot = styled.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${theme.colors.primary};
  flex-shrink: 0;
`;

export const Popup = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  z-index: 300;
  min-width: 280px;
  background: ${theme.colors.bg};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.md};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  padding: ${theme.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.lg};
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
