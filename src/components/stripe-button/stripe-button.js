import React from "react";

import StripCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_svwmLEC6W9nsQmKszJHUostm00mGGw6ubw";

  const onToken = (token) => {
    console.log(token);
    alert("payment successfu");
  };

  return (
    <div>
      <StripCheckout
        label="Pay Now"
        name="Crown Clothing"
        billingAddress
        shippingAddress
        image="https://svgshare.com/i/CUz.svg"
        description={`Your total is $ ${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
      />
    </div>
  );
};

// into CheckoutPage
export default StripeCheckoutButton;
