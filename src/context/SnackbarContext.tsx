"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
} from "react";
import styled, { keyframes } from "styled-components";
import { theme } from "@/theme";

interface SnackbarContextValue {
  showSnackbar: (message: string) => void;
}

const SnackbarContext = createContext<SnackbarContextValue | null>(null);

const slideUp = keyframes`
  from { transform: translateX(-50%) translateY(20px); opacity: 0; }
  to   { transform: translateX(-50%) translateY(0);    opacity: 1; }
`;

const Toast = styled.div`
  position: fixed;
  top: 64px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
  padding: ${theme.spacing.sm} ${theme.spacing.xl};
  background: ${theme.colors.bgDark};
  color: ${theme.colors.primary};
  border-radius: ${theme.borderRadius.md};
  font-family: ${theme.typography.fontFamilyBody};
  font-size: ${theme.typography.fontSizeBase};
  font-weight: ${theme.typography.fontWeightSemibold};
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  white-space: nowrap;
  animation: ${slideUp} 0.25s ease;
`;

export const SnackbarProvider = ({ children }: { children: ReactNode }) => {
  const [message, setMessage] = useState<string | null>(null);

  const showSnackbar = useCallback((msg: string) => {
    setMessage(msg);
    setTimeout(() => setMessage(null), 3000);
  }, []);

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {message && <Toast>{message}</Toast>}
      {children}
    </SnackbarContext.Provider>
  );
};

export const useSnackbar = () => {
  const context = useContext(SnackbarContext);
  if (!context) throw new Error("useSnackbar must be used inside SnackbarProvider");
  return context;
};
