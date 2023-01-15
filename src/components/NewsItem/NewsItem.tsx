import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

import { useAppSelector } from "../../hooks/redux-hooks";

import { INews } from "../../interfaces/interfaces";

import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

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
  // const filter = useAppSelector((state) => state.fetchNewsReducer.filter);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/article/${id}`);
  };
  return (
    <Grid
      key={id}
      item
      xs={12}
      md={6}
      lg={4}
      sx={{
        mb: "45px",
        maxHeight: "530px",
      }}
    >
      <Card sx={{ maxWidth: "400px", height: "100%" }}>
        <CardActionArea>
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
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {summary}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="inherit" onClick={handleNavigate}>
            Read more <ArrowForwardOutlinedIcon />
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default NewsItem;
