import { TextField, Container, Typography, Box } from "@mui/material";
import { ChangeEvent } from "react";

interface ISearchProps {
  onChange?: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  value?: string;
}

const Search = ({ onChange, value }: ISearchProps) => {
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
        onChange={onChange}
      />
    </Box>
  );
};

export default Search;
