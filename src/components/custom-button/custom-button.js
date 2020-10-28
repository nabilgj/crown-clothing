import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, ...otherProps }) => {
  return (
    <button className="custom-button" {...otherProps}>
      {children}
    </button>
  );
};

// into Signin Component
export default CustomButton;
