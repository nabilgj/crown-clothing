import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, isGoogleSignin, ...otherProps }) => {
  return (
    <button
      className={`${isGoogleSignin ? "google-sign-in" : ""} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

// into Signin Component
export default CustomButton;
