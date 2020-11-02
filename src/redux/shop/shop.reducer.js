import Shop_Data from "./shop.data";

const initialState = {
  collections: Shop_Data,
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
