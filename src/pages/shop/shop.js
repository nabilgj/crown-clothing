import React, { Component } from "react";
import { Route } from "react-router-dom";

import { connect } from "react-redux";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";

import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../collection/collection.container";

import withSpinner from "../../components/withSpinner/withSpinner";

import CollectionPage from "../collection/collection";

const CollectionPageWithSpinner = withSpinner(CollectionPage);

class ShopPage extends Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match } = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
  };
};

// into App
export default connect(null, mapDispatchToProps)(ShopPage);
