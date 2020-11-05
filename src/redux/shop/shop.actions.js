import ShopActionTypes from "./shop.types";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

// all thunks are actions creators that returns a function
// that gets us dispatch method to dispatch action in later time

export const fetchCollectionsStart = () => {
  return {
    type: ShopActionTypes.FETCH_COLLECTIONS_START,
  };
};

export const fetchCollectionsSuccess = (collectionsMap) => {
  return {
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap,
  };
};

export const fetchCollectionsFailer = (errorMessage) => {
  return {
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage,
  };
};

// into ShopPage
export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionsStart());

    collectionRef
      .get()
      .then((snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        console.log("ShopPage", collectionsMap);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch((error) => {
        dispatch(fetchCollectionsFailer(error.message));
      });
  };
};
