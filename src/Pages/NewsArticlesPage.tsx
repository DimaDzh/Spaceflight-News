import React, { FC, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../hooks/redux-hooks";
import ArticlePageList from "../components/ArticlePage/ArticlePageList";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import ArticlePageItem from "../components/ArticlePage/ArticlePage";
import { ArrowBack } from "@mui/icons-material";
import title from "material-ui/svg-icons/editor/title";

type Props = {};

const NewsArticlesPage: FC = (props: Props) => {
  const articles = useAppSelector((state) => state.fetchNewsReducer.list);
  const { articleId } = useParams();
  const navigate = useNavigate();
  const article = articles.find((article) => article.id === Number(articleId));

  const goBack = () => {
    navigate("/");
  };

  useEffect(() => {
    if (!article) navigate("/notFound");
  }, [article, navigate]);

  return (
    <>
      <Grid container spacing={2}>
        <Container fixed maxWidth="md" key={article?.id}>
          <Card className="modal" sx={{ maxWidth: "100%", height: "100%" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="245"
                image={article?.imageUrl}
                alt={article?.title}
              />

              <CardContent>
                <Typography gutterBottom variant="h5" component="h3">
                  {article?.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {article?.summary}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="inherit" onClick={goBack}>
                <ArrowBack />
                Back to home page
              </Button>
            </CardActions>
          </Card>
        </Container>
        ;
      </Grid>
    </>
  );
};

export default NewsArticlesPage;
