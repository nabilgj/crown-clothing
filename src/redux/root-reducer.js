import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

// into store
export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});
