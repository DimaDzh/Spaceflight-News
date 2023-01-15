import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { TextField, Typography, Box } from "@mui/material";
import { setFilter } from "../../store/slices/getNewsSLice";

const Search: FC = () => {
  const dispath = useAppDispatch();

  const findArticles = useAppSelector((state) => state.fetchNewsReducer.filter);

  const onHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispath(setFilter(event.target.value));
  };
  return (
    <Box
      sx={{
        mb: "10px",
      }}
    >
      <Typography variant="h6" component="h6">
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
