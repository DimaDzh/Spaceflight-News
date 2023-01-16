import { FC } from "react";
import { useAppSelector } from "../../hooks/redux-hooks";

import Grid from "@mui/material/Grid";
import NewsItem from "../NewsItem/NewsItem";
import SkeletonItem from "../Skeleton/SkeletonItem";
import { INews } from "../../interfaces/interfaces";
import { Box, Divider, Typography } from "@mui/material";

import "./style.scss";

const NewsList: FC = () => {
  const getFilteredList = (list: INews[], keywords: string[]) => {
    if (keywords.length === 0) return list;
    const resultTitle = list.filter((article) =>
      keywords.some((word) =>
        article.title.toLowerCase().includes(word.toLowerCase())
      )
    );
    const resultSummary = list.filter((article) =>
      keywords.some((word) =>
        article.summary.toLowerCase().includes(word.toLowerCase())
      )
    );
    const result = resultTitle.concat(resultSummary);
    return result.filter((article, index) => result.indexOf(article) === index);
  };

  const dataNews = useAppSelector((state) => state.fetchNewsReducer.list);
  const { loading } = useAppSelector((state) => state.fetchNewsReducer);
  const filter = useAppSelector((state) => state.fetchNewsReducer.filter);
  const list = getFilteredList(dataNews, filter.split(" "));

  return (
    <>
      <Box className="results__section">
        <Typography variant="h6" component="h4">
          {filter ? `Find: ${list.length}` : `Results: ${list.length} articles`}
        </Typography>
      </Box>
      <Divider sx={{ mb: "50px" }} />

      <Grid container spacing={2}>
        {loading && <SkeletonItem />}
        {list.map((item) => {
          return <NewsItem key={item.id} {...item} />;
        })}
      </Grid>
    </>
  );
};

export default NewsList;
