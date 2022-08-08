import {
  createContext,
  ReactNode,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { dataProducts } from "../mock/products-mocks";
import { KEY_LOCAL_STORAGE_COFFEE } from "../constants";

// Fake Database
import { useLocalStorage } from "../hooks/useLocalStorage";

interface ProductCart {
  id: number;
  qtd: number;
}

interface CartProviderProps {
  children: ReactNode;
}

interface CartContextData {
  productsCart: ProductCart[];
  totalAmountOfItems: number;
  productsSelectedCart: Products[];
  addProductToCart: (productId: number, max?: number | undefined) => void;
  removeProductOfCart: (productId: number) => void;
  removeProductsSelected: (productId: number) => void;
  removerAllCart: () => void;
  renderQtdOfProductSelected: (
    productId: number,
    getNumber?: boolean
  ) => JSX.Element | number | undefined;
}

interface Products {
  qtd: number;
  id: number;
  image: string;
  type: string[];
  name: string;
  description: string;
  amount: number;
  stock: number;
}

const CartContext = createContext({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {
  const [productsSelectedCart, setProductsSelectedCart] = useState<Products[]>(
    []
  );

  const [enabledState, setEnabledState] = useLocalStorage<ProductCart[]>(
    KEY_LOCAL_STORAGE_COFFEE,
    []
  );

  const [productsCart, setProductsCart] = useState<ProductCart[]>(
    enabledState ? enabledState : []
  );

  const addProductToCart = (productId: number, max: number | undefined) => {
    const newProducts = [...productsCart];
    const findProductCart = newProducts.find(
      (product) => product.id === productId
    );

    if (!findProductCart) {
      newProducts.push({ id: productId, qtd: 1 });
    } else {
      if (findProductCart.qtd === max) return max;
      findProductCart.qtd += 1;
    }

    setProductsCart(newProducts);
  };

  const removeProductOfCart = (productId: number) => {
    const newProducts = [...productsCart];

    const findProductCart = newProducts.find(
      (product) => product.id === productId
    );

    if (findProductCart && findProductCart.qtd > 1) {
      findProductCart.qtd -= 1;
      setProductsCart(newProducts);
    } else {
      const findAndRemoveProductOfCart = newProducts.filter(
        (product) => product.id !== productId
      );

      setProductsCart(findAndRemoveProductOfCart);
    }
  };

  const removeProductsSelected = (productId: number) => {
    const newProducts = [...productsCart];
    const findAndRemoveAllProductOfCartSelected = newProducts.filter(
      (product) => product.id !== productId
    );
    setProductsCart(findAndRemoveAllProductOfCartSelected);
  };

  const renderQtdOfProductSelected = useCallback(
    (productId: number, getNumber = false) => {
      const amount = productsCart.find((item) => item.id === productId)?.qtd
        ? productsCart.find((item) => item.id === productId)?.qtd
        : 0;

      return getNumber ? amount : <>{amount}</>;
    },
    [productsCart]
  );

  const removerAllCart = () => {
    setEnabledState([]);
    setProductsCart([]);
    setProductsSelectedCart([]);
  };

  useEffect(() => {
    setEnabledState(productsCart);
  }, [setEnabledState, productsCart]);

  useEffect(() => {
    if (enabledState.length > 0) {
      const productsIds = enabledState.map((p) => p.id);
      const getProductsHaveCart = dataProducts
        .map((product) => {
          if (productsIds.includes(product.id)) {
            return {
              ...product,
              qtd: enabledState.find((p) => p.id === product.id)?.qtd || 0,
            };
          }
        })
        .filter(Boolean) as SetStateAction<Products[]>;

      if (getProductsHaveCart.length > 0) {
        setProductsSelectedCart(getProductsHaveCart);
      }
    }
  }, [enabledState, dataProducts]);

  const totalAmountOfItems = useMemo(() => {
    return productsSelectedCart.reduce((acc, cur) => {
      return (acc += cur.amount * cur.qtd);
    }, 0);
  }, [productsSelectedCart, addProductToCart]);

  return (
    <CartContext.Provider
      value={{
        productsCart,
        totalAmountOfItems,
        productsSelectedCart,
        removerAllCart,
        addProductToCart,
        removeProductOfCart,
        removeProductsSelected,
        renderQtdOfProductSelected,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  return context;
}
