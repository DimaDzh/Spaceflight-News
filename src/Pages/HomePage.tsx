import React, { FC } from "react";
import { Container } from "@mui/material";
import Search from "../components/Search/Search";
import NewsList from "../components/NewsList/NewsList";
import AnimatedPage from "../components/Animations/AnimatedPage";

const HomePage: FC = () => {
  return (
    <Container>
      <Search />
      <AnimatedPage>
        {" "}
        <NewsList />
      </AnimatedPage>
    </Container>
  );
};
export default HomePage;
