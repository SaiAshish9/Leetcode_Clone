import React from "react";
import {
  HomeComponent,
  Content,
  TopLeftContainer,
  TopRightContainer,
} from "./styles";
import { Banner, DropdownCont, Options, SessionCard, Tags } from "./components";

const HomeScreen = () => {
  return (
    <HomeComponent>
      <Content>
        <TopLeftContainer>
          <Banner />
          <Tags />
          <Options />
          <DropdownCont />
        </TopLeftContainer>
        <TopRightContainer>
          <SessionCard />
        </TopRightContainer>
      </Content>
    </HomeComponent>
  );
};

export default HomeScreen;
