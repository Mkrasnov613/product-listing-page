import type { Metadata } from "next";
import { Header } from "@/components/Header/Header";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { SnackbarProvider } from "@/context/SnackbarContext";
import { StyledComponentsRegistry } from "@/lib/StyledComponentsRegistry";

export const metadata: Metadata = {
  title: "Columbus",
  description: "Product listing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <CartProvider>
            <SnackbarProvider>
              <Header />
              <main style={{ paddingTop: "64px" }}>{children}</main>
            </SnackbarProvider>
          </CartProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
