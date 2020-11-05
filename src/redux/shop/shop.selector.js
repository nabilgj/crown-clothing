import memoize from "lodash.memoize";

import { createSelector } from "reselect";

const selectShop = (state) => state.shop; // shop is coming from root reducer

// into Shop Page
export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections // colections coming from reducer
);

// into CollectionsOverview and App
export const selectCollectionsForPreview = createSelector(
  [selectShopCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

// into CollectionPage
export const selectCollection = memoize((collectionUrlParam) =>
  createSelector([selectShopCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null
  )
);

// into ShopPage
export const selectIsCollectionFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);

// into ShopPage
export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  (shop) => !!shop.collections
);
