import React from "react";
import "./cart-dropdown.styles.scss";

import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button";
import CartItem from "../cart-item/cart-item";

import { selectCartItems } from "../../redux/cart/cart.selectors";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton> GO TO CHECKOUT </CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: selectCartItems(state),
  };
};

// into Header
export default connect(mapStateToProps)(CartDropdown);
