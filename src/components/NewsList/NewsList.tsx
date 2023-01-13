import { FC, useState } from "react";
import Grid from "@mui/material/Grid";
import NewsItem from "../NewsItem/NewsItem";

import { data } from "../assets/data/data";

import { INews } from "../../interfaces/interfaces";

interface INewsListProps {
  data?: INews[];
}

const NewsList = (props: INewsListProps) => {
  return (
    <Grid container spacing={2}>
      {data.map((item) => {
        return (
          <NewsItem
            id={item.id}
            title={item.title}
            imageUrl={item.imageUrl}
            summary={item.summary}
            publishedAt={item.publishedAt}
          />
        );
      })}
    </Grid>
  );
};

export default NewsList;
