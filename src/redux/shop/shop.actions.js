import ShopActionTypes from "./shop.types";

// into ShopPage
export const updateCollections = (collectionsMap) => {
  return {
    type: ShopActionTypes.UPDATE_COLLECTIONS,
    payload: collectionsMap,
  };
};
