"use client";

import styled from "styled-components";
import { theme } from "@/theme";

export const FilterBar = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  width: 100%;
  flex-wrap: wrap;
`;

export const SearchInput = styled.input`
  flex: 1;
  min-width: 160px;
  padding: ${theme.spacing.xs} ${theme.spacing.md};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.md};
  font-family: ${theme.typography.fontFamilyBody};
  font-size: ${theme.typography.fontSizeBase};
  color: ${theme.colors.textPrimary};
  background: ${theme.colors.bg};
  height: 34px;

  &::placeholder {
    color: ${theme.colors.textMuted};
  }

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
  }
`;

export const PriceInputs = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xs};
  flex-shrink: 0;
`;

export const PriceInput = styled.input`
  width: 72px;
  height: 34px;
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.md};
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
  flex-shrink: 0;
`;

export const ToggleLabel = styled.label`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xs};
  font-family: ${theme.typography.fontFamilyBody};
  font-size: ${theme.typography.fontSizeBase};
  color: ${theme.colors.textPrimary};
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;

  input[type="checkbox"] {
    accent-color: ${theme.colors.primary};
    width: 15px;
    height: 15px;
    cursor: pointer;
  }
`;

export const ActiveDot = styled.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${theme.colors.primary};
  flex-shrink: 0;
`;

export const ClearButton = styled.button`
  height: 34px;
  padding: 0 ${theme.spacing.md};
  background: none;
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.md};
  font-family: ${theme.typography.fontFamilyBody};
  font-size: ${theme.typography.fontSizeBase};
  color: ${theme.colors.textMuted};
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;

  &:hover {
    border-color: ${theme.colors.primary};
    color: ${theme.colors.primary};
  }
`;

export const HideButton = styled.button`
  height: 34px;
  padding: 0 ${theme.spacing.md};
  background: none;
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.md};
  font-family: ${theme.typography.fontFamilyBody};
  font-size: ${theme.typography.fontSizeBase};
  font-weight: ${theme.typography.fontWeightSemibold};
  color: ${theme.colors.primary};
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;

  &:hover {
    background: ${theme.colors.bgDark};
  }
`;

export const ShowButton = styled(HideButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
  margin-left: auto;
`;
