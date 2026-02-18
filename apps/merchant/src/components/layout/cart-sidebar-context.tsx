"use client";

import React, { createContext, useContext, useState } from "react";

// Create a UNIQUE context specifically for the Cart
const CartContext = createContext({
  open: false,
  setOpen: (val: boolean) => {},
  toggleSidebar: () => {},
});

export const CartSidebarProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [open, setOpen] = useState(false);
  const toggleSidebar = () => setOpen((prev) => !prev);

  return (
    <CartContext.Provider value={{ open, setOpen, toggleSidebar }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartSidebar = () => useContext(CartContext);
