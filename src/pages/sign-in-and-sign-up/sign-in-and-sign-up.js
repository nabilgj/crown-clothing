import React from "react";

import "./sign-in-and-sign-up.styles.scss";

import SignIn from "../../components/sign-in/sign-in";

const SignInAndSignUp = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
    </div>
  );
};

// into App
export default SignInAndSignUp;
