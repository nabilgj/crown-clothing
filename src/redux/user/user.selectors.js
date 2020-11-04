import { createSelector } from "reselect";

// this is input selector that does not uses createSelector
// state.user coming from root reducer
const selectUser = (state) => state.user;

// this is out selector that uses input selector and createSelector
// into header component and App
export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);
