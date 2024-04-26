import { Box, Button, Stack, Typography } from "@mui/material";
import design_background from "../utilities/image/design_background.jpg";
import watch_front from "../utilities/image/A_watch_front.png";

const Header = () => {
  return (
    <Box sx={{ bgcolor: "white" }}>
      <Box
        sx={{
          backgroundImage: `url(${design_background})`,
          height: "70vh",
          borderRadius: "50px",
        }}
      >
        <Stack direction="row" spacing={30}>
          <Stack sx={{ color: "white", py: "10%", pl: "3%" }}>
            <Typography variant="subtitle1" mb={2}>
              SALE UP TO 20% OFF
            </Typography>
            <Typography variant="h3" fontWeight="bold" mb={2}>
              Apple Watch Ultra 2
            </Typography>
            <Typography fontWeight="300" mb={1}>
              The most rugged and capable Apple Watch Pushes <br /> the limits
              again. Featuring the all-new S9 SiP
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                sx={{
                  borderRadius: "20px",
                  backgroundColor: "white",
                  color: "black",
                  "&:hover": {
                    backgroundColor: "#D75300",
                    color: "white",
                  },
                }}
                disableRipple
              >
                Shop Now
              </Button>
              <Button
                variant="contained"
                sx={{
                  borderRadius: "20px",
                  backgroundColor: "white",
                  color: "black",
                  "&:hover": {
                    backgroundColor: "#D75300",
                    color: "white",
                  },
                }}
                disableRipple
              >
                Learn More
              </Button>
            </Stack>
          </Stack>
          <img src={watch_front} height="450px" />
        </Stack>
      </Box>
    </Box>
  );
};

export default Header;
