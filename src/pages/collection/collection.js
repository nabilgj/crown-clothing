import React from "react";

import "./collection.styles.scss";

import CollectionItem from "../../components/collection-item/collection-item";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollection } from "../../redux/shop/shop.selector";

const CollectionPage = ({ collection }) => {
  console.log("CollectionPage", collection);
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title"> {title} </h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

// 2nd param is options which is ownProps of this component ie CollectionPage
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

// into ShopPage
export default connect(mapStateToProps)(CollectionPage);
