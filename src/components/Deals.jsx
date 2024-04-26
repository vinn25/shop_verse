import {
  Box,
  Card,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

import nike from "../utilities/image/nike_shoes.png";
import shop_now from "../utilities/image/shop_now.png";
import playstation from "../utilities/image/playstation.png";

const Deals = () => {
  return (
    <Box sx={{ bgcolor: "white", py: "3%" }}>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Grid item sx={{ textAlign: "center", cursor: "pointer" }}>
          <Card
            sx={{
              height: "250px",
              width: "400px",
              backgroundColor: "#FAFAFA",
              padding: "15px",
              pt: "20px",
              pb: "5px",
              borderRadius: "35px",
              boxShadow: "1px 1px 5px 1px #888888",
            }}
          >
            <Typography variant="h4" fontWeight="400" color="black">
              Nike, Adidas
            </Typography>
            <Typography variant="subtitle1">MIN 40% OFF</Typography>
            <CardMedia>
              <img src={nike} height={150} />
              {/* <img src={shop_now} height={40} /> */}
            </CardMedia>
            <CardMedia sx={{ marginTop: "-40px" }}>
              <img src={shop_now} height={40} />
            </CardMedia>
          </Card>
        </Grid>

        <Grid item sx={{ textAlign: "center", cursor: "pointer" }}>
          <Card
            sx={{
              height: "250px",
              width: "400px",
              backgroundColor: "#FAFAFA",
              padding: "15px",
              pt: "20px",
              pb: "5px",
              borderRadius: "35px",
              boxShadow: "1px 1px 5px 1px #888888",
            }}
          >
            <Typography variant="h4" fontWeight="400" color="black">
              Playstation 5
            </Typography>
            <Typography variant="subtitle1">MIN 25% OFF</Typography>
            <CardMedia>
              <img src={playstation} height={150} />
              {/* <img src={shop_now} height={40} /> */}
            </CardMedia>
            <CardMedia sx={{ marginTop: "-40px" }}>
              <img src={shop_now} height={40} />
            </CardMedia>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Deals;
