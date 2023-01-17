import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

import { INews } from "../../interfaces/interfaces";

import "./style.scss";

import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import { useCallback } from "react";
import HighlightedText from "../HighlightedText/HighlightedText";
import { useAppSelector } from "../../hooks/redux-hooks";

interface INewsItemProps extends INews {
  handleClick?: (event: UIEvent) => void;
}

const NewsItem = ({
  id,
  imageUrl,
  title,
  summary,
  publishedAt,
}: INewsItemProps) => {
  const filter = useAppSelector((state) => state.fetchNewsReducer.filter);

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/article/${id}`);
  };

  const lightText = useCallback(
    (str: string) => {
      return <HighlightedText filter={filter} str={str} />;
    },
    [filter]
  );

  return (
    <Grid
      key={id}
      item
      xs={12}
      md={6}
      lg={4}
      sx={{
        maxHeight: "530px",
      }}
      className="card__wrapper"
    >
      <Card className="card">
        <CardActionArea className="card__content">
          <CardMedia
            component="img"
            height="140"
            image={imageUrl}
            alt={title}
          />
          <Typography
            variant="body1"
            component="span"
            sx={{ color: "#363636", opacity: 0.6, fontSize: "14px" }}
          >
            <CalendarMonthOutlinedIcon />
          </Typography>
          <Typography
            variant="body1"
            component="span"
            sx={{ color: "#363636", opacity: 0.6, fontSize: "14px" }}
          >
            {publishedAt?.toLocaleString()}
          </Typography>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h3">
              {lightText(title)}
            </Typography>
            <Box className="summary__wrapper">
              <Typography
                variant="body2"
                color="text.secondary"
                className="summary__section"
              >
                {lightText(summary)}
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
        <CardActions className="card__footer">
          <Button
            size="small"
            color="inherit"
            onClick={handleNavigate}
            className="arrow"
          >
            Read more <ArrowForwardOutlinedIcon />
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default NewsItem;
