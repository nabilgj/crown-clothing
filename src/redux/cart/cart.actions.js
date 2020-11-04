import CartActionTypes from "./cart.types";

// into cartIcon & CartDropdown component for dispatching to show/hide cart dropdown
export const toggleCartHidden = () => {
  return {
    type: CartActionTypes.TOGGLE_CART_HIDDEN,
  };
};

// into CollectionItem component
export const addItem = (item) => {
  return {
    type: CartActionTypes.ADD_ITEM,
    payload: item,
  };
};

// into CheckoutItem
export const removeItem = (item) => {
  return {
    type: CartActionTypes.REMOVE_ITEM,
    payload: item,
  };
};

// into CheckoutItem
export const clearItemFromCart = (item) => {
  return {
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item,
  };
};
