import { theme } from "@/theme";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background: ${theme.colors.bg};
  box-shadow: ${theme.shadows.header};
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
`;

const LogoImage = styled.div`
  position: relative;
  width: 200px;
  height: 48px;
`;

const Inner = styled.div`
  max-width: 1280px;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  padding: 0 ${theme.spacing.xl};
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
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

export { HeaderWrapper, Inner, Logo, LogoImage, CartButton, CartCount };
