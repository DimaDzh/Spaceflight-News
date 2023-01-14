import { FC } from "react";
import { useAppSelector } from "../../hooks/redux-hooks";

import Grid from "@mui/material/Grid";
import NewsItem from "../NewsItem/NewsItem";

const NewsList: FC = () => {
  const dataNews = useAppSelector((state) => state.fetchNewsReducer.list);
  return (
    <Grid container spacing={2}>
      {dataNews.map((item) => {
        return <NewsItem key={item.id} {...item} />;
      })}
    </Grid>
  );
};

export default NewsList;
