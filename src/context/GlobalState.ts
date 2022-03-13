import React, { useState, FC, useReducer } from "react";

import ShopContext from "./shop-context";
import { shopReducer, ADD_PRODUCT, REMOVE_PRODUCT } from "./reducers";
export type CardType = {
  "id": number,
  "title": string,
  "price": number,
  "image": string,
}
// An enum with all the types of actions to use in our reducer
enum CountActionKind {
  INCREASE = 'INCREASE',
  DECREASE = 'DECREASE',
  ADD_PRODUCT = "ADD_PRODUCT",
  REMOVE_PRODUCT = "REMOVE_PRODUCT",
}

// An interface for our actions
interface CountAction {
  type: CountActionKind;
  payload: number;
}

// An interface for our state
interface CountState {
  count: number;
}


// Our reducer function that uses a switch statement to handle our actions
function counterReducer(state: CountState, action: CountAction) {
  const { type, payload } = action;
  switch (type) {
    case CountActionKind.INCREASE:
      return {
        ...state,
        value: state.count + payload,
      };
    case CountActionKind.DECREASE:
      return {
        ...state,
        value: state.count - payload,
      };
    default:
      return state;
  }
}

const GlobalState: FC = ({ children }) => {
  const products = [
    { id: "p1", title: "Gaming Mouse", price: 29.99 },
    { id: "p2", title: "Harry Potter 3", price: 9.99 },
    { id: "p3", title: "Used plastic bottle", price: 0.99 },
    { id: "p4", title: "Half-dried plant", price: 2.99 }
  ];
  // const [cart, setCart] = useState([]);
  const [cartState, dispatch] = useReducer(shopReducer, { cart: [] });
  // const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  const addProductToCart = (product: CardType) => {
    setTimeout(() => {
      dispatch({ type: CountActionKind.ADD_PRODUCT, product: product });
    }, 700);
  };

  const removeProductFromCart = (productId: number) => {
    setTimeout(() => {
      dispatch({ type: CountActionKind.REMOVE_PRODUCT, productId: productId });
    }, 700);
  };

  return (
    <ShopContext.Provider
      value={{
        products: products,
        cart: cartState.cart,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart
      }}
    >
      <>{children}</>
    </ShopContext.Provider>
  );
};

export default GlobalState;
