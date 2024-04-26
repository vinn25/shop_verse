import {
  Box,
  Button,
  Grid,
  Stack,
  Typography,
  Link,
  Card,
  Rating,
  CardMedia,
} from "@mui/material";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import iphone_case from "../utilities/image/case.png";

const Popular = () => {
  return (
    <Box sx={{ bgcolor: "white", py: "3%" }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="h5" fontWeight="500">
          Popular Products
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

      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "space-around",
          padding: "20px",
        }}
      >
        <Grid item>
          <Card
            sx={{
              height: "200px",
              width: "200px",
              textAlign: "center",
              padding: "10px",
              borderRadius: "20px",
              backgroundColor: "#FAFAFA",
              boxShadow: "1px 1px 5px 1px #888888",
              cursor: "pointer",
            }}
          >
            <img src={iphone_case} height={120} />
            <Rating readOnly />
            <CardMedia>
              <Typography variant="subtitle2" fontWeight={500}>
                Magnetic Case
              </Typography>
              <Typography color="#D75300">$13.00</Typography>
            </CardMedia>
          </Card>
        </Grid>

        <Grid item>
          <Card
            sx={{
              height: "200px",
              width: "200px",
              textAlign: "center",
              padding: "10px",
              borderRadius: "20px",
              backgroundColor: "#FAFAFA",
              boxShadow: "1px 1px 5px 1px #888888",
              cursor: "pointer",
            }}
          >
            <img src={iphone_case} height={120} />
            <Rating precision={0.5} readOnly />
            <CardMedia>
              <Typography variant="subtitle2" fontWeight={500}>
                Magnetic Case
              </Typography>
              <Typography color="#D75300">$13.00</Typography>
            </CardMedia>
          </Card>
        </Grid>

        <Grid item>
          <Card
            sx={{
              height: "200px",
              width: "200px",
              textAlign: "center",
              padding: "10px",
              borderRadius: "20px",
              backgroundColor: "#FAFAFA",
              boxShadow: "1px 1px 5px 1px #888888",
              cursor: "pointer",
            }}
          >
            <img src={iphone_case} height={120} />
            <Rating readOnly />
            <CardMedia>
              <Typography variant="subtitle2" fontWeight={500}>
                Magnetic Case
              </Typography>
              <Typography color="#D75300">$13.00</Typography>
            </CardMedia>
          </Card>
        </Grid>

        <Grid item>
          <Card
            sx={{
              height: "200px",
              width: "200px",
              textAlign: "center",
              padding: "10px",
              borderRadius: "20px",
              backgroundColor: "#FAFAFA",
              boxShadow: "1px 1px 5px 1px #888888",
              cursor: "pointer",
            }}
          >
            <img src={iphone_case} height={120} />
            <Rating readOnly />
            <CardMedia>
              <Typography variant="subtitle2" fontWeight={500}>
                Magnetic Case
              </Typography>
              <Typography color="#D75300">$13.00</Typography>
            </CardMedia>
          </Card>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "space-around",
          padding: "20px",
        }}
      >
        <Grid item>
          <Card
            sx={{
              height: "200px",
              width: "200px",
              textAlign: "center",
              padding: "10px",
              borderRadius: "20px",
              backgroundColor: "#FAFAFA",
              boxShadow: "1px 1px 5px 1px #888888",
              cursor: "pointer",
            }}
          >
            <img src={iphone_case} height={120} />
            <Rating precision={0.5} readOnly />
            <CardMedia>
              <Typography variant="subtitle2" fontWeight={500}>
                Magnetic Case
              </Typography>
              <Typography color="#D75300">$13.00</Typography>
            </CardMedia>
          </Card>
        </Grid>

        <Grid item>
          <Card
            sx={{
              height: "200px",
              width: "200px",
              textAlign: "center",
              padding: "10px",
              borderRadius: "20px",
              backgroundColor: "#FAFAFA",
              boxShadow: "1px 1px 5px 1px #888888",
              cursor: "pointer",
            }}
          >
            <img src={iphone_case} height={120} />
            <Rating readOnly />
            <CardMedia>
              <Typography variant="subtitle2" fontWeight={500}>
                Magnetic Case
              </Typography>
              <Typography color="#D75300">$13.00</Typography>
            </CardMedia>
          </Card>
        </Grid>

        <Grid item>
          <Card
            sx={{
              height: "200px",
              width: "200px",
              textAlign: "center",
              padding: "10px",
              borderRadius: "20px",
              backgroundColor: "#FAFAFA",
              boxShadow: "1px 1px 5px 1px #888888",
              cursor: "pointer",
            }}
          >
            <img src={iphone_case} height={120} />
            <Rating readOnly />
            <CardMedia>
              <Typography variant="subtitle2" fontWeight={500}>
                Magnetic Case
              </Typography>
              <Typography color="#D75300">$13.00</Typography>
            </CardMedia>
          </Card>
        </Grid>

        <Grid item>
          <Card
            sx={{
              height: "200px",
              width: "200px",
              textAlign: "center",
              padding: "10px",
              borderRadius: "20px",
              backgroundColor: "#FAFAFA",
              boxShadow: "1px 1px 5px 1px #888888",
              cursor: "pointer",
            }}
          >
            <img src={iphone_case} height={120} />
            <Rating precision={0.5} readOnly />
            <CardMedia>
              <Typography variant="subtitle2" fontWeight={500}>
                Magnetic Case
              </Typography>
              <Typography color="#D75300">$13.00</Typography>
            </CardMedia>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Popular;
