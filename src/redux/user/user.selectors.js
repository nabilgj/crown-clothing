import { createSelector } from "reselect";

// state.user coming from root reducer
const selectUser = (state) => state.user;

// into header component
export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);
