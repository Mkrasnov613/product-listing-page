"use client";

import { Product } from "@/types/api";
import { ReactNode, useContext, useReducer } from "react";
import { createContext } from "react";

interface CartState {
  items: Product[];
  count: number;
}

export enum CartActionType {
  ADD = "ADD",
  REMOVE = "REMOVE",
  CLEAR = "CLEAR",
}

type CartAction =
  | { type: CartActionType.ADD; payload: Product }
  | { type: CartActionType.REMOVE; payload: string }
  | { type: CartActionType.CLEAR };

export interface CartContextValue {
  state: CartState;
  addToCart: (product: Product) => Promise<void>;
  removeFromCart: (articleNumber: string) => void;
  clearCart: () => void;
}

const cartReducer = (state: CartState, action: CartAction) => {
  switch (action.type) {
    case CartActionType.ADD:
      return {
        items: [...state.items, action.payload],
        count: state.count + 1,
      };
    case CartActionType.REMOVE:
      return {
        items: state.items.filter(
          (item) => item.articleNumber !== action.payload,
        ),
        count: state.count - 1,
      };
    case CartActionType.CLEAR:
      return {
        items: [],
        count: 0,
      };
  }
};

const CartContext = createContext<CartContextValue | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [], count: 0 });

  const addToCart = async (product: Product) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    dispatch({ type: CartActionType.ADD, payload: product });
  };

  const removeFromCart = (articleNumber: string) => {
    dispatch({ type: CartActionType.REMOVE, payload: articleNumber });
  };

  const clearCart = () => {
    dispatch({ type: CartActionType.CLEAR });
  };

  return (
    <CartContext.Provider value={{ state, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export function useCart() {
  const context = useContext(CartContext);
  return context;
}
