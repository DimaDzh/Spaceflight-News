import React from "react";
import {
  Container,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions,
  CardActionArea,
} from "@mui/material";

import { INews } from "../../interfaces/interfaces";
import { IList } from "../../store/slices/getNewsSLice";
import { ArrowBack } from "@mui/icons-material/";

interface ArticlePageProps extends IList {
  handleClick?: React.MouseEventHandler<HTMLElement>;
}

const ArticlePageItem = ({
  id,
  imageUrl,
  summary,
  title,
  handleClick,
}: ArticlePageProps) => {
  return (
    <>
      <Container fixed maxWidth="md" key={id}>
        <Card className="modal" sx={{ maxWidth: "100%", height: "100%" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="245"
              image={imageUrl}
              alt={title}
            />

            <CardContent>
              <Typography gutterBottom variant="h5" component="h3">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {summary}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="inherit" onClick={handleClick}>
              <ArrowBack />
              Back to home page
            </Button>
          </CardActions>
        </Card>
      </Container>
    </>
  );
};

export default ArticlePageItem;
