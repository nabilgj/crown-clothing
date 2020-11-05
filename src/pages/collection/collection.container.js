import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selector";

import withSpinner from "../../components/withSpinner/withSpinner";
import CollectionPage from "./collection";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoaded(state),
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionPage);

// into ShopPage
export default CollectionPageContainer;
