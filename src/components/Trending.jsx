import { Box, Grid, Link, Stack, Typography } from "@mui/material";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import mobile from "../utilities/image/mobile.jpg";
import laptop from "../utilities/image/laptop.jpg";
import headphone from "../utilities/image/headphone.jpg";
import monitor from "../utilities/image/monitor.jpg";
import speaker from "../utilities/image/speaker.jpg";
import shoe from "../utilities/image/shoe.jpg";
import tablet from "../utilities/image/tablet.jpg";

const Trending = () => {
  return (
    <Box sx={{ bgcolor: "white", py: "2%" }}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        p={2}
      >
        <Typography variant="h5" fontWeight="500">
          Trending Categories
        </Typography>
        <Stack direction="row" alignItems="center">
          <Link
            variant="subtitle1"
            fontWeight="400"
            href="#show-more"
            sx={{
              color: "black",
              textDecoration: "none",
              "&:hover": {
                textDecoration: "",
              },
            }}
          >
            Show More
          </Link>
          <ArrowRightAltIcon />
        </Stack>
      </Stack>
      <Grid container gap={7} textAlign="center" pb={2} px={10}>
        <Grid item sx={{ cursor: "pointer" }}>
          {/* <Link href="#mobiles" sx={{ textDecoration: "none", color: "black" }}> */}
          <img src={mobile} height="90px" />
          <Typography variant="subtitle1" fontWeight="500">
            Mobiles
          </Typography>
          {/* </Link> */}
        </Grid>
        <Grid item sx={{ cursor: "pointer" }}>
          <img src={laptop} height="90px" />
          <Typography variant="subtitle1" fontWeight="500">
            Laptops
          </Typography>
        </Grid>
        <Grid item sx={{ cursor: "pointer" }}>
          <img src={tablet} height="90px" />
          <Typography variant="subtitle1" fontWeight="500">
            Tablet
          </Typography>
        </Grid>
        <Grid item sx={{ cursor: "pointer" }}>
          <img src={headphone} height="90px" />
          <Typography variant="subtitle1" fontWeight="500">
            Headpohones
          </Typography>
        </Grid>
        <Grid item sx={{ cursor: "pointer" }}>
          <img src={monitor} height="90px" />
          <Typography variant="subtitle1" fontWeight="500">
            Monitors & TVs
          </Typography>
        </Grid>
        <Grid item sx={{ cursor: "pointer" }}>
          <img src={speaker} height="90px" />
          <Typography variant="subtitle1" fontWeight="500">
            Speakers
          </Typography>
        </Grid>
        <Grid item sx={{ cursor: "pointer" }}>
          <img src={shoe} height="90px" />
          <Typography variant="subtitle1" fontWeight="500">
            Shoes
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Trending;
