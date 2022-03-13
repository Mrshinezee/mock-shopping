export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";

export type CardType = {
  "id": number,
  "title": string,
  "price": number,
  // "description": string,
  // "category": string,
  "image": string,
  // "amount": number,
}

export type StateType = {
  products: CardType[],
  cart: [],
  addProductToCart: (product: CardType) => void,
  removeProductFromCart: (productId: number) => void
}

type Action = {
  type: string,
  productId: number,
  product: CardType
};
enum CartActionType {
  ADD_PRODUCT = "ADD_PRODUCT",
  REMOVE_PRODUCT = "REMOVE_PRODUCT"
}

type CartItem = { quantity: number; id: number; title: string; price: number; image: string; }

const addProductToCart = (product: CardType, state: StateType) => {
  const updatedCart: CartItem[]  = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(
    (item: { "id": number}) => item.id === product.id
  );

  if (updatedItemIndex < 0) {
    const cartItem: CartItem = { ...product, quantity: 1 };
    updatedCart.push(cartItem);
  } else {
    let item: CartItem = updatedCart[updatedItemIndex];
    const updatedItem = {
      ...item
    };
    updatedItem.quantity++;
    item= updatedItem;
  }
  return { ...state, cart: updatedCart };
};

const removeProductFromCart = (productId: number, state: StateType) => {
  console.log("Removing product with id: " + productId);
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex((item : { "id": number}) => item.id === productId);
  let item: CartItem = updatedCart[updatedItemIndex];
  const updatedItem = {
    ...item
  };
  updatedItem.quantity--;
  if (updatedItem.quantity <= 0) {
    updatedCart.splice(updatedItemIndex, 1);
  } else {
    item = updatedItem;
  }
  return { ...state, cart: updatedCart };
};

export const shopReducer = (state: StateType, action: Action) => {
  switch (action.type) {
    case CartActionType.ADD_PRODUCT:
      return addProductToCart(action.product, state);
    case CartActionType.REMOVE_PRODUCT:
      return removeProductFromCart(action.productId, state);
    default:
      return state;
  }
};
