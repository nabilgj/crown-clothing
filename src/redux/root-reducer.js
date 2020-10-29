import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";

// into store
export default combineReducers({
  user: userReducer,
});
