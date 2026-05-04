import { theme } from "@/theme";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 16px;
  height: 80px;
  background: ${theme.colors.bg};
  box-shadow: ${theme.shadows.header};
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
`;

const LogoImage = styled.div<{ isMobile: boolean }>`
  position: relative;
  width: ${({ isMobile }) => (isMobile ? "120px" : "160px")};
  height: 48px;
`;

const Logo = styled.div`
  font-family: ${theme.typography.fontFamilyHeading};
  font-size: ${theme.typography.fontSizeLarge};
  font-weight: ${theme.typography.fontWeightBold};
  color: ${theme.colors.primary};
  letter-spacing: 0.5px;
`;

const CartButton = styled.button`
  position: relative;
  box-sizing: border-box;
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.md};
  color: ${theme.colors.primary};

  &:hover {
    background: ${theme.colors.bgDark};
  }
`;

const CartCount = styled.span`
  position: absolute;
  box-sizing: border-box;
  top: 3px;
  right: 3px;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: ${theme.typography.fontWeightBold};
  background: ${theme.colors.primary};
  color: ${theme.colors.highlight};
  border-radius: 50%;
`;

export { HeaderWrapper, Logo, LogoImage, CartButton, CartCount };
