import { css } from "styled-components";
import { theme } from "@/theme";

export const altTextStyles = css`
  background: ${theme.colors.bgDark};

  img {
    font-size: ${theme.typography.fontSizeSmall};
    font-family: ${theme.typography.fontFamilyBody};
    color: ${theme.colors.textMuted};
    word-break: break-word;
  }

  img::after {
    content: attr(alt);
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: ${theme.spacing.sm};
    background: ${theme.colors.bgDark};
    color: ${theme.colors.textMuted};
    font-size: ${theme.typography.fontSizeSmall};
    font-family: ${theme.typography.fontFamilyBody};
  }
`;
