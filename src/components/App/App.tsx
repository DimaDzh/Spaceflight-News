import { Divider, Typography, Container, Box } from "@mui/material";
import React, { FC, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { fetchNews } from "../../store/slices/getNewsSLice";

import NewsList from "../NewsList/NewsList";
import Search from "../Search/Search";
import "./App.css";

const App: FC = () => {
  const { loading, error } = useAppSelector((state) => state.fetchNewsReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  return (
    <Container maxWidth="md" className="App">
      <Search />
      <Box
        sx={{
          mb: "45px",
        }}
      >
        <Typography variant="body1" component="span">
          Result : 6
        </Typography>
        <Divider />
      </Box>

      <NewsList />
    </Container>
  );
};

export default App;
