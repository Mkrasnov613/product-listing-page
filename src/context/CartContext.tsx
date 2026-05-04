"use client";

import { Product } from "@/types/api";
import { ReactNode, useContext, useReducer } from "react";
import { createContext } from "react";

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  count: number;
}

export enum CartActionType {
  ADD = "ADD",
  DECREMENT = "DECREMENT",
  REMOVE = "REMOVE",
  CLEAR = "CLEAR",
}

type CartAction =
  | { type: CartActionType.ADD; payload: Product }
  | { type: CartActionType.DECREMENT; payload: string }
  | { type: CartActionType.REMOVE; payload: string }
  | { type: CartActionType.CLEAR };

export interface CartContextValue {
  state: CartState;
  addToCart: (product: Product) => Promise<void>;
  decrementQuantity: (articleNumber: string) => void;
  removeFromCart: (articleNumber: string) => void;
  clearCart: () => void;
}

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case CartActionType.ADD: {
      const idx = state.items.findIndex(
        (item) => item.product.articleNumber === action.payload.articleNumber,
      );
      if (idx >= 0) {
        const items = [...state.items];
        items[idx] = { ...items[idx], quantity: items[idx].quantity + 1 };
        return { items, count: state.count + 1 };
      }
      return {
        items: [...state.items, { product: action.payload, quantity: 1 }],
        count: state.count + 1,
      };
    }
    case CartActionType.DECREMENT: {
      const item = state.items.find(
        (item) => item.product.articleNumber === action.payload,
      );
      if (!item) return state;
      if (item.quantity === 1) {
        return {
          items: state.items.filter(
            (item) => item.product.articleNumber !== action.payload,
          ),
          count: state.count - 1,
        };
      }
      return {
        items: state.items.map((item) =>
          item.product.articleNumber === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        ),
        count: state.count - 1,
      };
    }
    case CartActionType.REMOVE: {
      const item = state.items.find(
        (item) => item.product.articleNumber === action.payload,
      );
      return {
        items: state.items.filter(
          (item) => item.product.articleNumber !== action.payload,
        ),
        count: state.count - (item?.quantity ?? 0),
      };
    }
    case CartActionType.CLEAR:
      return { items: [], count: 0 };
  }
};

const CartContext = createContext<CartContextValue | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [], count: 0 });

  const addToCart = async (product: Product) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    dispatch({ type: CartActionType.ADD, payload: product });
  };

  const decrementQuantity = (articleNumber: string) => {
    dispatch({ type: CartActionType.DECREMENT, payload: articleNumber });
  };

  const removeFromCart = (articleNumber: string) => {
    dispatch({ type: CartActionType.REMOVE, payload: articleNumber });
  };

  const clearCart = () => {
    dispatch({ type: CartActionType.CLEAR });
  };

  return (
    <CartContext.Provider
      value={{ state, addToCart, decrementQuantity, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export function useCart() {
  return useContext(CartContext);
}
