import React, { FC } from "react";
import { Container } from "@mui/material";
import Search from "../components/Search/Search";
import NewsList from "../components/NewsList/NewsList";

const HomePage: FC = () => {
  return (
    <Container>
      <Search />
      <NewsList />
    </Container>
  );
};
export default HomePage;
