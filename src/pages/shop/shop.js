import React, { Component } from "react";
import { Route } from "react-router-dom";

import CollectionsOverview from "../../components/collections-overview/collections-overview";

import CollectionPage from "../collection/collection";

const ShopPage = ({ match }) => {
  console.log("ShopPage", match);
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

// into App
export default ShopPage;
