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
import AnimatedText from "../Animations/AnimatedText";

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

  const locale = navigator.language;
  const dateOptions: Intl.DateTimeFormatOptions = {
    day: "numeric", // 2-digit
    month: "long", // numeric "2-digit", "narrow", "short" и "long"
    year: "numeric", // 2-digit
  };
  const UserDate = new Intl.DateTimeFormat(locale, dateOptions);

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
          <Box className="date__box">
            <Typography variant="body1" component="span">
              <CalendarMonthOutlinedIcon />
            </Typography>
            <Typography variant="body1" component="span">
              {UserDate.format(new Date(publishedAt))}
            </Typography>
          </Box>
          <AnimatedText>
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
          </AnimatedText>
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
function getDateTime(dateStr: string) {
  throw new Error("Function not implemented.");
}
