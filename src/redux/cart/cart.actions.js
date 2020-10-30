import CartActionTypes from "./cart.types";

// into cart icon component for dispatching
export const toggleCartHidden = () => {
  return {
    type: CartActionTypes.TOGGLE_CART_HIDDEN,
  };
};
