import React from "react";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import { IconButton } from "@mui/material";
import ArrowCircleUpOutlinedIcon from "@mui/icons-material/ArrowCircleUpOutlined";
interface ScrollTopProps {
  window?: () => Window;
  children?: React.ReactElement | any;
}

const ScrollToTop = ({ children, window }: ScrollTopProps) => {
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector("#back-to-top-anchor");

    if (anchor) {
      anchor.scrollIntoView({
        block: "start",
      });
    }
  };

  return (
    <Fade in={trigger} aria-label="scroll back to top">
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        <IconButton size="large" color="primary">
          <ArrowCircleUpOutlinedIcon fontSize="large" />
        </IconButton>
      </Box>
    </Fade>
  );
};

export default ScrollToTop;
