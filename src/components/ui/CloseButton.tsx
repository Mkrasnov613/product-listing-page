"use client";

import React from "react";
import styled, { css } from "styled-components";
import { theme } from "@/theme";

const StyledButton = styled.button<{ $absolute?: boolean }>`
  ${({ $absolute }) =>
    $absolute &&
    css`
      position: absolute;
      top: ${theme.spacing.md};
      right: ${theme.spacing.md};
      z-index: 10;
    `}
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.bg};
  border: none;
  border-radius: 50%;
  font-size: 16px;
  color: ${theme.colors.textPrimary};
  cursor: pointer;
  line-height: 1;
  flex-shrink: 0;

  &:hover {
    background: ${theme.colors.bgDark};
  }
`;

interface CloseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  absolute?: boolean;
}

export const CloseButton = ({ absolute, ...props }: CloseButtonProps) => (
  <StyledButton $absolute={absolute} {...props}>
    ✕
  </StyledButton>
);
