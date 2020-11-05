import React, { Component } from "react";
import { Route } from "react-router-dom";

import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.actions";

import CollectionsOverview from "../../components/collections-overview/collections-overview";
import withSpinner from "../../components/withSpinner/withSpinner";

import CollectionPage from "../collection/collection";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

const CollectionsOverviewWithSpinner = withSpinner(CollectionsOverview);
const CollectionPageWithSpinner = withSpinner(CollectionPage);

class ShopPage extends Component {
  state = {
    loading: true,
  };

  unsubscribeFromSnapShot = null;

  componentDidMount() {
    const collectionRef = firestore.collection("collections");

    const { updateCollections } = this.props;

    collectionRef.get().then((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      console.log("ShopPage", collectionsMap);
      updateCollections(collectionsMap);

      this.setState({ loading: false });
    });

    // fetch(
    //   "https://firestore.googleapis.com/v1/projects/crown-db-a7fdd/databases/(default)/documents/collections"
    // )
    //   .then((response) => response.json())
    //   .then((collections) => console.log("ponka", collections));
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateCollections: (collectionMap) =>
      dispatch(updateCollections(collectionMap)),
  };
};

// into App
export default connect(null, mapDispatchToProps)(ShopPage);
