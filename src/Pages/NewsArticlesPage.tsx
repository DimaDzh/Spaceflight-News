import { FC, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../hooks/redux-hooks";
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
import { ArrowBack } from "@mui/icons-material";
import AnimatedPage from "./AnimatedPage";

import "./style.scss";
import Text from "./assets/Text";

const NewsArticlesPage: FC = () => {
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

  const articleLenght = article?.summary.split("\n").length;
  console.log(articleLenght);
  const moreHundred = articleLenght && articleLenght > 100 ? true : false;

  return (
    <>
      <AnimatedPage>
        <Container className="title__container">
          <CardMedia
            component="img"
            height="245px"
            image={article?.imageUrl}
            alt={article?.title}
          />
        </Container>
        <Grid className="title__container">
          <Container
            fixed
            maxWidth="md"
            key={article?.id}
            className="article__wrapper"
          >
            <Card className="article">
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h3">
                    {article?.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    {article?.summary}
                    {!moreHundred ? <Text /> : ""}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="inherit"
                  onClick={goBack}
                  className="arrow"
                >
                  <ArrowBack />
                  Back to home page
                </Button>
              </CardActions>
            </Card>
          </Container>
        </Grid>
      </AnimatedPage>
    </>
  );
};

export default NewsArticlesPage;
