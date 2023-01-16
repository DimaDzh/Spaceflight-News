import React, { FC } from "react";
import { Container } from "@mui/material";
import Search from "../components/Search/Search";
import NewsList from "../components/NewsList/NewsList";
import AnimatedPage from "./AnimatedPage";

const HomePage: FC = () => {
  return (
    <AnimatedPage>
      <Container>
        <Search />
        <NewsList />
      </Container>
    </AnimatedPage>
  );
};
export default HomePage;
