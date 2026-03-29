'use client';

import { createContext, useContext, useState } from 'react';

interface CartCtx {
  count: number;
  add: () => void;
  remove: () => void;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
}

const Ctx = createContext<CartCtx>({
  count: 0, add: () => {}, remove: () => {},
  isCartOpen: false, openCart: () => {}, closeCart: () => {},
});

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);

  function add() {
    setCount(c => c + 1);
    setIsCartOpen(true);
  }

  function remove() {
    setCount(c => {
      const next = c - 1;
      if (next <= 0) setIsCartOpen(false);
      return Math.max(0, next);
    });
  }

  return (
    <Ctx.Provider value={{
      count, add, remove,
      isCartOpen,
      openCart: () => setIsCartOpen(true),
      closeCart: () => setIsCartOpen(false),
    }}>
      {children}
    </Ctx.Provider>
  );
}

export const useCart = () => useContext(Ctx);
