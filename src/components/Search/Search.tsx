import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { TextField, Typography, Box } from "@mui/material";
import { setFilter } from "../../store/slices/getNewsSLice";

import "./style.scss";

const Search: FC = () => {
  const dispath = useAppDispatch();

  const findArticles = useAppSelector((state) => state.fetchNewsReducer.filter);

  const onHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispath(setFilter(event.target.value));
  };
  return (
    <Box className="search__box">
      <Typography variant="h6" component="h4">
        Filter by keywords
      </Typography>
      <TextField
        id="outlined-basic"
        label="The Spaceflight News"
        variant="outlined"
        fullWidth
        onChange={onHandleChange}
        value={findArticles}
      />
    </Box>
  );
};

export default Search;
