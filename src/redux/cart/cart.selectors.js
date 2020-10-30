import { createSelector } from "reselect";

// input selector that does not use createSelector
const selectCart = (state) => state.cart;

// into cart drop down component
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

// into cart icon component
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((accumatedQty, cartItem) => {
      return accumatedQty + cartItem.quantity;
    }, 0)
);

// output selector that uses createSelector
