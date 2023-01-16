import { FC } from "react";
import { Skeleton, Stack } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const SkeletonItem: FC = () => {
  return (
    <Grid
      item
      xs={12}
      md={6}
      lg={4}
      sx={{
        mb: "45px",
        maxHeight: "530px",
      }}
    >
      <Stack spacing={1}>
        <Skeleton variant="rounded" width={200} height={140} />
        <Typography variant="body1" component="span">
          {" "}
          <Skeleton width={200} />
        </Typography>
        <Typography variant="h5" component="h3">
          <Skeleton variant="rounded" width={200} />
        </Typography>
        <Typography variant="body2" component="p" color="text.secondary">
          <Skeleton variant="rounded" width={200} />
        </Typography>
        <Skeleton variant="rounded" width={110} height={10} />
      </Stack>
    </Grid>
  );
};

export default SkeletonItem;
