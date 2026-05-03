// src/theme.ts

export const theme = {
  colors: {
    primary: "hsl(223 73% 35%)",
    accent: "hsl(40 100% 12%)",

    bgDark: "hsl(220 100% 95%)",
    bg: "hsl(220 100% 100%)",
    border: "hsl(221 69% 59%)",
    highlight: "hsl(220 100% 100%)",

    textPrimary: "hsl(255 100% 12%)",
    textSecondary: "hsl(40 100% 12%)",
    textMuted: "hsl(223 73% 35%)",
  },

  typography: {
    fontFamilyHeading: "var(--font-montserrat), sans-serif",
    fontSizeSmall: "12px",
    fontSizeBase: "14px",
    fontSizeMedium: "16px",
    fontSizeLarge: "20px",
    fontWeightRegular: "400",
    fontWeightSemibold: "600",
    fontWeightBold: "700",
  },

  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
  },

  borderRadius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
  },
} as const;
