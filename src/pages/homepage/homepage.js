import React from "react";

import { HomePageContainer } from "./homepage.styles";

import Directory from "../../components/directory/directory";

const HomePage = () => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

// into App
export default HomePage;
