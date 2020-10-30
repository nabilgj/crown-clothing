import React from "react";
import "./cart-dropdown.styles.scss";

import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button";
import CartItem from "../cart-item/cart-item";

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

const mapStateToProps = ({ cart: { cartItems } }) => {
  return {
    cartItems: cartItems,
  };
};

// into Header
export default connect(mapStateToProps)(CartDropdown);
