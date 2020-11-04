import { createSelector } from "reselect";

// state.cart coming from root reducer
// input selector that does not use createSelector
const selectCart = (state) => state.cart;

// output selector that uses input selectors and createSelector for output
// create selectors take 2 arguments
// into CartDropdown component
export const selectCartItems = createSelector(
  [selectCart], // this is a collection of array of input selector
  (cart) => cart.cartItems
);

// into header component
export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

// into CartIcon component
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((accumatedQty, cartItem) => {
      return accumatedQty + cartItem.quantity;
    }, 0)
);

// into CheckoutPage
export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((accumatedQty, cartItem) => {
    return accumatedQty + cartItem.quantity * cartItem.price;
  }, 0)
);
