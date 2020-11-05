import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { compose } from "redux";

import { selectIsCollectionFetching } from "../../redux/shop/shop.selector";
import withSpinner from "../withSpinner/withSpinner";

import CollectionsOverview from "./collections-overview";

const mapStateToProps = createStructuredSelector({
  isLoadin: selectIsCollectionFetching,
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionsOverview);

// into ShopPage
export default CollectionsOverviewContainer;
