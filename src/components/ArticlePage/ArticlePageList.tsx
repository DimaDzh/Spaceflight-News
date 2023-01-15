import { Grid } from "@mui/material";
import { useAppSelector } from "../../hooks/redux-hooks";
import { useNavigate } from "react-router-dom";
import ArticlePageItem from "./ArticlePage";
type Props = {};

const ArticlePageList = (props: Props) => {
  const navigate = useNavigate();
  const dataNews = useAppSelector((state) => state.fetchNewsReducer.list);

  const goBack = () => {
    navigate("/");
  };

  return (
    <Grid container spacing={2}>
      {dataNews.map((item) => {
        return <ArticlePageItem key={item.id} {...item} handleClick={goBack} />;
      })}
    </Grid>
  );
};

export default ArticlePageList;
