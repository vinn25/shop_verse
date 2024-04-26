import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import accessorize from "../utilities/image/accessorize.png";
import clothes from "../utilities/image/clothes.png";

const Blog = () => {
  return (
    <Box sx={{ bgcolor: "white", py: "2%", pb: "0px" }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="h5" fontWeight="500">
          Our Blogs
        </Typography>

        <Stack direction="row" alignItems="center" mr={2}>
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

      <Grid container justifyContent="space-evenly" py="3%" pl="7%" pb={0}>
        <Grid item>
          <Card sx={{ height: "50%", width: "70%", borderRadius: "15px" }}>
            <CardMedia>
              <img src={accessorize} />
            </CardMedia>
          </Card>

          <Typography variant="h6" textAlign="left">
            Accessorize Like a Pro
          </Typography>
          <Stack direction="row" alignItems="center" spacing="18%">
            <Typography variant="subtitle2" fontWeight={400}>
              10th January 2024
            </Typography>
            <Stack direction="row" alignItems="center">
              <Link
                variant="subtitle2"
                fontWeight={400}
                href="#show-more"
                sx={{
                  color: "black",
                  textDecoration: "none",
                  "&:hover": {
                    textDecoration: "",
                  },
                }}
              >
                Read More
              </Link>
              <ArrowRightAltIcon />
            </Stack>
          </Stack>
        </Grid>

        <Grid item>
          <Card sx={{ height: "50%", width: "70%", borderRadius: "15px" }}>
            <CardMedia>
              <img src={clothes} />
            </CardMedia>
          </Card>

          <Typography variant="h6" textAlign="left">
            10 Timeless Wardrobe Staples
          </Typography>
          <Stack direction="row" alignItems="center" spacing="18%">
            <Typography variant="subtitle2" fontWeight={400}>
              3rd February 2024
            </Typography>
            <Stack direction="row" alignItems="center">
              <Link
                variant="subtitle2"
                fontWeight={400}
                href="#show-more"
                sx={{
                  color: "black",
                  textDecoration: "none",
                }}
              >
                Read More
              </Link>
              <ArrowRightAltIcon />
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Blog;
