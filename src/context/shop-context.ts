import React from "react";

interface CardType {
  id: number;
  title: string;
  price: number,
  image: string,
}
type ContextType = {
  cart: CardType[];
  products: CardType[];
  addProductToCart: (product: CardType) => void;
  removeProductFromCart: (id: number) => void;
};

export const TodoContext = React.createContext<ContextType | null>(null);


export default React.createContext({
  products: [
    { id: "p1", title: "Gaming Mouse", price: 29.99 },
    { id: "p2", title: "Harry Potter 3", price: 9.99 },
    { id: "p3", title: "Used plastic bottle", price: 0.99 },
    { id: "p4", title: "Half-dried plant", price: 2.99 }
  ],
  cart: [],
  addProductToCart: (product: CardType) => {},
  removeProductFromCart: (productId: number) => {}
});
