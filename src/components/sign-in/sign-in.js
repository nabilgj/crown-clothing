import React, { Component } from "react";

import "./sign-in.styles.scss";

import FormInput from "../../components/form-input/form-input";
import CustomButton from "../../components/custom-button/custom-button";

import { signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChanged = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account </h2>

        <span> Sign in with your email and password </span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChanged}
            label="email"
            required
          />

          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChanged}
            label="password"
            required
          />

          <div className="buttons">
            <CustomButton type="submit"> Sign in </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignin>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

// into Sign in and sign up
export default SignIn;
