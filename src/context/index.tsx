import { ReactNode } from "react";
import { CartProvider } from "./Cart";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return <CartProvider>{children}</CartProvider>;
}
