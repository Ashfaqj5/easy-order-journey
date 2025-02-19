import { createContext, useContext, useEffect, useState } from "react";

interface MenuItem {
  id: number;
  name: string;
  price: number;
  description: string;
  isVeg: boolean;
  rating: number;
  isSpicy: boolean;
  quantity?: number;
}

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  variations?: string;
}

interface CartContextType {
  cartItems: CartItem[];
  cartQuantities: { [key: number]: number };
  totalItems: number;
  totalAmount: number;
  favorites: number[];
  updateCart: (item: MenuItem, quantity: number) => void;
  addToCart: (item: MenuItem) => void;
  toggleFavorite: (restaurantId: number) => void;
  isFavorite: (restaurantId: number) => boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartState, setCartState] = useState<{
    items: CartItem[];
    quantities: { [key: number]: number };
    totalItems: number;
    totalAmount: number;
    favorites: number[];
  }>(() => {
    const savedCart = localStorage.getItem('cart');
    const savedFavorites = localStorage.getItem('favorites');
    return {
      items: [],
      quantities: {},
      totalItems: 0,
      totalAmount: 0,
      favorites: savedFavorites ? JSON.parse(savedFavorites) : [],
      ...(savedCart ? JSON.parse(savedCart) : {})
    };
  });

  const saveCart = (newState: typeof cartState) => {
    localStorage.setItem('cart', JSON.stringify(newState.items));
    setCartState(prevState => ({
      ...prevState,
      ...newState
    }));
  };

  const updateCart = (item: MenuItem, quantity: number) => {
    const existingItemIndex = cartState.items.findIndex(cartItem => cartItem.id === item.id);
    let newItems: CartItem[];
    let newQuantities = { ...cartState.quantities };
    let newTotalItems = cartState.totalItems;
    let newTotalAmount = cartState.totalAmount;

    // Remove existing item's contribution to totals if it exists
    if (existingItemIndex > -1) {
      const existingItem = cartState.items[existingItemIndex];
      newTotalItems -= existingItem.quantity;
      newTotalAmount -= existingItem.price * existingItem.quantity;
    }

    if (quantity <= 0) {
      newItems = cartState.items.filter(cartItem => cartItem.id !== item.id);
      delete newQuantities[item.id];
    } else {
      if (existingItemIndex > -1) {
        newItems = cartState.items.map(cartItem =>
          cartItem.id === item.id ? { ...cartItem, quantity } : cartItem
        );
      } else {
        newItems = [...cartState.items, {
          id: item.id,
          name: item.name,
          price: item.price,
          quantity
        }];
      }
      newQuantities[item.id] = quantity;
      newTotalItems += quantity;
      newTotalAmount += item.price * quantity;
    }

    saveCart({
      items: newItems,
      quantities: newQuantities,
      totalItems: newTotalItems,
      totalAmount: newTotalAmount,
      favorites: cartState.favorites
    });
  };

  const addToCart = (item: MenuItem) => {
    const currentQuantity = cartState.quantities[item.id] || 0;
    updateCart(item, currentQuantity + 1);
  };

  const updateQuantity = (itemId: number, quantity: number) => {
    const item = cartState.items.find(item => item.id === itemId);
    if (item) {
      updateCart({
        id: item.id,
        name: item.name,
        price: item.price,
        description: '',
        isVeg: false,
        rating: 0,
        isSpicy: false
      }, quantity);
    }
  };

  const clearCart = () => {
    const emptyState = {
      items: [],
      quantities: {},
      totalItems: 0,
      totalAmount: 0,
      favorites: []
    };
    localStorage.removeItem('cart');
    localStorage.removeItem('favorites');
    setCartState(emptyState);
  };

  const toggleFavorite = (restaurantId: number) => {
    setCartState(prevState => {
      const newFavorites = prevState.favorites.includes(restaurantId)
        ? prevState.favorites.filter(id => id !== restaurantId)
        : [...prevState.favorites, restaurantId];
      
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
      
      return {
        ...prevState,
        favorites: newFavorites
      };
    });
  };

  const isFavorite = (restaurantId: number) => {
    return cartState.favorites.includes(restaurantId);
  };

  return (
    <CartContext.Provider value={{
      cartItems: cartState.items,
      cartQuantities: cartState.quantities,
      totalItems: cartState.totalItems,
      totalAmount: cartState.totalAmount,
      favorites: cartState.favorites,
      updateCart,
      addToCart,
      toggleFavorite,
      isFavorite
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}; 