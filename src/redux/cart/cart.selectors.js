import { createSelector } from "reselect";

// state.cart coming from root reducer
// input selector that does not use createSelector
const selectCart = (state) => state.cart;

// into cart drop down component
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

// into header component
export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

// into cart icon component
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((accumatedQty, cartItem) => {
      return accumatedQty + cartItem.quantity;
    }, 0)
);

// into checkout
export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((accumatedQty, cartItem) => {
    return accumatedQty + cartItem.quantity * cartItem.price;
  }, 0)
);

// output selector that uses createSelector
