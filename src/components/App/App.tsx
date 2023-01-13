import { Divider, Typography, Container, Box } from "@mui/material";
import React, { FC } from "react";
import NewsList from "../NewsList/NewsList";
import Search from "../Search/Search";
import "./App.css";

const App: FC = () => {
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
